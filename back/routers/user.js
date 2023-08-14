const router = require("express").Router();
const {loginClick} = require("../controllers/loginControllers");

router.post("/login", loginClick);

module.exports = router;
const {
  SaveUserInfo,
  ValidateDuplicateNickName,
  ValidateDuplicateUserId,
} = require("../controllers/SignUpControllers");

router.post("/duplicateId", ValidateDuplicateUserId);
router.post("/duplicateNickName", ValidateDuplicateNickName);
router.post("/signUp", SaveUserInfo);
module.exports = router;
