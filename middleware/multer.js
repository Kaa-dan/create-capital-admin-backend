import Multer from "multer";
import {CloudinaryStorage} from "multer-storage-cloudinary"
import cloudinary from "../middleware/cloudinary.js";
const storage = new CloudinaryStorage({
  cloudinary:cloudinary,
  params:{
    folder:"blogImages",
    resource_type:"auto",
    allowed_formats:["jpg","jpeg","png","gif"]
  },
});
export const upload = Multer({
  storage
});
