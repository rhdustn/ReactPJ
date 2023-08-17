const router = require("express").Router();

const {allBoard, createBoard, detailBoard,editBoard, deleteBoard} = require("../controllers/postController")

router.post('board',allBoard);
router.post("write",createBoard);
router.post('detail/:id',detailBoard);
router.post("edit/:id",editBoard)
router.post("delete/:id",deleteBoard)

module.exports = router
