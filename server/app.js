import express from 'express';
import userRoute from './src/routes/userRoute.js';
const app = express();

app.use(express.json());

app.use('/api/v1',userRoute);

export default app;