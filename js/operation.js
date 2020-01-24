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
    anime({
        targets: [".musicPanel", ".mae", ".ado"],
        opacity: 0,
        duration: 800,
        easing: "easeInOutQuad",
    });
    setTimeout("closeit()", 800);
    anime({
        targets: ".albox",
        opacity: 0.8,
        duration: 800,
        delay: 800,
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
    setTimeout("closeit()", 800);
    anime({
        targets: [".event_box", ".event_ue", ".event_shita"],
        opacity: 0.8,
        duration: 800,
        delay: 800,
        easing: "easeInOutQuad",
    });
    go3();
    p = 3;
}
function back() {
    anime({
        targets: ".albox",
        opacity: 0,
        duration: 800,
        easing: "easeInOutQuad",
    });
    $(".menu").css("display", "block");
    anime({
        targets: ".menu",
        opacity: 1,
        duration: 800,
        delay: 800,
        easing: "easeInOutQuad",
    });
    p = 0
}
function eback() {
    anime({
        targets: [".event_box", ".event_ue", ".event_shita"],
        opacity: 0,
        duration: 800,
        easing: "easeInOutQuad",
    });
    $(".menu").css("display", "block");
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
    setTimeout("closeit3()", 800)
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
function voiceClose() {
    audio.pause()
}
function listen1() {
    if (s == 0) {
        $("#yami").text("| 闇の世界で光を探す |");
        voicePlay1();
        s = 1
    } else {
        if (s == 2) {
            $("#atsui").text("暑い日々");
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
        if (s == 1) {
            $("#yami").text("闇の世界で光を探す");
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
