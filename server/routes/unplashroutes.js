import { Router } from "express";
import { getImagesController, searchController , uploadController, deleteImagesController, deleteAll } from "../controllers/infoimages.controller.js";

const router = Router();


router.post("/getImages", getImagesController);

router.post("/search", searchController);

router.post("/upload", uploadController);

router.delete("/deleteImage/:id/:passw", deleteImagesController);

router.delete("/all", deleteAll);

export default router;