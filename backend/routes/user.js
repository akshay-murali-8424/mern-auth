import express from "express";
import * as userController from "../controllers/userControllers.js";
import uploadProfilePicture from "../middlewares/multer.js";
import {userAuthentication} from "../middlewares/authMiddlewares.js";
const router = express.Router();

router.post('/login',userController.verifyLogin)

router.post('/register',userController.register)

router.patch('/set-profile-picture',uploadProfilePicture,userController.setProfilePicture)

router.post('/logout')

export default router;