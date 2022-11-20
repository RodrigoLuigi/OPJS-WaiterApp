import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose
  .connect('mongodb+srv://digaor:2717476@cluster0.e6vlilv.mongodb.net/test')
  .then(() => {
    const app = express();
    const port = 3000;

    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port} 🚀`);
    });
  })
  .catch(() => console.log('error co conectar no mongodb'));
