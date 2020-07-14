// require('cookie-parser')
import cookieParser from 'cookie-parser';
import express from 'express';
import bodyParser from 'body-parser';
import router from './router';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

const { env } = process;
const port = env.PORT || 5000;

mongoose
  .connect(env.CONNECTION_STRING || 'mongodb://localhost/join-us-db', { useNewUrlParser: true })
  .then(() => console.log('DB Connected'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', router);

app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
