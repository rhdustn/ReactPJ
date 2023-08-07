// gptAPI 테스트 -----20230807 zerohoney

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const sendPropmpt = () => {
  (async () => {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content:
            "오사카로 연인과,배우자와,반려동물과 SNS핫플레이스,힐링이 되고,문화 예술 역사가 있는 여행지를 json형식으로 출력해줘",
        },
      ],
    });
    console.log(completion.data.choices[0].message);
  })();
};


const router = require("express").Router();

router.get("/");

module.exports = router;
