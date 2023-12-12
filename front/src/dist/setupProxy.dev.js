"use strict";

var _require = require("http-proxy-middleware"),
    createProxyMiddleware = _require.createProxyMiddleware;

module.exports = function (app) {
  app.use(createProxyMiddleware("/user", {
    target: "http://54.180.79.214:8080",
    changeOrigin: true
  }));
  app.use("/getPic", createProxyMiddleware({
    target: "http://54.180.79.214:8080",
    // 프록시 대상 서버 주소
    changeOrigin: true
  }));
};