import mongoose from "mongoose";

const infoImages = new mongoose.Schema({

    label:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    image:{
        url: String,
        public_id: String
    }

})

export default mongoose.model("infoImages", infoImages);