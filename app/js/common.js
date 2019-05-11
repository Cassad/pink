// window.onload = function(){

// 	var menu 			= document.querySelector('.navigation');
// 	var toggleBtn = document.querySelector('.navigation .menu-toggle');
	
// 	console.log();

// 	toggleBtn.addEventListener('click', function(){
// 		if (menu.classList.contains('navigation--closed')){
// 			menu.classList.remove('navigation--closed');
// 			menu.classList.add('navigation--opened');
// 		}
// 		else{
// 			menu.classList.remove('navigation--opened');
// 			menu.classList.add('navigation--closed');
// 		}

// 	});


// 	var form 						= document.querySelector('.lottery__form');
// 	var submitBtn 			= document.querySelector('.form__button');
// 	var popup 					= document.querySelector('.popup');
// 	var errorPopupBtn 	= document.querySelector('.popup__content--error .popup__button');
// 	var successPopupBtn = document.querySelector('.popup__content--success .popup__button');
// 	var verifyInput 		= document.querySelectorAll('input[data-valid="yes"]');

	

// 	submitBtn.addEventListener('click', function(e){
// 	var count = 0;
// 	e.preventDefault();

// 	for (var i = 0; i < verifyInput.length; i++){
// 		if (verifyInput[i].value){
// 			count+=1;
// 		}
// 		else {
// 			verifyInput[i].classList.add('input-text--error');
// 		}
// 	}

// 		if (count === verifyInput.length){	
// 		popup.classList.add('popup--success');
// 	}
// 	else{
// 		popup.classList.add('popup--error');
// 	}

// 	for (var i = 0; i < verifyInput.length; i++) {
// 		verifyInput[i].addEventListener('change', function () {
// 			for (j = 0; j < verifyInput.length; j++) {
// 				if (verifyInput[j].value) {
// 					verifyInput[j].classList.remove('input-text--error');
// 				}
// 				else {
// 					verifyInput[j].classList.add('input-text--error');
// 				}
// 			}
// 		});
// 	}
// 	});


// 	successPopupBtn.addEventListener('click', function(){
// 		form.submit();
// 		popup.classList.remove('popup--success');
// 	});

// 	errorPopupBtn.addEventListener('click', function(){
// 		popup.classList.remove('popup--error');
// 	});



// };

$(document).ready(function(){

	$('.navigation .menu-toggle').click(function(){
		if ($('.navigation').hasClass('navigation--closed')) {
		$('.navigation').removeClass('navigation--closed');
		$('.navigation').addClass('navigation--opened');
	}
	else{
			$('.navigation').removeClass('navigation--opened');
			$('.navigation').addClass('navigation--closed');
	}
	});


$('.form__button').click(function(e){
	e.preventDefault();
	var count = 0;
	var inputValid = $('.input-text[data-valid="yes"]');

	$('.input-text[data-valid="yes"]').each(function(){
		if ($(this).val()) {
			count+=1;
		}
		else {
			$(this).addClass('input-text--error');
		}
	});

	$('.input-text[data-valid="yes"]').change(function(){
		if ($(this).val()){
			($(this).removeClass('input-text--error'));
		}
		else{
			($(this).addClass('input-text--error'));
		}
	});

console.log(count);

	if (count === inputValid.length) {
		$('.popup').addClass('popup--success');
	}
	else {
		$('.popup').addClass('popup--error');
	}

});

$('.popup__content--error .popup__button').click(function(){
	$('.popup').removeClass('popup--error');
});

$('.popup__content--success .popup__button').click(function () {
	$('.popup').removeClass('popup--success');
	$('.form').submit();
});


});
