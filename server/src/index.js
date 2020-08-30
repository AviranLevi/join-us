import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import sslRedirect from 'heroku-ssl-redirect';
import router from './router';

const app = express();
const { env } = process;
const port = env.PORT || 5000;
const url = env.CONNECTION_STRING || 'mongodb://localhost:27017/join-us';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(url, options).then(() => console.log('DB Connected'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(sslRedirect());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials: true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
