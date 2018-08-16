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

  app.use('/', (req, res) => {
    try {
      if (!req.session.visitCount) {
        req.session.visitCount = 0;
      }

      req.session.visitCount++;

      const videosBuffer = fs.readFileSync('movie-data.json', 'utf8');
      const bla = Buffer.from(videosBuffer).toString('base64');
      res.send(
        renderVM('./test/dev/index.vm', {
          visitCount: req.session.visitCount,
          videos: bla,
        }),
      );
    } catch (e) {
      console.log('errorrrr: ', e);
    }
    res.send(400);
  });

  return app.listen(port, () => {
    console.info(`Fake server is running on port ${port}`);
  });
}
