const menuBtn = document.querySelector('.burger__btn');
const menuMobile = document.querySelector('.navbar__info');
const body = document.body;
const navItem = menuMobile.querySelectorAll('.navbar__item');


menuBtn.addEventListener('click',()=> {
	body.classList.toggle('scroll--stop')
	menuBtn.classList.toggle('burger--transform');
	menuMobile.classList.toggle('burger--open');
});

navItem.forEach(element => {
	element.addEventListener("click",()=> {
		body.classList.remove('scroll--stop')
		menuBtn.classList.remove('burger--transform');
		menuMobile.classList.remove('burger--open');
	});
});