const router = require("express").Router();
const { isLogin } = require("../controllers/isLogin");
const {loginClick} = require("../controllers/loginControllers");

const {
  SaveUserInfo,
  ValidateDuplicateNickName,
  ValidateDuplicateUserId,
  GetLoginUser
} = require("../controllers/SignUpControllers");

// 회원가입
router.post("/duplicateId", ValidateDuplicateUserId);
router.post("/duplicateNickName", ValidateDuplicateNickName);
router.post("/signUp", SaveUserInfo);
router.get('/loginUser',isLogin,GetLoginUser)
module.exports = router;

// 로그인
router.post("/login", loginClick);

module.exports = router;