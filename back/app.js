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

// 필요한 패키지 import
const cheerio = require("cheerio");
const axios = require("axios");
const iconv = require("iconv-lite");
const searchQuery = "후쿠오카";
const encodedSearchQuery = encodeURIComponent(searchQuery);
const url = `
https://pixabay.com/ko/images/search/${encodedSearchQuery}
`;

//api로 '/goods/add/crawling' 요청이 오면
//해당 url로 GET요청! arraybuffer(html과 유사)로 데이터를 받는다.
app.get("/test", async (req, res) => {
  const getHtml = async () => {
    try {
      return await axios.get(
        "https://lostark.game.onstove.com/Profile/Character/%EB%AA%A8%EC%BD%94%EC%BD%94%EB%B3%BC%EB%94%B0%EA%B5%AC%EB%B9%A0%EB%8A%94%EC%86%8C%EB%A6%AC"
      );
    } catch (error) {
      console.error(error);
    }
  };
  getHtml().then((html) => {
    const $ = cheerio.load(html);
    console.log($.html);
  });
});

// Multer 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(".", "imgs"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

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

app.use("/user", upload.single("image"), userRouter);

// gptAPI 테스트 -----20230807 zerohoney
app.use("/openAI", testGPT);

const server = app.listen(8080, () => {
  console.log("server on");
});

// rlt xptmxmtmxm
