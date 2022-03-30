
/* nav */
$('.pc-wrap li').each(function(){
    $(this).hover(function(){
        $(this).find('>a').css({backgroundPositionY: '-61px'});
    },function(){
        $(this).find('>a').css({backgroundPositionY: 0});
    });
});