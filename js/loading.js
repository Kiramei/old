// JavaScript Document

$('head').append(
	'<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>'
);

jQuery.event.add(window,"load",function() {
	var pageH = $("#container").height();

	$("#fade").css("height", pageH).delay(900).fadeOut(800);
	$("#loader").delay(900).fadeOut(400);
	$("#container").css("display", "block");
});
