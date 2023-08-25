const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const {isLogin} = require("../controllers/isLogin")

const {allBoard, createBoard, detailBoard,editBoard, deleteBoard} = require("../controllers/postController")
const {commentlist,createComment,editComment,deleteComment} =require("../controllers/CommentControllers")
const {recommentlist,createRecomment, editRecomment,deleteRecomment} = require("../controllers/ReCommentControllers")
const {likeslist,updateLikes,deleteLikes} = require("../controllers/likecommentController")

// Multer 설정
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join("..",'front', "public","imgs","userplanimg"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname)
      cb(null,  uniqueSuffix + fileExtension);
    },
  });
  
  const upload = multer({ storage: storage });
router.get('/allboard',isLogin,allBoard);
router.post("/write",upload.array("uploadedFiles",5),isLogin,createBoard);
router.get('/detail/:id',detailBoard);
router.post("/edit/:id",upload.array("uploadedFiles",5),editBoard)
router.get("/delete/:id",deleteBoard)

router.get('/commentlist',isLogin,commentlist)
router.post('/createComment',isLogin,createComment)
router.post('/commentEdit/:id',isLogin,editComment)
router.get('/commentDelet/:id',isLogin,deleteComment)

router.get('/recommentlist',isLogin,recommentlist)
router.post('/createRecomment',isLogin,createRecomment)
router.post('/editRecomment/:id',isLogin,editRecomment)
router.get('/deleteRecomment/:id',isLogin,deleteRecomment)

router.get("/likeslist/:id",isLogin,likeslist)
router.post("/updatelikes",isLogin,updateLikes)
router.get("/deleltlikes",isLogin,deleteLikes)

module.exports = router
