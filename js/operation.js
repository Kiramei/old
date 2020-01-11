function closed(){
  //Quit
  $(".top_bg").fadeOut(1000);
  $('body').append(
  	'<div class="closer"><img src="img/quit.png"></div>'
  );
  anime({
    targets:'.closer',
    opacity:1,
    delay:900,
    duration:1500,
    easing:'easeInOutQuad',
  })
  setTimeout("fad()",2000);
  setTimeout('closep()',5000);
}

function closep(){
  window.location.href="about:blank";
  window.close();
}
function fad(){
  anime({
    targets:'.closer',
    opacity:0,
    delay:900,
    duration:1700,
    easing:'easeInOutQuad',
  })
}
var p=0;
function showMusicPanel() {
if (p==0) {
    anime({
      targets:'.musicPanel',
      opacity:0.6,
      duration:800,
      easing:'easeInOutQuad',
    });
    p=1;
}else {
  anime({
    targets:'.musicPanel',
    opacity:0,
    duration:800,
    easing:'easeInOutQuad',
  });
  p=0;
}
}
var audio;
var s=0;
function voicePlay1 () {
    audio = "http://kirameki.tx115.5644.pw/source/yami.wav";
    audio = new Audio(audio);
    $(audio).unbind("ended").bind("ended", function(){
          audio.play();
    })
    audio.play();
}
function voiceClose () {
    audio.pause();
}
function listen1() {
  if (s==0) {
    $('#yami').text("| 闇の世界で光を探す |");
    voicePlay1();
    s=1;
  }else {
    $('#yami').text("闇の世界で光を探す");
    voiceClose();
    s=0;
  }
}
