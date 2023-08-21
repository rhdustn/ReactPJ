const router = require("express").Router();
const multer = require("multer");
const path = require("path");

const {allBoard, createBoard, detailBoard,editBoard, deleteBoard} = require("../controllers/postController")
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
router.get('/allboard',allBoard);
router.post("/write",upload.array("uploadedFiles",5),createBoard);
router.get('/detail/:id',detailBoard);
router.post("/edit/:id",upload.array("uploadedFiles",5),editBoard)
router.post("/delete/:id",deleteBoard)

module.exports = router
