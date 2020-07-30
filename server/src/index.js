import cookieParser from 'cookie-parser';
import express from 'express';
import router from './router';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const { env } = process;
const port = env.PORT || 5000;
const url = env.CONNECTION_STRING || 'mongodb://localhost:27017/join-us';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.connect(url, options).then(() => console.log('DB Connected'));
app.use(express.json());
app.use(cookieParser());

app.use(cors());

app.use('/api', router);

app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
