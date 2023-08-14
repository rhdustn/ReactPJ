const router = require("express").Router();
const {loginClick} = require("../controllers/loginControllers");

router.post("/login", loginClick);

module.exports = router;