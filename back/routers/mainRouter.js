const router = require("express").Router();
const {testcon} = require("../controllers/mainControllers");

router.get("/", testcon);

module.exports = router;