import { IVideo } from '../../client/types/movieExplorerTypes';
import * as fs from 'fs';
import { loadData } from '../vm';
const DB_FILE_NAME = 'movie-data.json';

export const loadDBSync = (): IVideo[] => {
  if (fs.existsSync(DB_FILE_NAME)) {
    console.log('Found a local DB file');
    const database: IVideo[] = loadData(DB_FILE_NAME);
    return removeNonExistentFilesFromDB(database.filter(v => v !== null));
  }
  console.log('local DB file does not exist');
};

const removeNonExistentFilesFromDB = (db: IVideo[]): IVideo[] => {
  return db
    .map(video => {
      if (fs.existsSync(video.filePath)) {
        return video;
      }
      console.log(`Removing file: ${video.filePath}`);
    })
    .filter(video => video);
};

export const saveDatabaseSync = (database: IVideo[]) => {
  fs.writeFileSync(DB_FILE_NAME, JSON.stringify(database));
  console.log('Updated DB version saved');
};
