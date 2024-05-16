import dotenv from 'dotenv';
dotenv.config();

import  express from 'express';
import {connectDB} from './db/index.js';
import postRouter from './routes/post.route.js'
import {errorHandler} from './meddlewares/error_handler.middleware.js'


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get('/', (req, res)=> {
    res.send("Hello World");
})


app.use('/api/posts', postRouter);
app.use(errorHandler);

connectDB()
.then(()=> {
    app.listen(8000, ()=> {
        console.log(`Server is running on port:8000`);
    })
})
.catch((err)=> {
    console.log("MongoDB connection failed", err);
})