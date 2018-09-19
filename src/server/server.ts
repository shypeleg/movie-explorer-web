import { FileWatcher } from './scraper/FileWatcher';
import * as express from 'express';
import * as session from 'express-session';
import { renderVM, loadData } from './vm';

export const start = async (port = process.env.PORT || 3000): Promise<any> => {
  console.log('loading data');
  const config = loadData('./config.data.json');
  const configPrivate = loadData('./config.private.data.json');

  const watcher = new FileWatcher();
  await watcher.load(
    config.watchFolders[0],
    config.imdb_api_key || configPrivate.imdb_api_key,
  );
  watcher.watch();
  console.log('loaded');
  const app = express();

  app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true,
    }),
  );
  app.use('/_api/videos', (req, res) => {
    res.send({ videos: watcher.getDatabase() });
  });
  app.use('/', (req, res) => {
    try {
      res.send(renderVM('./src/server/index.vm', {}));
    } catch (e) {
      console.log('errorrrr: ', e);
    }
    res.send(400);
  });

  return app.listen(port, () => {
    console.info(`Movie Explorer Web server is running on port ${port}`);
  });
};
