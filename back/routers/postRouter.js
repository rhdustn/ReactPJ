const router = require("express").Router();
const multer = require("multer");
const path = require("path");

const {allBoard, createBoard, detailBoard,editBoard, deleteBoard} = require("../controllers/postController")
// Multer 설정
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join("..",'back', "imgs"));
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
router.post('detail/:id',detailBoard);
router.post("edit/:id",editBoard)
router.post("delete/:id",deleteBoard)

module.exports = router
