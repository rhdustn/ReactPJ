const router = require("express").Router();


router.get("/getInfo", isLogin, getUserInfo)


module.exports = router;