const server = require("express")();
const line = require("@line/bot-sdk");
const _ = require('lodash');
const Message = require('Message');


const line_config = {
  channelAccessToken: process.env.LINE_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET
};

server.listen(process.env.PORT || 3000);

server.post('/webhook', line.middleware(line_config), (req, res, next) => {
  res.sendStatus(200);
  const message = new Message();
  _.forEach(req.body.events((event) => {
    // メッセージで、メッセージがテキストであった場合
    if (event.type === "message" && event.message.type) {
      message.textMessage();
    }
  }));
  message.runPromise();
});

// 参考サイト
// https://qiita.com/nkjm/items/38808bbc97d6927837cd
