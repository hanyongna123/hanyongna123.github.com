window.onload=function(){
//导航展示效果
    ;(function(){
        var oNav=document.getElementById('nav');   
        var oUl=oNav.getElementsByTagName('ul')[0]
        var aLi=oUl.children;
       
        for(var i=0;i<aLi.length-1;i++){
            aLi[i].index=i;
            aLi[i].onmouseover=function(){
                elastic(aLi[aLi.length-1],this.index*80)
            }
        }
//滚动效果
        var n=0;
        var timer=null;
        function setTop(n){
            document.body.scrollTop=document.documentElement.scrollTop=n;
        }
        aLi[0].onclick=function(){
            clearInterval(timer);
            timer=setInterval(function(){
                n+=20;
                 setTop(n);

                if (n>=20) {
                    n=20;
                    clearInterval(timer);
                   n=0 
                }
                
            },30)
        };
         aLi[1].onclick=function(){
            clearInterval(timer);
            timer=setInterval(function(){
                n+=20;
                  setTop(n);

                if (n>=870) {
                    n=870;
                    clearInterval(timer);
                    n=0
                }
               
            },30)
        }
         aLi[2].onclick=function(){
            clearInterval(timer);
            timer=setInterval(function(){
                n+=20;
                setTop(n); 

                if (n>=1400) {
                    n=1400;
                    clearInterval(timer);
                    n=0
                }
                
            },30)

        };
        aLi[3].onclick=function(){
            clearInterval(timer);
            timer=setInterval(function(){
                n+=20;
                 
                setTop(n); 
                if (n>=2200) {
                    n=2200;
                    clearInterval(timer);
                    n=0
                }
               
            },30)

        }
       
    })();

//弹性效果
    
    function ela(id){
        var oElas=document.getElementById(id);

        var speedX=3;
        setInterval(function(){
            var l=oElas.offsetLeft+speedX;
            var clientW=document.documentElement.clientWidth-oElas.offsetWidth;

            if(l>=clientW){
                l=clientW;
                speedX*=-1;
            }
            if(l<=0){
                l=0;
                speedX*=-1;
            }
            oElas.style.left=l+'px';
            
        },30);
    }

    ela('elastic1')
    ela('elastic2')
    ela('elastic3')
    ela('elastic4')

   
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