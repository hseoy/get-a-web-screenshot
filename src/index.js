import express from 'express';
import morgan from 'morgan';

import capture from './capture.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  const websiteURL = req.query.website;
  capture(websiteURL)
    .then(file => res.contentType('image/png').send(file))
    .catch(e => {
      console.error(e);
      res.json('sorry, error');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is runniing on port ${PORT}`);
});
