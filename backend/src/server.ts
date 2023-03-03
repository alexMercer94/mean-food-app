import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { dbConnect } from './configs/database.config';
import foodRouter from './routers/food.router';
import orderRouter from './routers/order.router';
import userRouter from './routers/user.router';
dotenv.config();
dbConnect();

const app = express();
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:4200'],
    })
);

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('Website served on http://localhost:' + port);
});
