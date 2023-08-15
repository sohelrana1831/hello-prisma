import express from 'express';
import { UserController } from './userController';
const router = express.Router()


// router.get('/create-user', (req,res) =>{
//     res.send('Hello Prisma')
// })

router.post('/create-user', UserController.insertIntoDB)
router.post('/profile', UserController.insertOrUpdateProfile)
router.get('/', UserController.getUser)
router.get('/:id', UserController.getSingleUser)


export const UserRouter = router