
function tab(ID){
	var oME=document.getElementById(ID);
	var aLi11=oME.getElementsByTagName('li');
	var aImg11=oME.getElementsByTagName('img');
	for (var i = 0; i < aLi11.length; i++) {
		aLi11[i].index=i;
		aLi11[i].onmouseover=function(){
			for (var j = 0; j < aLi11.length; j++) {
				aLi11[j].className='';
				aImg11[j].style.display='none'
			}
			this.className='on';
			aImg11[this.index].style.display='block';
		}
	}

}
function floor(ID,ID1){
	var oFloor1=document.getElementById(ID);
	var aLi2=oFloor1.getElementsByTagName('li');
	var oHidearea1=document.getElementById(ID1);
	var aFloo1=oHidearea1.getElementsByClassName('floor1');
	for (var i = 0; i < aLi2.length; i++) {
		aLi2[i].index=i;
		aLi2[i].onmouseover=function(){
			for (var j = 0; j < aLi2.length; j++) {
				aLi2[j].className='tab-item'
				aFloo1[j].style.display='none'
			}
			this.className='tab-item active'
			aFloo1[this.index].style.display='block'
		}
	}
}
window.onload=function(){
	//送至
	var oConleft=document.getElementById('con_left');
	var oUl=document.getElementById('lu');
	var aLi=oUl.getElementsByTagName('li');
	oConleft.onmouseover=function(){
		oUl.style.display='block'
		for(var i=0;i<aLi.length;i++){
			aLi[i].onclick=function(){				
				oConleft.innerHTML=this.innerHTML;
				oUl.style.display='none';
			}
			aLi[i].onmouseover=function(){
				for(var a=0;a<aLi.length;a++){
					aLi[a].className=''
				}
				this.className='on'
			}
		}
	}
	// 我的京东点击出来
	var oJt=document.getElementById('jt');
	var aMy=document.getElementById('my');
	oJt.onmouseover=function(){

		aMy.style.display='block';

	}
	oJt.onmouseout=function(){
		aMy.style.display='none'
	}
	// var oJt=document.getElementById('jt');
	// var dli=oJt.getElementsByTagName('li')
	// var ddiv=oJt.getElementsByTagName('div')
	//nav 全部商品
	var oListgoods=document.getElementById('list-goods');
	var ali=oListgoods.getElementsByTagName('li');
	var adiv=oListgoods.getElementsByTagName('div');
	for (var i = 0; i < ali.length; i++) {

		ali[i].index=i;
		ali[i].onmouseover=function(){
			for (var a = 0; a < ali.length; a++) {
				
				ali[a].className='';
				adiv[a].style.display='none';
			}
			this.className='on';
			adiv[this.index].style.display='block'

		}
		ali[i].onmouseout=function(){
			for (var a = 0; a < ali.length; a++) {
				
				ali[a].className='';
				adiv[a].style.display='none';
			}
		}
	}
//nav 图片变化
	var bannar=document.getElementById('bannar');
	var aImg=bannar.getElementsByTagName('img');
	var oNum=document.getElementById('num');
	var ali1=oNum.getElementsByTagName('li')
	for (var i = 0; i < ali1.length; i++) {
		ali1[i].index=i;
		ali1[i].onmouseover=function(){
			for (var j = 0; j < ali1.length; j++) {
				ali1[j].className='';
				aImg[j].style.display='none'
			}
			this.className='on'
			aImg[this.index].style.display='block'
		}
	}
//	nav 右下角
	var oTextall=document.getElementById('text-all');
	var aLi1=oTextall.getElementsByTagName('li');
	var oHideall=document.getElementById('hide-all')
	var aDiv1=oHideall.getElementsByTagName('div');
	for (var i = 0; i < aLi1.length; i++) {
		aLi1[i].index=i;
		aLi1[i].onmouseover=function(){
			for (var j = 0; j < aLi1.length; j++) {
				aLi1[j].className=''
				aDiv1[j].style.display='none'

			}
			this.className='on'
			aDiv1[this.index].style.display='block'	
		}
	}
// 楼1
	floor('floor1','hide-area1');
	
	floor('floor3','hide-area3');
	floor('floor4','hide-area4');
	floor('floor5','hide-area5');

	
//楼11层life
	tab("me-c-t");
	tab("me-c-b");
	tab("hide3-img");
	tab("hide4-img");
	tab("hide5-img");
	tab("hide10-img")
}
