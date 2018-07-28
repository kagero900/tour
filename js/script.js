let chooseBtn = document.getElementById('choose'),
	receiveBtn = document.getElementById('receive'),
	heading = document.getElementsByTagName('h2')[0],
	nameInput = document.getElementsByClassName('contactform_name')[0],
	phoneInput = document.querySelector('.contactform_phone'),
	mailInput = document.querySelectorAll('.contactform_mail')[0],
	modal = document.querySelector('.modal'),
	close = document.querySelector('.close'),
	text = document.getElementsByName('message')[0];//используется крайне редко


function hover() {
	heading.textContent = "Действительно всё!";
}	


function out() {
	heading.textContent = "Всё включено!";
}
//heading.onmouseenter = hover; //в этом случае круглые скобки не нужны

//heading.addEventListener('mouseenter', hover); //этот обработчик можно 
//удалять в будущем, в отличие от других способов. для этого исп. removeEventListener,
//а также изменять и дополнять, напр. добавить другую функцию. будут работать обе
//heading.addEventListener('mouseleave', out);

heading.addEventListener('click', hover);
heading.addEventListener('dblclick', function() {
	heading.textContent = 'Все включено!'
});

receiveBtn.addEventListener('click', function() {
	modal.style.display = "block"
});

close.addEventListener('click', function() {
	modal.style.display = "none"
});

nameInput.addEventListener('input', function() {
	text.value = "My name is " + nameInput.value + ". And I wanna ask: "

	if (nameInput.value == "") {
		text.value = ""
	}
});