$(document).ready(function(){

    $(".wc-chatview-panel").hide();
    $(".minimized").on("click", function() {
        $(".minimized").css("background", "white");
        $('.minimized').hide();
        $('.messages').hide();
        $('.minimizedClose').show();
        $('.closeChat').show();
        $(".minimized").css("display", "block");
        $(".closeChat").css("display", "inline-block");
        $(".wc-chatview-panel").show();
    });
    $(".minimizedClose").click(function() {
        $(".minimized").css("background", "#972a8f");
        $('.wc-chatview-panel').hide();
        $('.minimized').show();
        $('.messages').show();
        $('.minimizedClose').hide();
        $('.closeChat').hide();
    });
   
//draggable function for chat window
var div = $('.wc-chatview-panel');
div.draggable(
{
    stop: function(event, ui)
    {
        var top = getTop(ui.helper);
        ui.helper.css('position', 'fixed');
        ui.helper.css('top', top+"px");
    }
});

function getTop(ele)
{
    var eTop = ele.offset().top;
    var wTop = $(window).scrollTop();
    var top = eTop - wTop;

    return top;
}

$(".wc-chatview-panel").draggable({
    containment: "window",
    handle:".wc-header",
    scroll:false
})

//resizable chat window
$(function() {
    $( ".wc-chatview-panel" ).resizable({
      handles: "n, e, w, s, sw, se, nw, ne",
      containment: "html",
      scroll:false,
      minWidth: 350
    });
    });
});