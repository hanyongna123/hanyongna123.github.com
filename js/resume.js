window.onload=function(){
	//个人简历效果
    ;(function(){
        var oResume=document.getElementById('resume');
        var aP=oResume.getElementsByTagName('p');
        // alert(aP.length)
        var timer=null;
        var i=0;

        timer=setInterval(function(){
            move(aP[i],{opacity:1},{time:300,type:'ease-out'});
            i++;
            if(i==aP.length)clearInterval(timer);
        },100);

    })();
}