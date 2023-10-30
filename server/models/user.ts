import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
},
{
    versionKey: false,
}
);

export default model ('User', userSchema);