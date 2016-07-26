var ban=document.getElementsByClassName("banner")[0];
      var imgs=document.getElementsByClassName("tab_pannel",ban);
      var lis=document.getElementsByClassName("span");
      var btnL=document.getElementsByClassName("btnL")[0];
      var btnR=document.getElementsByClassName("btnR")[0];

      var t;
      var num=0;
      var flag=true;
      t=setInterval(moveR,2000);

     //鼠标移上停止，移走继续自动轮播
      ban.onmouseover=function(){
      	clearInterval(t);
      	btnL.style.display="block";
        btnR.style.display="block";
      }
      ban.onmouseout=function(){
        clearInterval(t);
        t=setInterval(moveR,2000);
        btnL.style.display="none";
      	btnR.style.display="none";
      }

     //圆点按钮
     for(var i=0;i<lis.length;i++){
     	lis[i].index=i;
     	lis[i].onmouseover=function(){
     		num=this.index;
     		for(var j=0;j<imgs.length;j++){
     			animate(imgs[j],{opacity:0});
      		    lis[j].style.background="#211616"
      	}
      	animate(imgs[this.index],{opacity:1});
      	lis[this.index].style.background="#e5004f";
     		}
     	}
    



     //左右按钮
     btnR.onclick=function(){
     	moveR();
     }
     btnL.onclick=function(){
     	moveL();
     }
     
     function moveL(){
     	num--;
      	if(num<0){
      		num=imgs.length-1;
      	}
      	for(var i=0;i<imgs.length;i++){
      		animate(imgs[i],{opacity:0});
      		lis[i].style.background="#211616";
      	}
      	animate(imgs[num],{opacity:1});
      	lis[num].style.background="#e5004f";
     }
     
      //自动轮播
      function moveR(){
      	num++;
      	if(num==imgs.length){
      		num=0;
      	}
      	for(var i=0;i<imgs.length;i++){
      		animate(imgs[i],{opacity:0});
      		lis[i].style.background="#211616"
      	}
      	animate(imgs[num],{opacity:1});
      	lis[num].style.background="#e5004f";

      }