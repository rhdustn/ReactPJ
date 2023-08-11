const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/user', // 프론트엔드에서 /api로 시작하는 요청을 프록시로 설정
    createProxyMiddleware({
      target: 'http://localhost:8080/user', // API 서버 주소
      changeOrigin: true,
    })
  );
};