import { Schema, model } from "mongoose";

const bookmarkSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    icon:{
        type: String,
        required: true,
        trim: true
    },
    category:{
        type: String,
        required: true,
        trim: true
    },
    profileId: {
        type: String,
        required: true,
        trim: true        
    }
},
{
    versionKey: false,
}
);

export default model ('Bookmark', bookmarkSchema);