import * as globby from 'globby';
import * as path from 'path';
import * as fs from 'fs';
import { IVideo, movieFileTypes } from '../../client/types/movieExplorerTypes';

import { clearTorrentName } from './clearTorrentName';

export const videoFilesInFolder = async (
  folderName: string,
  minSizeMB = 200,
): Promise<IVideo[]> => {
  console.log('Input folder: ', folderName);
  const paths: string[] = await globby(folderName, {
    expandDirectories: {
      extensions: movieFileTypes,
    },
  });

  const files: IVideo[] = paths.map(filePath => {
    const basefileName = path.basename(filePath);
    const fileInfo = fs.statSync(filePath);

    const searchableName = clearTorrentName(
      path.basename(filePath, path.extname(filePath)),
    );
    //console.log(`${path.basename(filePath, path.extname(filePath))} --->>> : ${searchableName}`);
    //console.log(`${searchableName}`);
    return {
      fileName: basefileName,
      filePath,
      searchableName,
      fileInfo: {
        accessTime: fileInfo.atime,
        modifiedTime: fileInfo.mtime,
        fileSizeMB: fileInfo.size / 1024 / 1024,
      },
    };
  });
  return files.filter(file => file.fileInfo.fileSizeMB > minSizeMB);
};
