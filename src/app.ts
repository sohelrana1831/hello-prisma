import cors from 'cors';
import express, { Application } from "express";
import { CategoryRouter } from './modules/category/categoryRoute';
import { PostRouter } from './modules/post/postRoute';
import { UserRouter } from './modules/user/userRoute';

const app:Application = express()
    app.use(express.json())
    app.use(cors())
    app.use(express.urlencoded({extended:true}))

    app.use('/api/v1/user', UserRouter)
    app.use('/api/v1/category', CategoryRouter)
    app.use('/api/v1/post',PostRouter)

export default app