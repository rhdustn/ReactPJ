const jwt = require("jsonwebtoken");

exports.isLogin = async(req,res,next)=>{
    try {
        const {access_token} = req.session
        jwt.verify(access_token,process.env.ACCESSTOKENKEY,(err, decoded)=>{
        if(err){
            console.log(err)
            res.send("다시 로그인 해주세요")
        }else{
            req.decoded = decoded;
            next()
        }
        })
    } catch (error) {
        
    }
}