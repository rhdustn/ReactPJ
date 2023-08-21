const express = require("express");
const dot = require("dotenv").config();
require("dotenv").config();
const session = require("express-session");
const { sequelize } = require("./models");
const path = require("path");
const cors = require("cors");
const app = express();
const mainRouter = require("./routers/mainRouter");
// gptAPI 테스트 -----20230807 zerohoney
const testGPT = require("./routers/testGPT");
// 이미지를 받기위한 multer
const multer = require("multer");
// 회원가입,로그인 기능이 있는 라우터
const userRouter = require("./routers/user");
const postRouter = require("./routers/postRouter")
const adminRouter = require("./routers/adminRouter")

// // Multer 설정
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(".", "imgs"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// 아마 form 데이터
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

console.log("123123");

sequelize
  .sync({ force: false })
  .then((e) => {
    console.log("sequelize 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", mainRouter);
app.use("/post",postRouter)

app.use("/user", userRouter);
app.use("/admin", adminRouter);

// gptAPI 테스트 -----20230807 zerohoney
app.use("/openAI", testGPT);

const server = app.listen(8080, () => {
  console.log("server on");
});

// rlt xptmxmtmxm
