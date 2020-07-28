// require('cookie-parser')
import cookieParser from 'cookie-parser';
import express from 'express';
import bodyParser from 'body-parser';
import router from './router';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
require('./config/passport');

const app = express();

const { env } = process;
const port = env.PORT || 5000;
//mongodb
const url = env.CONNECTION_STRING || 'mongodb://localhost:27017/join-us';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, options).then(() => console.log('DB Connected'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router);

app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
