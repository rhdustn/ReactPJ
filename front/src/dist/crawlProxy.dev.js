"use strict";

var _require = require("http-proxy-middleware"),
    createProxyMiddleware = _require.createProxyMiddleware;

module.exports = function (app) {
  app.use(createProxyMiddleware("/getPic", {
    target: "http://54.180.79.214:8080",
    changeOrigin: true
  }));
};