$(document).ready(function () {
  let bgActive = 1;

  $(".bg-default").addClass("changeBg-border");

  $(".changeBg").on("click", function () {
    let bgName = $(this).attr("id");
    bgActive = bgName;

    if ($(".changeBg").hasClass("changeBg-border")) {
      $(".changeBg").removeClass("changeBg-border");
      $(this).addClass("changeBg-border");
    } else {
      $(this).addClass("changeBg-border");
    }

    $(".avame").addClass("fadeInLeft");
    $(".avame").attr("src", `../assets/image/avatar/${bgName}.svg`);

    $(".lockscreen-bg").css(
      "background-image",
      `url('../assets/image/background/${bgName}.svg`
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
          }, 1400);
        } else {
          $(".lock-form").addClass("shakes");
          setTimeout(() => {
            $(".lock-form").removeClass("shakes");
          }, 500);
          // app.dialog.alert("wrong password, please check again", "Oops!");
        }
      }
    }
  });

  $(".tab-link").on("click", function () {
    let target = $(this).attr("href");
    if (target == "#tab-2") {
      $(".glider").css("transform", "translate3d(100%, 0px, 0px)");
    } else if (target == "#tab-3") {
      $(".glider").css("transform", "translate3d(203%, 0px, 0px)");
    } else if (target == "#tab-4") {
      $(".glider").css("transform", "translate3d(305%, 0px, 0px)");
    } else if (target == "#tab-5") {
      $(".glider").css("transform", "translate3d(407%, 0px, 0px)");
    } else if (target == "#tab-1") {
      $(".glider").css("transform", "translate3d(0%, 0px, 0px)");
    }
  });
});
