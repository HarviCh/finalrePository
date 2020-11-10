let btnMenu = document.getElementById('dropdown-btn');
let menu= document.getElementById('dropdown-content');

btnMenu.addEventListener('click', function(){
	'use strict';
	menu.classList.toggle('mostrar');
	btnMenu.classList.toggle('activo');
});