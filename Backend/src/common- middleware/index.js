const jwt = require('jsonwebtoken')

exports.requireSignin = (req, res, next) => {

    if(req.headers.authorization){
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user ;

    }
    else{
        return res.status(400).json({ message: 'Not Authorised '})
    }
    next();
    }

exports.userMiddleware =(req, res, next) =>{
    if(req.user.role !== 'user'){
        return res.status(400).json({ message: 'Trespassing !!, u will be reported to the pepegang'})
    }
    next();
}

exports.adminMiddleware =(req, res, next) =>{
    if(req.user.role !== 'admin'){
        return res.status(400).json({ message: 'Trespassing !!, u will be reported to the pepegang'})
    }
    next();
}