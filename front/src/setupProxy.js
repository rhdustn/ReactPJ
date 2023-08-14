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
};
