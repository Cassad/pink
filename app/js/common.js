window.onload = function(){


	var btnOpen = document.querySelector('.navigation--closed .menu-toggle');
	var btnClosed = document.querySelector('.navigation--opened .menu-toggle');
	var menu = document.querySelector('.navigation');

	btnOpen.addEventListener('click', function(){
		menu.classList.remove('navigation--closed');
		menu.classList.add('navigation--opened');
	});

	btnClosed.addEventListener('click', function(){
		menu.classList.add('navigation--closed');
		menu.classList.remove('navigation--opened');
		
	});
};
