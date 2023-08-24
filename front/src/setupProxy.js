const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/user", {
      target: "http://localhost:8080",
      changeOrigin: true,
    })
  );

  app.use(
    "/getPic",
    createProxyMiddleware({
      target: "http://localhost:8080", // 프록시 대상 서버 주소
      changeOrigin: true,
    })
  );

  app.use(
    "/openAI",
    createProxyMiddleware({
      target: "http://localhost:8080", // 프록시 대상 서버 주소
      changeOrigin: true,
    })
  );
  app.use(
    "/post",
    createProxyMiddleware({
      target: "http://localhost:8080", // 프록시 대상 서버 주소
      changeOrigin: true,
    })
  );
  app.use(
    "/mypage",
    createProxyMiddleware({
      target: "http://localhost:8080", // 프록시 대상 서버 주소
      changeOrigin: true,
    })
  );
  app.use(
    "/admin",
    createProxyMiddleware({
      target: "http://localhost:8080", // 프록시 대상 서버 주소
      changeOrigin: true,
    })
  );
  app.use(
    "/plan",
    createProxyMiddleware({
      target: "http://localhost:8080", // 프록시 대상 서버 주소
      changeOrigin: true,
    })
  );
};
