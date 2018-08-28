
const line = require("@line/bot-sdk");
const bot = new line.Client(line_config);

module.exports = class Message {
  constructor() {
    this.promise = [];
  }
  textMessage() {
    if (event.message.text === "hoge") {
      this.promise.push(bot.replyMessage(event.replyToken, {
        type: "text",
        text: "fuga"
      }));
    }
  }
  runPromise() {
    Promise.all(this.promise).then(
      (res) => {
        console.log(`${res.length} event`);
      }
    );
  }
}
