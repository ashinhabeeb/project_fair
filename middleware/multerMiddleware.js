
const multer  = require('multer')

//creating disk storage

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})

//filefilter

const filefilter = (req,file,callback)=>{
    if(file.mimetype=='image/png' || file.mimetype=='image/jpg' || file.mimetype=='image/jpeg'){
        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error('only png, jpeg, jpg files are allowed'))
    }
}

//multer configuration
const multerConfig = multer({
    storage:storage,
    fileFilter:filefilter
})

//export 
module.exports = multerConfig