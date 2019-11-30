$(function() {

           $("body").mousemove(function(event){

               var rate=event.pageX/1920;
               var rete=rate.toFixed(2)*10+100;
               $(".top_bg").css("background-size",parseInt(rete)+"%");

});

});
