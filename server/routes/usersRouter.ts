import { Router } from 'express';
import User from '../models/user';

const usersRouter = Router();

usersRouter.post('/', async (req, res)=>{
    try {
        const {name, email, image} = req.body
        const user = new User({name, email, image})
        await user.save()
        res.status(200).json(user);
    } catch (error) {
        res.status(404).send(error) 
    }
})

usersRouter.get('/', async (req, res)=>{
    try {
        const user = await User.find({ email: req.query.email})
        if(!user) return res.status(404).json({message: "User not found"})
        res.status(200).json(user);
    } catch (error) {
        res.status(404).send(error)
    }
})

export default usersRouter;