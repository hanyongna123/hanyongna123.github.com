function findDir(oDiv,ev){
            var oEvent=ev||event;
            var scrollT=document.body.scrollTop || document.documentElement.scrollTop;
            var scrollL=document.body.scrollLeft || document.documentElement.scrollLeft

            var y=oDiv.offsetHeight/2+getPos(oDiv).top-(oEvent.clientY+scrollT);
            var x=oDiv.offsetWidth/2+getPos(oDiv).left-(oEvent.clientX+scrollL);

            return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
        }
        function getPos(obj){
            var l=0;
            var t=0;
            while(obj){
                l+=obj.offsetLeft;
                t+=obj.offsetTop;
                obj=obj.offsetParent;
            }
            return {left:l,top:t};
        }

        window.onscroll=window.onload=function(){

        	function container(id){
    			var oUl=document.getElementById(id)
	            var aDiv=oUl.children
	            for(var i=0;i<aDiv.length;i++){
	                aDiv[i].onmouseover=function(ev){
	                    var oEvent=ev||event;
	                    var oSon=this.children[0].children[0];
	                    var oFrom=oEvent.fromElement || oEvent.relatedTarget;
	                    if(this.contains(oFrom))return false;

	                    switch(findDir(this,ev)){
	                        case 0:
	//                        oDiv.innerHTML='右';
	                            oSon.style.left=200+'px';
	                            oSon.style.top=0;
	                            break;
	                        case 1:
	//                        oDiv.innerHTML='下';
	                            oSon.style.left=0;
	                            oSon.style.top=200+'px';
	                            break;
	                        case 2:
	//                        oDiv.innerHTML='左';
	                            oSon.style.left=-200+'px';
	                            oSon.style.top=0;
	                            break;
	                        case 3:
	//                        oDiv.innerHTML='上';
	                            oSon.style.top=-200+'px';
	                            oSon.style.left=0;
	                            break;
	                    }
	                    move(oSon,{left:0,top:0});

	                };
	                aDiv[i].onmouseout=function(ev){
	                    var oEvent=ev||event;
	                    var oSon=this.children[0].children[0];
	                    var to=oEvent.toElement || oEvent.relatedTarget;
	                    if(this.contains(to))return false;

	                    switch(findDir(this,ev)){
	                        case 0:
	                            move(oSon,{left:200,top:0});
	//                        oDiv.innerHTML='右';
	                            break;
	                        case 1:
	//                        oDiv.innerHTML='下';
	                            move(oSon,{left:0,top:200});
	                            break;
	                        case 2:
	//                        oDiv.innerHTML='左';
	                            move(oSon,{left:-200,top:0});
	                            break;
	                        case 3:
	//                        oDiv.innerHTML='上';
	                            move(oSon,{top:-200,left:0});
	                            break;
	                    }


	                };
	            };
        	}

        	container('oUl');
        	container('oUl2');
        	container('oUl3');

        	var oBtn=document.getElementById('btn');
            var timer=null;
            var bSys=false;

        	var scrollT=document.body.scrollTop || document.documentElement.scrollTop;

                if(bSys){
                    clearInterval(timer);
                }
                bSys=true;

                if(scrollT>0){
                    oBtn.style.display='block';
                }else{
                    oBtn.style.display='none';
                }

           

            oBtn.onclick=function(){
                clearInterval(timer);

                var start=document.body.scrollTop || document.documentElement.scrollTop;
                var dis=0-start;
                var iCount=parseInt(700/30);
                var n=0;
                //初始值  距离   时间   总次数

                timer=setInterval(function(){
                    bSys=false;
                    n++;
                    var a=1-n/iCount;
                    var cur=start+dis*(1-a*a*a);
                    document.body.scrollTop=document.documentElement.scrollTop=cur;

                    if(n==iCount){
                        clearInterval(timer);
                    }
                },30);

            }


        };