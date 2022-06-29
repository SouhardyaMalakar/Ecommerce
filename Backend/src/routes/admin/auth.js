const express =require('express');
const {signup, signin} = require('../../controller/admin/auth');
const {validateSignupRequest, isRequestValidated } = require('../../validators/auth');
const router = express.Router();

router.post('/signup', validateSignupRequest, isRequestValidated, signup); 

router.post('/signin', signin);

// router.post('/profile', requireSignin , (req,res) =>{
//     res.status(200).json({ user: "profile"})
// });

module.exports = router;