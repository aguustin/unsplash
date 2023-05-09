import imagesInfo from "../models/imagesInfo.js";
import { imageUrl } from "../libs/cloudinary.js";
//import infoUser from "../models/info.js";

export const getImagesController = async (req, res) => {
    const {password} = req.body;

    try {
        const findImages = await imagesInfo.find({password: password});
        res.send(findImages);
    } catch (error) {
        res.sendStatus("error");
    }
}

/*export const searchController = async (req, res) => {
    const {searchLabel} = req.body;

    try {
        const findImages = await imagesInfo.find({label: searchLabel});
        res.send(findImages);
    } catch (error) {
        console.log(error);
    }
}*/

export const searchController = async (req, res) => {
    const {searchLabel} = req.body;

    try {
        const findImages = await imagesInfo.find({label: {$regex: searchLabel, $options: 'i'}});
        res.send(findImages);
    } catch (error) {
        console.log(error);
    }
}




export const uploadController = async (req, res) => {

    const {label, password} = req.body;
    let image;

    if(req.files){
        const result = await imageUrl(req.files.uploads.tempFilePath);
        image = {
            url: result.secure_url,
            public_id: result.public_id
        }
    }
        const newImages = new imagesInfo({label, password, image});
        await newImages.save();
        return res.json(newImages);     
}

export const deleteImagesController = async (req, res) => {

    const id = req.params.id;
    const passw = req.params.passw;

    const takepass = await imagesInfo.findById({_id: id});

    if(passw == takepass.password && id){
        await imagesInfo.findByIdAndDelete({_id: id});
        res.sendStatus(200);
    }else{
        res.sendStatus(404);
    }
}

export const deleteAll = async (req, res) => {
    await imagesInfo.deleteMany();
    res.sendStatus(200);
}