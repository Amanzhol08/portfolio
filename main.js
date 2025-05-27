const modal=document.getElementById("myModal");
const img=document.getElementById("myImg");
const modalImg=document.getElementById('imgBig');
const closeBtn=document.querySelector(".close");

img.onclick=function(){
	modal.style.display="block";
	modalImg.src=this.src;
}

closeBtn.onclick=function(){
	modal.style.display='none';
}

modal.onclick=function(e){
	if (e.target===modal){
		modal.style.display="none";
	}
}

const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('menu--active');
});
