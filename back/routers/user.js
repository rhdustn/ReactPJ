const { SaveUserInfo,ValidateDuplicateNickName,ValidateDuplicateUserId, } = require("../controllers/SignUpControllers");

const router = require("express").Router();
router.post("/duplicateId", ValidateDuplicateUserId);
router.post("/signUp", SaveUserInfo);
module.exports = router;
