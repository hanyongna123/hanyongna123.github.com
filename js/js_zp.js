window.onload=function(){

            var oBtn=document.getElementById('btn');
            var oUl=document.getElementById('js_zp');
            var aLi=oUl.children;
            var arr=[];
            var zIndex=20;
            // 布局转化
            for(var i=0;i<aLi.length;i++){
                arr.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop});
            };
            //随机换位置
            oBtn.onclick=function(){
                arr.sort(function(){
                    return Math.random()-.5;
                });
                for(var i=0;i<aLi.length;i++){
                    aLi[i].style.left=arr[i].left+'px';
                    aLi[i].style.top=arr[i].top+'px';
                    aLi[i].style.position='absolute';
                    aLi[i].style.margin=0;
                    aLi[i].index=i;
                }
            };
            // 布局转化
            for(var i=0;i<aLi.length;i++){
                aLi[i].style.left=arr[i].left+'px';
                aLi[i].style.top=arr[i].top+'px';
                aLi[i].style.position='absolute';
                aLi[i].style.margin=0;
            }
            //给所有的li加拖拽
            for(var i=0;i<aLi.length;i++){
                drag(aLi[i]);
                aLi[i].index=i;
            }
            // 拖拽
            function drag(obj){
                obj.onmousedown=function(ev){
                    var oEvent=ev||event;
                    var disX=oEvent.clientX-obj.offsetLeft;
                    var disY=oEvent.clientY-obj.offsetTop;
                    obj.style.zIndex=zIndex++;
                    document.onmousemove=function(ev){
                        var oEvent=ev||event;
                        var l=oEvent.clientX-disX;
                        var t=oEvent.clientY-disY;

                        obj.style.left=l+'px';
                        obj.style.top=t+'px';
                        var oNear=findNear(obj);
                        for(var i=0;i<aLi.length;i++){
                            aLi[i].className='';
                        }

                        if(oNear){
                            oNear.className='ac';
                        }
                    };
                    document.onmouseup=function(){
                        document.onmousemove=null;
                        document.onmouseup=null;
                        var oNear=findNear(obj);

                        if(oNear){
                            //换位置
                            obj.style.left=arr[oNear.index].left+'px';
                            obj.style.top=arr[oNear.index].top+'px';

                            oNear.style.left=arr[obj.index].left+'px';
                            oNear.style.top=arr[obj.index].top+'px';
                            var car;
                            car=oNear.index;
                            oNear.index=obj.index;
                            obj.index=car;

                            oNear.className='';

                        }else{
                            //恢复默认位置
                            obj.style.left=arr[obj.index].left+'px';
                            obj.style.top=arr[obj.index].top+'px';
                        }
                    };
                    return false;
                }
            }
            //碰撞检测
            function collTest(obj,obj2){
                var l=obj.offsetLeft;
                var r=obj.offsetLeft+obj.offsetWidth;
                var t=obj.offsetTop;
                var b=obj.offsetTop+obj.offsetHeight;
                var l2=obj2.offsetLeft;
                var r2=obj2.offsetLeft+obj2.offsetWidth;
                var t2=obj2.offsetTop;
                var b2=obj2.offsetTop+obj2.offsetHeight;

                if(l<r2 && r>l2 && t<b2 && b>t2){
                    return true;
                }else{
                    return false;
                }
            }
            //求距离
            function dis(obj,obj2){
                var a=obj2.offsetLeft-obj.offsetLeft;
                var b=obj2.offsetTop-obj.offsetTop;

                return Math.sqrt(a*a+b*b);
            }
            //求最近位置的元素
            function findNear(obj){
                var iMin=999999999999999;
                var iMinIndex=-1;

                for(var i=0;i<aLi.length;i++){
                    if(obj==aLi[i])continue;
                    if(collTest(obj,aLi[i])){
                        var dis1=dis(obj,aLi[i]);
                        if(dis1<iMin){
                            iMin=dis1;
                            iMinIndex=i;
                        }
                    }
                }
                if(iMinIndex==-1){
                    return null;
                }else{
                    return aLi[iMinIndex];
                }
            }

        
}