import express from "express"
const router = express.Router()
import Note from "../models/note_model.js"

router.get("/list", async (req, res) => {
    var Notes = await Note.find();
    res.json(Notes);
})

router.post("/list/", async (req, res) => {
    var Notes = await Note.find({userId: req.body.userid});
    res.json(Notes);
})

router.post("/add", async (req, res) => {

    await Note.deleteOne({userId: req.body.userId})

    const newNote = new Note({
        id: req.body.id,
        userId: req.body.userId,
        title: req.body.title,
        content: req.body.content, 
    })
   await newNote.save()
    
   const response= "new note created"
   res.send(response)

})

router.post("/delete", async (req, res) => {

    await Note.deleteOne({userId: req.body.userId})

  
   const response = `note is deleted at id ${userId}`
   res.send(response)

})

export default router