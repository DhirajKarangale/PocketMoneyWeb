import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const connectionUrl = 'mongodb+srv://dhirajkarangale:-DK-DBPass@02@pocketmoney.u7e9qfp.mongodb.net/?retryWrites=true&w=majority';
const port = process.env.PORT || 5000;

mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log("Server Runing on Port: " + port)))
    .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

