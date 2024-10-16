import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // from Cloudinary dashboard
  api_key: process.env.CLOUDINARY_API_KEY, // from Cloudinary dashboard
  api_secret: process.env.CLOUDINARY_API_SECRET, // from Cloudinary dashboard
});

// Configure Cloudinary Storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads", // Cloudinary folder to store images
    format: async (req, file) => "png", // Or you can set it dynamically based on the file type
    public_id: (req, file) => `${file.fieldname}-${Date.now()}`,
  },
});

// Set up Multer to use Cloudinary storage
export const upload = multer({ storage: storage });
