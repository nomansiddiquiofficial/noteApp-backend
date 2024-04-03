import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import noteRouter from "./routes/Note.js"
const app = express()


// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import Note from "./models/note_model.js"
const port = 8000 || process.env.PORT

mongoose.connect('mongodb+srv://nomansiddiqui:ns1@cluster0.w00tijr.mongodb.net/noteDatabase').then(() => {

    app.get("/", (req, res) => {
        res.send("This is home page")
    })

    app.use("/notes", noteRouter)


}
)




app.listen(port, function () {
    console.log("running server at ", port);
})