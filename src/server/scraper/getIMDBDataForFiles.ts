import { IVideo } from '../../client/types/movieExplorerTypes';
import { random } from './random';
import * as imdb from 'imdb-api';
import * as sec from 'search-engine-client';
import Semaphore from 'semaphore-async-await';

export interface ISearchEngineResult {
  engine: string;
  search: string;
  count: number;
  links: string[];
  error: boolean;
}

export const getIMDBDataForFiles = async (
  inputFiles: IVideo[],
  previousDB: IVideo[],
  imdbApiKey: string,
) => {
  try {
    const lock = new Semaphore(10);
    let count = 0;
    const uniqueSearchableName = Array.from(
      new Set(inputFiles.map(f => f.searchableName)),
    );

    // search bing for the imdb id for each movie name (or get from current db) and get its imdb data:
    const withImdbResultsPromises = uniqueSearchableName.map(
      async videoName => {
        let vid = {
          videoName,
          imdbId: null,
          imdbLink: null,
          imdbData: null,
        };
        await lock.acquire();
        ++count;

        try {
          const imdbId =
            getImdbIdFromPreviousDb(videoName, previousDB) ||
            (await getImdbIdFromSearchEngine(videoName));

          if (imdbId) {
            vid.imdbId = imdbId;
            const imdbData = await imdb.getById(imdbId, {
              apiKey: imdbApiKey,
              timeout: 15000,
            });
            vid = {
              videoName,
              imdbId,
              imdbLink: imdbData.imdburl,
              imdbData,
            };
          } else {
            console.log(
              `imdb api found nothing for imdb id: ${imdbId} for video: ${videoName}`,
            );
          }
        } catch (error) {
          console.log('errrrrorrr', error);
        } finally {
          lock.release();
        }
        console.log('% done: ', (count / uniqueSearchableName.length) * 100);
        return vid;
      },
    );
    const withImdb = await Promise.all(withImdbResultsPromises);
    console.log('done searching!, found:', withImdb.length);

    const movieNameToImdbDataMap = withImdb.reduce((map, vid) => {
      if (vid) {
        map[vid.videoName] = vid;
      }
      return map;
    }, {});

    const files: IVideo[] = inputFiles.map(f => {
      if (
        movieNameToImdbDataMap[f.searchableName] &&
        movieNameToImdbDataMap[f.searchableName].imdbLink
      ) {
        const searchEngineImdbLink =
          movieNameToImdbDataMap[f.searchableName].imdbLink;
        const imdbId = movieNameToImdbDataMap[f.searchableName].imdbId;
        const imdbData = movieNameToImdbDataMap[f.searchableName].imdbData;
        return { ...f, searchEngineImdbLink, imdbId, imdbData };
      }
    });
    return files;
  } catch (e) {
    console.log(
      `unexpected error while searching search engines and imdb: ${e}`,
    );
  }
  return null;
};

const getImdbIdFromSearchEngine = async (videoName): Promise<string> => {
  const options = {
    count: 1,
    show: false,
    debug: true,
    wait: random(50, 150),
  };
  let searchResults: ISearchEngineResult;
  let result: string;
  const searchTerm = `site:imdb.com/title ${videoName}`;
  searchResults = await sec.google(searchTerm, options);
  result = extractLink(searchResults);
  if (result) {
    return extractImdbIdFromLink(result);
  }
  searchResults = await sec.duckduckgo(searchTerm, options);
  result = extractLink(searchResults);
  if (result) {
    return extractImdbIdFromLink(result);
  }
  searchResults = await sec.bing(searchTerm, options);
  result = extractLink(searchResults);
  if (result) {
    return extractImdbIdFromLink(result);
  }
  console.log('search engines failed for: ', videoName);

  return null;
};

const extractLink = (searchResults: ISearchEngineResult): string => {
  if (
    !searchResults.error &&
    searchResults.count > 0 &&
    searchResults.links &&
    searchResults.links.length > 0
  ) {
    return searchResults.links[0];
  }
  return null;
};

const getImdbIdFromPreviousDb = (videoName, previousDB: IVideo[]): string => {
  if (previousDB) {
    const foundVid = previousDB.find(
      vid => vid && vid.searchableName === videoName,
    );
    if (foundVid) {
      return foundVid.imdbId;
    }
  }
  return null;
};

const extractImdbIdFromLink = (imdbLink: string): string => {
  const regResult = new RegExp(/tt\d{7}/).exec(imdbLink);
  if (regResult && regResult[0] && regResult[0].length > 0) {
    return regResult[0];
  }
  console.log('imdb regex failed for:', imdbLink);
  return null;
};
