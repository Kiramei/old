function closed() {
    $(".main").fadeOut(1000);
    $("body").append('<div class="closer"><img src="img/quit.png"></div>');
    anime({
        targets: ".closer",
        opacity: 1,
        delay: 900,
        duration: 1500,
        easing: "easeInOutQuad",
    });
    setTimeout("fad()", 2000);
    setTimeout("closep()", 5000)
}
function closep() {
    window.location.href = "about:blank";
    window.close()
}
function fad() {
    anime({
        targets: ".closer",
        opacity: 0,
        delay: 900,
        duration: 1700,
        easing: "easeInOutQuad",
    })
}
var p = 0;
function showMusicPanel() {
    if (p == 0) {
      $(".music").css("pointer-events", "auto");
      $(".mae").css("pointer-events", "auto");
      $(".ado").css("pointer-events", "auto");
        anime({
            targets: [".musicPanel", ".mae", ".ado"],
            opacity: 0.6,
            duration: 800,
            easing: "easeInOutQuad",
        });
        p = 1;
    } else {
      $(".music").css("pointer-events", "none");
      $(".mae").css("pointer-events", "none");
      $(".ado").css("pointer-events", "none");
        anime({
            targets: [".musicPanel", ".mae", ".ado"],
            opacity: 0,
            duration: 800,
            easing: "easeInOutQuad",
        });
        p = 0;
    }
}
function showAlbum() {
  $(".albumPanel").css("pointer-events", "auto");
  $(".albumPanel_nav").css("pointer-events", "auto");
  $(".button").css("pointer-events", "auto");
    anime({
        targets: [".musicPanel", ".mae", ".ado"],
        opacity: 0,
        duration: 800,
        easing: "easeInOutQuad",
    });
    $(".menu").css("pointer-events", "none");
    $(".music").css("pointer-events", "none");
    $(".mae").css("pointer-events", "none");
    $(".ado").css("pointer-events", "none");
    anime({
        targets: ".albox",
        opacity: 0.8,
        duration: 800,
        delay: 800,
        easing: "easeInOutQuad",
    });
    anime({
        targets: ".background_b",
        opacity: 1,
        duration: 400,
        easing: "easeInOutQuad",
    });
    go3();
    p = 2;
}
function showEvent() {
    $(".event_shita").css("pointer-events", "auto");
    $(".event_box").css("pointer-events", "auto");
    anime({
        targets: [".musicPanel", ".mae", ".ado"],
        opacity: 0,
        duration: 800,
        easing: "easeInOutQuad",
    });
    $(".menu").css("pointer-events", "none");
    $(".music").css("pointer-events", "none");
    $(".mae").css("pointer-events", "none");
    $(".ado").css("pointer-events", "none");
    anime({
        targets: [".event_box", ".event_ue", ".event_shita"],
        opacity: 0.8,
        duration: 800,
        delay: 800,
        easing: "easeInOutQuad",
    });
    anime({
        targets: [".background_b"],
        opacity: 1,
        duration: 400,
        easing: "easeInOutQuad",
    });
    setTimeout((function(){
      $('.event_shita').css("transition","0.3s ease");
    }),1600);
    go3();
    p = 3;
}
function back() {
    $(".button").css("pointer-events", "none");
    anime({
        targets: [".albox",".background_b"],
        opacity: 0,
        duration: 800,
        easing: "easeInOutQuad",
    });
    $(".menu").css("pointer-events", "auto");
    anime({
        targets: ".menu",
        opacity: 0.68,
        duration: 800,
        delay: 800,
        easing: "easeInOutQuad",
    });
    p = 0
}
function eback() {
        $('.event_shita').css("transition","0s");
    anime({
        targets: [".event_box", ".event_ue", ".event_shita",".background_b"],
        opacity: 0,
        duration: 800,
        easing: "easeInOutQuad",
    });
    $(".menu").css("pointer-events", "auto");
        anime({
        targets: ".menu",
        opacity: 0.68,
        duration: 800,
        delay: 800,
        easing: "easeInOutQuad",
    });
    $(".event_shita").css("pointer-events", "none");
    $(".event_box").css("pointer-events", "none");
    p = 0
}
function go3() {
    anime({
        targets: ".menu",
        opacity: 0,
        duration: 800,
        easing: "easeInOutQuad",
    });
}
function closeit() {
    $(".musicPanel").css("display", "none")
}
function closeit3() {
    $(".menu").css("display", "none")
}
var audio;
var s = 0;
function voicePlay1() {
    audio = "https://kiramei.github.io/pages/source/yami.wav";
    audio = new Audio(audio);
    $(audio).unbind("ended").bind("ended",
    function() {
        audio.play()
    });
    audio.play()
}
function voicePlay2() {
    audio = "https://kiramei.github.io/pages/source/atsui.wav";
    audio = new Audio(audio);
    $(audio).unbind("ended").bind("ended",
    function() {
        audio.play()
    });
    audio.play()
}
function voicePlay3() {
    audio = "https://kiramei.github.io/pages/source/hoshi.wav";
    audio = new Audio(audio);
    $(audio).unbind("ended").bind("ended",
    function() {
        audio.play()
    });
    audio.play()
}
function voiceClose() {
    audio.pause()
}
function listen1() {
    if (s == 0) {
        $("#yami").text("| 闇の世界で光を探す |");
        voicePlay1();
        s = 1
    } else {
        if (s == 2||s == 3) {
            $("#atsui").text("暑い日々");
            $("#hoshi").text("星空を見上げ");
            $("#yami").text("| 闇の世界で光を探す |");
            voiceClose();
            voicePlay1();
            s = 1
        } else {
            $("#yami").text("闇の世界で光を探す");
            voiceClose();
            s = 0
        }
    }
}
function listen2() {
    if (s == 0) {
        $("#atsui").text("| 暑い日々 |");
        voicePlay2();
        s = 2
    } else {
        if (s == 1||s == 3) {
            $("#yami").text("闇の世界で光を探す");
            $("#hoshi").text("星空を見上げ");
            $("#atsui").text("| 暑い日々 |");
            voiceClose();
            voicePlay2();
            s = 2
        } else {
            $("#atsui").text("暑い日々");
            voiceClose();
            s = 0
        }
    }
};
function listen3() {
    if (s == 0) {
        $("#hoshi").text("| 星空を見上げ |");
        voicePlay3();
        s = 3
    } else {
        if (s == 1||s == 2) {
            $("#yami").text("闇の世界で光を探す");
            $("#atsui").text("暑い日々");
            $("#hoshi").text("| 星空を見上げ |");
            voiceClose();
            voicePlay3();
            s = 3
        } else {
            $("#hoshi").text("星空を見上げ");
            voiceClose();
            s = 0
        }
    }
};
