import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

const PORT = 3000;
app.get('/', (req, res) => {
  res.send('Welcome to Ampersand!');
});

app.listen(PORT, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${PORT}`);
});

export default app;