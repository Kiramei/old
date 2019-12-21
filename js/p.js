window.setTimeout(function() {
          $("body").mousemove(function(event){
            var rate=event.pageX/1920;
             var rete=rate*10/2+100;
                  $(".top_logo img").css("width",69+rate*5+'%');
                   $(".top_logo").css("top",(8-rate*2.5)+"%");
                   $(".top_logo img").css("margin-left",-rate*2.5+'%');
                $(".top_logo").css("opacity",1-rate*0.2);
});
},3000);
$(function() {
          $("body").mousemove(function(event){
             var rate=event.pageX/1920;
             var rete=rate*10/2+100;
              $(".background").css("top",'100px');
               $(".background img").css("width",rete+"%");
               $(".background img").css("margin",(-rete)+"px");
});
});
