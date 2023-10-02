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
