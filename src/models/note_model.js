import mongoose from "mongoose";

const noteSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },

    dateAdded: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
        
    },
    userId: {
        type: String,
        required: true
    },

})


export default  mongoose.model("Note", noteSchema);