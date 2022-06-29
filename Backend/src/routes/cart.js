const express =require('express');
const { requireSignin, userMiddleware } = require('../common- middleware');
const { addItemToCart } = require('../controller/cart');
const router = express.Router();
const multer =require('multer')
const path =require('path')

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function(req, file, cb){
        cb(null, shortid.generate() + '-' + file.originalname )
    }
})

const upload =multer({ storage })

router.post('/user/cart/addtocart',requireSignin, userMiddleware,upload.single('categoryImage'), addItemToCart); 


module.exports = router;
