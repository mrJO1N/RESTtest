"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = void 0;
var api = {
  user: {
    sendJson: function sendJson(ip, objToSend) {
      return fetch("/@api/user/".concat(ip), {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(objToSend)
      });
    },
    getJson: function getJson() {}
  }
};
exports.api = api;
api.user.sendJson(35, {});
fetch("/@api/user/0", {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: "POST",
  body: JSON.stringify({
    a: 1,
    b: 2
  })
}).then(function (res) {
  console.log(res);
})["catch"](function (res) {
  console.log(res);
});