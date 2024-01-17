$(document).ready(function () {
  let bgActive = 1;

  $(".bg-default").addClass("changeBg-border");

  $(".changeBg").on("click", function () {
    // Create an audio element dynamically
    var audioBg = new Audio("../assets/audio/bg.mp3");

    // Play the audio
    audioBg.play();
    let bgName = $(this).attr("id");
    bgActive = bgName;

    if ($(".changeBg").hasClass("changeBg-border")) {
      $(".changeBg").removeClass("changeBg-border");
      $(this).addClass("changeBg-border");
    } else {
      $(this).addClass("changeBg-border");
    }

    $(".avame").addClass("fadeInLeft");
    $(".avame").attr("src", `../assets/image/avatar/${bgName}.webp`);

    $(".lockscreen-bg").css(
      "background-image",
      `url('../assets/image/background/${bgName}.webp`
    );

    setTimeout(() => {
      $(".avame").removeClass("fadeInLeft");
    }, 500);
  });

  $("#lockInput").on("keyup", function (e) {
    if ($(this).val() != "") {
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();

        if ($(this).val() == 10) {
          $(".lock-form").hide();
          $(".lock-loader").show();

          setTimeout(() => {
            $(".content").addClass("fadeout");
            $(".chooseBg").addClass("fadeout");
            console.log(bgActive, " -- active");

            if (bgActive == "1") {
              $(".bg-1").addClass("changeBg-border");
            } else if (bgActive == "2") {
              $(".bg-2").addClass("changeBg-border");
            } else if (bgActive == "3") {
              $(".bg-3").addClass("changeBg-border");
            } else if (bgActive == "4") {
              $(".bg-4").addClass("changeBg-border");
            } else if (bgActive == "5") {
              $(".bg-5").addClass("changeBg-border");
            } else if (bgActive == "6") {
              $(".bg-6").addClass("changeBg-border");
            }
          }, 1000);

          setTimeout(() => {
            $(".content").hide();
            $(".chooseBg").hide();
            $(".inside").fadeIn();
            $(this).val("");
            // Create an audio element dynamically
            var audioOpen = new Audio("../assets/audio/opened.mp3");

            // Play the audio
            audioOpen.play();
          }, 1400);
        } else {
          $(".lock-form").addClass("shakes");
          // Create an audio element dynamically
          var audioError = new Audio("../assets/audio/error.mp3");

          // Play the audio
          audioError.play();
          setTimeout(() => {
            $(".lock-form").removeClass("shakes");
          }, 500);
          // app.dialog.alert("wrong password, please check again", "Oops!");
        }
      }
    }
  });

  // Store the original styles in a variable
  let bgVision = {
    background: "rgba(30, 30, 30, 0.6)",
    "box-shadow":
      "0px 1px 1px 0px rgba(255, 255, 255, 0.15) inset, 0px -1px 1px 0px rgba(70, 68, 68, 0.15) inset",
    "backdrop-filter": "blur(15px)",
  };

  $(".tab-link").on("click", function () {
    // Create an audio element dynamically
    var audioNav = new Audio("../assets/audio/nav.mp3");

    // Play the audio
    audioNav.play();
    let target = $(this).attr("href");
    if (target == "#tab-1") {
      $(".glider").css("transform", "translate3d(0%, 0px, 0px)");
      setTimeout(() => {
        $(".vision-content").css(bgVision);
      }, 50);
    } else if (target == "#tab-2") {
      $(".glider").css("transform", "translate3d(100%, 0px, 0px)");
      setTimeout(() => {
        $(".vision-content").css(bgVision);
      }, 50);
    } else if (target == "#tab-3") {
      $(".glider").css("transform", "translate3d(203%, 0px, 0px)");
      setTimeout(() => {
        $(".vision-content").css({
          background: "none",
          "box-shadow": "none",
          "backdrop-filter": "none",
        });
      }, 200);
    } else if (target == "#tab-4") {
      $(".glider").css("transform", "translate3d(305%, 0px, 0px)");
      setTimeout(() => {
        $(".vision-content").css(bgVision);
      }, 50);
    } else if (target == "#tab-5") {
      $(".glider").css("transform", "translate3d(407%, 0px, 0px)");
      setTimeout(() => {
        $(".vision-content").css({
          background: "none",
          "box-shadow": "none",
          "backdrop-filter": "none",
        });
      }, 200);
    } else if (target == "#tab-1") {
      $(".glider").css("transform", "translate3d(0%, 0px, 0px)");
      setTimeout(() => {
        $(".vision-content").css(bgVision);
      }, 50);
    }
  });

  function myProject() {
    let projects = [
      {
        title: "BRITECH WEBSITE",
        role: "Frontend Developer",
        cover: "bri.svg",
        tech: "bri.svg",
        link: "https://digital.bri.co.id/",
      },
      {
        title: "OMG LANDING PAGE",
        role: "Developer & UI/UX",
        cover: "omg.svg",
        tech: "omg.svg",
        link: "https://oemge.app/",
      },
      {
        title: "AKP30 DISHUB",
        role: "Fullstack Developer",
        cover: "dishub.svg",
        tech: "dishub.svg",
        link: "#",
      },
      {
        title: "fLAND",
        role: "Founder & Developer",
        cover: "fland.svg",
        tech: "fland.svg",
        link: "https://twitter.com/jiaaaan_/status/1363232280550932480",
      },
      {
        title: "Daytrans CMS",
        role: "React JS Developer",
        cover: "daytrans.svg",
        tech: "daytrans.svg",
        link: "#",
      },
      {
        title: "Coca Cola Campaign",
        role: "Frontend Developer",
        cover: "coca.svg",
        tech: "coca.svg",
        link: "#",
      },
      {
        title: "Established Jakarta",
        role: "Wordpress Developer",
        cover: "estb.svg",
        tech: "estb.svg",
        link: "https://establishedjakarta.com/",
      },
      {
        title: "Kaffeinate POS",
        role: "Fullstack Developer",
        cover: "kaf.svg",
        tech: "kaf.svg",
        link: "https://www.instagram.com/kaffeinate_coffee/",
      },
      {
        title: "DAPURE",
        role: "Developer & UI/UX",
        cover: "dapure.svg",
        tech: "dapure.svg",
        link: "#",
      },
      {
        title: "Cinemate",
        role: "Frontend Developer",
        cover: "cinema.svg",
        tech: "cinema.svg",
        link: "https://cinemate-beta.vercel.app/",
      },
    ];

    for (let i = 0; i < projects.length; i++) {
      let linkText;
      if (
        projects[i].link ===
        "https://twitter.com/jiaaaan_/status/1363232280550932480"
      ) {
        linkText = `View the Stories <img
                              style="vertical-align: middle; margin-left: 5px;"
                              src="assets/image/icons/home/arrow-btn.svg"
                              alt=""
                            />`;
      } else if (
        projects[i].link === "https://www.instagram.com/kaffeinate_coffee/"
      ) {
        linkText = `Follow their Instagram <img
                              style="vertical-align: middle; margin-left: 5px;"
                              src="assets/image/icons/home/arrow-btn.svg"
                              alt=""
                            />`;
      } else {
        linkText = `View the Demo <img
                              style="vertical-align: middle; margin-left: 5px;"
                              src="assets/image/icons/home/arrow-btn.svg"
                              alt=""
                            />`;
      }

      let cards = `<div class="card-project">
                        <center>
                          <img
                            style="margin-top: 20px"
                            src="../assets/image/project/cover-${projects[i].cover}"
                          />
                        </center>
                        <div style="padding: 10px 23px">
                          <img src="../assets/image/project/tech-${projects[i].tech}" />
                          <h2 class="font-inter-bold text-color-white">${projects[i].title}</h2>
                          <p class="font-inter-semi">as ${projects[i].role}</p>
                          <a
                            href="${projects[i].link}"
                            target="_blank"
                            class="font-inter-semi text-color-white external"
                            style="display: block; font-size: 16px; margin-top: 30px;"
                          >
                            ${linkText}
                          </a>
                        </div>
                      </div>`;
      $(cards).appendTo("#listProject");
    }
  }

  myProject();
  // Get the current year
  var currentYear = new Date().getFullYear();

  // Extract the last two digits of the year
  var lastTwoDigits = currentYear % 100;
  $("#old").text(lastTwoDigits);

  $(".to-overview").on("click", function () {
    $(".tab-overview").click();
    app.tab.show("#tab-2");
  });

  // Response flag for receiveMessage
  let responseInProgress = false;

  // Dummy response
  let answers = [
    "Yes!",
    "No",
    "Hm...",
    "I am not sure",
    "And what about you?",
    "May be ;)",
    "Lorem ipsum dolor sit amet, consectetur",
    "What?",
    "Are you sure?",
    "Of course",
    "Need to think about it",
    "Amazing!!!",
  ];

  let contact = [
    {
      name: "github",
      link: "https://www.github.com/tearsbear/",
    },
    {
      name: "linked",
      link: "https://www.linkedin.com/in/alifyajiehan/",
    },
    {
      name: "wa",
      link: "https://api.whatsapp.com/send?phone=628976203842",
    },
  ];

  for (let il = 0; il < contact.length; il++) {
    let item = `<div class="row" style="${
      il === 1 || il === 2 ? "margin-top: -10px" : "margin-top: -9px"
    }">
                  <div class="col">
                    <img
                      style="margin: 16px 25px;"
                      src="assets/image/vector/btn-${contact[il].name}.svg"
                      alt=""
                    />
                  </div>
                  <div class="col">
                    <a
                      href="${contact[il].link}"
                      target="_blank"
                      class="button external"
                      style="margin: 10px 15px;"
                    >
                      <div class="button-box">
                        <span class="button-elem">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-arrow-down-left"
                            viewBox="0 0 16 16"
                            style="color: #696969"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0z"
                            ></path>
                          </svg>
                        </span>
                        <span class="button-elem">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-arrow-down-left"
                            viewBox="0 0 16 16"
                            style="color: #696969"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>`;

    $(item).appendTo(".bg-contact");
  }

  let shortQuest = [
    {
      question: "how old are you?",
    },
    {
      question: "what motivates you to be programmer?",
    },
    {
      question: "what do you like the most?",
    },
  ];

  for (let iq = 0; iq < shortQuest.length; iq++) {
    let itm = ` <a href="#" quest-id="${iq}" class="font-inter-bold quest-link" style="color: #007AFF; display: block; margin-bottom: 10px"
                  >${shortQuest[iq].question}</a
                >`;
    $(itm).appendTo(".listQuest");
  }

  $(".quest-link").on("click", function () {
    let idq = $(this).attr("quest-id");
    let message = $(this).text();

    addMessage(message, idq);
  });

  // Send Message With Enter
  $$(".text-input").on("keyup", function (e) {
    if ($(this).val() != "") {
      $$(".send-link").show();
      if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        $$(".send-link").click();
        $$(".send-link").hide();
      }
    } else {
      $$(".send-link").hide();
    }
  });

  // Send Message With Button
  $$(".send-link").on("click", function () {
    addMessage($(".text-input").val(), null);
  });

  function addMessage(msg, quest) {
    let text = msg.replace(/\n/g, "<br>").trim();
    // return if empty message
    if (!text.length) return;

    // Clear area
    $(".text-input").val("");

    // Disable input until the receive messages
    $(".text-input").prop("disabled", true);

    // Add message to messages
    messages.addMessage({
      text: text,
    });

    //scroll page
    $$(".page-content").scrollTop($(".page-content").get(0).scrollHeight, 400);

    //hide button send
    $(this).hide();

    if (responseInProgress) return;

    // Create an audio element dynamically
    var audioMsg = new Audio("../assets/audio/message.mp3");

    // Play the audio
    audioMsg.play();

    // Stop the audio after a certain time (e.g., 3000 milliseconds or 3 seconds)
    setTimeout(function () {
      audioMsg.pause();
      audioMsg.currentTime = 0; // Reset the audio to the beginning
    }, 5000); // Adjust the time as needed

    // Receive dummy message
    if (quest !== null) {
      receiveMessage(quest);
    } else {
      receiveMessage(null);
    }
  }

  //Get random message
  function receiveMessage(idq) {
    responseInProgress = true;
    console.log(idq);
    setTimeout(function () {
      let answer;

      if (idq == 0) {
        answer = `I'm ${lastTwoDigits} years old 😀`;
      } else if (idq == 1) {
        answer = `I always want to be a part/change of something big... \n this means I don't just want to use a technology, but I want to create my own.. and make a meaningful impact to people and company that I work`;
      } else if (idq == 2) {
        answer = `Eat, Sleep, Code 😮‍💨`;
      } else {
        // Get random answer
        answer = `Sorry, you ask something I didn't know (this is not chatgpt bro) \n please use the shortcut on the top.. scroll it!!! I'm too lazy to create the CTA Button just to help you scroll up this page??? fr.. who are you`;
      }

      // Show typing indicator
      messages.showTyping({
        header: "Jiehan is typing",
      });

      setTimeout(function () {
        // Add received dummy message
        messages.addMessage({
          text: answer,
          type: "received",
          name: "Jiehan Anandika",
        });
        // Hide typing indicator
        messages.hideTyping();
        responseInProgress = false;
        $(".text-input").prop("disabled", false);
      }, 2500);
    }, 1000);
  }

  // Confirm

  $(".btn-lock").on("click", function () {
    // Create an audio element dynamically
    var audioHint = new Audio("../assets/audio/hint.mp3");

    // Play the audio
    audioHint.play();
    app.dialog.confirm("Lock the screen?", "Confirm", function () {
      $(".content").removeClass("fadeout");
      $(".chooseBg").removeClass("fadeout");
      $(".lock-loader").hide();
      $(".inside").hide();
      $(".content").fadeIn();
      $(".chooseBg").fadeIn();
      $(".lock-form").show();
    });
  });

  $(".open-music").on("click", function () {
    app.popup
      .create({
        closeByBackdropClick: false,
        content: `<div class="popup" style="background-color: transparent">
                  <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameborder="0"
              height="450"
              style="margin-top: 10px; width:100%;max-width:660px;overflow:hidden;border-radius:24px;"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/id/playlist/recently/pl.u-ZmblVPpi0e8xrGD"
            ></iframe>
            <center>
            <a href="#" class="popup-close" style="display:block; margin-top: 10px; color: #f1f1f1">click here to dismiss</a>
            </center>
      </div>`,
      })
      .open();
  });

  $(".open-gallery").on("click", function () {
    app.popup
      .create({
        closeByBackdropClick: false,
        content: `<div class="popup" style="background-color: transparent; overflow-y: scroll">
                  <h2 class="font-inter-medium text-color-white">Photography & Design</h2>
                  <div class="row">
                  <div class="col-50">
                    <img style="width: 100%; border-radius: 15px" src="../assets/image/gallery/1pt.webp" alt="" />
                  </div>
                  <div class="col-50">
                    <img style="width: 100%; border-radius: 15px" src="../assets/image/gallery/2pt.webp" alt="" />
                  </div>
                  <div class="col-50">
                    <img style="margin-top: 20px; width: 100%; border-radius: 15px" src="../assets/image/gallery/3pt.webp" alt="" />
                  </div>
                  <div class="col-50">
                    <img style="margin-top: 20px; width: 100%; border-radius: 15px" src="../assets/image/gallery/1d.webp" alt="" />
                  </div>
                  <div class="col-50">
                    <img style="margin-top: 20px; width: 100%; border-radius: 15px" src="../assets/image/gallery/2d.webp" alt="" />
                  </div>
                  <div class="col-50">
                    <img style="margin-top: -215px; width: 100%; border-radius: 15px" src="../assets/image/gallery/3d.webp" alt="" />
                  </div>
                  <div class="col-50">
                    <img style="margin-top: 20px; width: 100%; border-radius: 15px" src="../assets/image/gallery/4d.webp" alt="" />
                  </div>
                  <div class="col-50">
                    <img style="margin-top: -189px; width: 100%; border-radius: 15px" src="../assets/image/gallery/5d.webp" alt="" />
                  </div>
                  <div class="col-50">
                    <img style="margin-top: 20px; width: 100%; border-radius: 15px" src="../assets/image/gallery/6d.webp" alt="" />
                  </div>
                  <div class="col-50">
                    <img style="margin-top: -110px; width: 100%; border-radius: 15px" src="../assets/image/gallery/7d.png" alt="" />
                  </div>
                  </div>
                  <center>
            <a href="#" class="popup-close" style="display:block; margin-top: 10px; color: #f1f1f1">click here to dismiss</a>
            </center>
      </div>`,
      })
      .open();
  });
});
