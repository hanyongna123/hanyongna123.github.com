var minSize=5;
var maxSize=30;
var newOn=200;
var flakeColor='#fff';
var flake=$('<div></div>').css({'position':'absolute','top':'-50px'}).html('❉');
$(function(){
    var documentHeight=$(document).height()-50;
    var documentWidth=$(document).width()-50;

    setInterval(function(){
        var startPositionLeft=Math.random()*documentWidth;
        var startOpacity=0.7+Math.random()*0.3;
        var endPositionTop=documentHeight;
        var endPositionLeft=Math.random()*documentWidth;
        var durationFall=4000+Math.random()*3000;
        var sizeFlake=minSize+Math.random()*maxSize;

        flake.clone().appendTo('body').css({
            'left':startPositionLeft,
            'opacity':startOpacity,
            'font-size':sizeFlake,
            'color':flakeColor
        }).animate({
            'top':endPositionTop,
            'left':endPositionLeft,
            'opacity':0.5
        },durationFall,function(){
            $(this).remove();
        })
    },newOn)
});
