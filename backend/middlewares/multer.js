import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({

    destination:'./uploads',
    filename: function (req, file, cb) {
        console.log('cb ' + file)
        cb(null, file.fieldname + '-' + Date.now() +
            path.extname(file.originalname))
    }

});

const upload = multer({
    storage: storage,

});

export default upload.single('profilePic')

