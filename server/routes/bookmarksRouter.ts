import { Router } from 'express';
import Bookmark from '../models/bookmark';

const bookmarksRouter = Router();

bookmarksRouter.get('/', async (req, res) => {
    try {
         const profileId = req.query.profileId; 
         if (!profileId) {
             return res.status(400).send("ProfileId needed");
         }
 
         const bookmarks = await Bookmark.find({ profileId: profileId });
         if (!bookmarks || bookmarks.length === 0) {
             return res.status(200).send("You don't have any bookmarks yet.. add some!");
         }
         res.status(200).send(bookmarks);
    } catch (error) {
         res.status(500).send(error);
    }
 })
 
bookmarksRouter.post('/', async (req, res)=>{
    try {
        const {title, url, icon, category, profileId} = req.body
        const bookmark = new Bookmark({title, url, icon, category, profileId})
        await bookmark.save()
        res.status(200).json(bookmark);
    } catch (error) {
        res.status(500).send(error) 
    }
})

bookmarksRouter.get('/:id', async (req, res)=>{
    try {
        const bookmark = await Bookmark.findById(req.params.id)
        if(!bookmark) return res.status(404).json({message: "Bookmark not found"})
        res.status(200).json(bookmark);
    } catch (error) {
        res.status(500).send(error)
    }
})

bookmarksRouter.delete('/:id', async (req, res)=>{
    try {
        const bookmark = await Bookmark.findByIdAndDelete(req.params.id)
        if(!bookmark) return res.status(404).json({message: "Bookmark not found"})
        res.status(200).json(bookmark);
    } catch (error) {
        res.status(500).send(error)
    }
})

bookmarksRouter.put('/:id', async (req, res)=>{
    try {
        const bookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!bookmark) return res.status(404).json({message: "Bookmark not found"})
        res.status(200).json(bookmark);
    } catch (error) {
        res.status(500).send(error)
    }
})


export default bookmarksRouter;