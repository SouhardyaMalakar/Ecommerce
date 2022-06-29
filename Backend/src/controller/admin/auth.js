const  User  = require('../../models/user');
const jwt =require('jsonwebtoken')

exports.signup= (req, res ) => {
    User.findOne ({ email: req.body.email})
    
    .exec((error, user) => {
        if(user) return res.status(400).json({
            message: "Admin already Registered"
        });

        const {
            firstName,
            lastName,
            email,
            password,
        } = req.body;
        const _user = new User({ 
             firstName,
             lastName,
              email,
             password,
             userName: Math.random().toString(),
             role: 'admin'
        });

        _user.save((error, data) =>{
            if(error){
                return res.status(400).json({
                      message: error
                });
            
            }
               if(data){
                   return res.status(201).json({
                       message: "Signup Successful"
                   })
               }

        });
        
    })
}
    
exports.signin = (req, res) =>{
     User.findOne ({email: req.body.email})
     .exec((error, user) => {
        if(error) return res.status(400).json({error});
        if(user) {

            if (user.authenticate(req.body.password) && user.role === 'admin'){
                const token = jwt.sign({_id: user._id, role: user.role}, process.env.JWT_SECRET, { expiresIn: '1h'} );
                const { _id, firstName, lastName, email, role, fullName} = user;
                res.status(200).json({
                    token,
                    user:[
                       _id, firstName, lastName, email, role, fullName
                    ]
                })

            }
            else{
                return res.status(400).json({message: "Invalid email or password"})
            }
     }
     
        else{
            return res.status(400).json({message: "Invalid"})
        }
 }
     )}



//signin
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDY2M2NlNDg5Yzc2MzVlNTA0ZGU0MjciLCJpYXQiOjE2MTczMTc1NjYsImV4cCI6MTYxNzMyMTE2Nn0.XOURZSk7_GgWvLHz0LxPLC1yq1Sllq9M-uikypTrwZ4",
//     "user": [
//         "60663ce489c7635e504de427",
//         "JESUS",
//         "MALD",
//         "jesus2169.god@gmail.com",
//         "admin",
//         "JESUS MALD"
//     ]
// }";