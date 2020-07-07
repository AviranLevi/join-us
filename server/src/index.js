// require('cookie-parser')
import cookieParser from 'cookie-parser';
import express from 'express';
import bodyParser from 'body-parser';
import router from './router';

const app = express();

const { env } = process;
const port = env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', router);

app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
