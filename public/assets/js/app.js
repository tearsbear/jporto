var app = new Framework7({
  // App root element
  el: "#app",
  // App Name
  name: "Jiaan",
  // App id
  id: "com.jiaan.works",
  theme: "ios",
  // iosTranslucentBars: false,
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  // ... other parameters
});

var mainView = app.views.create(".view-main");

const $$ = Dom7;
// Init Messagebar
const messagebar = app.messagebar.create({
  el: ".messagebar",
});
// Init Messages
const messages = app.messages.create({
  el: ".messages",

  // First message rule
  firstMessageRule: function (message, previousMessage, nextMessage) {
    // Skip if title
    if (message.isTitle) return false;
    /* if:
          - there is no previous message
          - or previous message type (send/received) is different
          - or previous message sender name is different
        */
    if (
      !previousMessage ||
      previousMessage.type !== message.type ||
      previousMessage.name !== message.name
    )
      return true;
    return false;
  },
  // Last message rule
  lastMessageRule: function (message, previousMessage, nextMessage) {
    // Skip if title
    if (message.isTitle) return false;
    /* if:
          - there is no next message
          - or next message type (send/received) is different
          - or next message sender name is different
        */
    if (
      !nextMessage ||
      nextMessage.type !== message.type ||
      nextMessage.name !== message.name
    )
      return true;
    return false;
  },
  // Last message rule
  tailMessageRule: function (message, previousMessage, nextMessage) {
    // Skip if title
    if (message.isTitle) return false;
    /* if (basically same as lastMessageRule):
        - there is no next message
        - or next message type (send/received) is different
        - or next message sender name is different
      */
    if (
      !nextMessage ||
      nextMessage.type !== message.type ||
      nextMessage.name !== message.name
    )
      return true;
    return false;
  },
});
