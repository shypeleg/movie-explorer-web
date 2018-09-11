import { videoFilesInFolder } from './videoFilesInFolder';
import { IVideo } from '../../client/types/movieExplorerTypes';
import * as watch from 'node-watch';
import { getIMDBDataForFiles } from './getIMDBDataForFiles';
import { loadDBSync, saveDatabaseSync } from './database';

export class FileWatcher {
  private database: IVideo[];
  private folder;
  private imdbApiKey;

  load = async (folder: string, imdbApiKey: string) => {
    this.folder = folder;
    this.imdbApiKey = imdbApiKey;
    this.database = loadDBSync();
    console.log(`Local DB has ${this.database.length} files`);
    try {
      const filesInFolder = await videoFilesInFolder(this.folder);
      console.log(`Found ${filesInFolder.length} video files!`);
      const imdbFiles = await getIMDBDataForFiles(
        filesInFolder,
        this.database,
        this.imdbApiKey,
      );

      console.log(`*****************************`);
      console.log(`Finished with ${imdbFiles.length} video files`);
      console.log(`*****************************`);
      // then save this as a db structure
      this.database = imdbFiles;
      saveDatabaseSync(imdbFiles);
    } catch (e) {
      console.log('exception: ', e);
    }
  };
  getDatabase = () => this.database;
  watch() {
    watch(this.folder, { recursive: true }, (evt, name) => {
      console.log('%s changed.', name);
      console.log('evt', evt);
    });
  }
}
