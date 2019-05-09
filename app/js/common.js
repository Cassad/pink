window.onload = function(){

	var menu 			= document.querySelector('.navigation');
	var toggleBtn = document.querySelector('.navigation .menu-toggle');
	
	console.log();

	toggleBtn.addEventListener('click', function(){
		if (menu.classList.contains('navigation--closed')){
			menu.classList.remove('navigation--closed');
			menu.classList.add('navigation--opened');
		}
		else{
			menu.classList.remove('navigation--opened');
			menu.classList.add('navigation--closed');
		}

	});


	var form 						= document.querySelector('.lottery__form');
	var submitBtn 			= document.querySelector('.form__button');
	var popup 					= document.querySelector('.popup');
	var errorPopupBtn 	= document.querySelector('.popup__content--error .popup__button');
	var successPopupBtn = document.querySelector('.popup__content--success .popup__button');
	var verifyInput 		= document.querySelectorAll('input[data-valid="yes"]');

	

	submitBtn.addEventListener('click', function(e){
	var count = 0;
	e.preventDefault();

	for (var i = 0; i < verifyInput.length; i++){
		if (verifyInput[i].value){
			count+=1;
		}
		else {
			verifyInput[i].classList.add('input-text--error');
		}
	}

		if (count === verifyInput.length){	
		popup.classList.add('popup--success');
	}
	else{
		popup.classList.add('popup--error');
	}

	for (var i = 0; i < verifyInput.length; i++) {
		verifyInput[i].addEventListener('change', function () {
			for (j = 0; j < verifyInput.length; j++) {
				if (verifyInput[j].value) {
					verifyInput[j].classList.remove('input-text--error');
				}
				else {
					verifyInput[j].classList.add('input-text--error');
				}
			}
		});
	}
	});


	successPopupBtn.addEventListener('click', function(){
		form.submit();
		popup.classList.remove('popup--success');
	});

	errorPopupBtn.addEventListener('click', function(){
		popup.classList.remove('popup--error');
	});



};