let menu = document.querySelector('.menu__list__block');
let burger = document.querySelector('.burger__block');
burger.addEventListener('click', function(){
	menu.classList.toggle('shown');
})