import * as express from 'express';
import * as session from 'express-session';
import { renderVM } from './vm';
import * as fs from 'fs';

export function start(port = process.env.PORT || 3000): any {
  const app = express();

  app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true,
    }),
  );
  app.use('/_api/videos', (req, res) => {
    const videos = JSON.parse(fs.readFileSync('movie-data.json', 'utf8'));
    res.send({ videos });
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
    console.info(`Fake server is running on port ${port}`);
  });
}
