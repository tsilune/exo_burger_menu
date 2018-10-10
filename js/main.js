var myNav = document.querySelector('nav');
var burger = document.querySelector('.burger')
//Fonction de callback appelait avec un élément
burger.addEventListener("click", function(e) {
	myNav.classList.toggle('visible');
	burger.classList.toggle('anime');
})