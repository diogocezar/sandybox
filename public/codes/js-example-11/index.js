var validation = {
	firstName : null,
	lastName  : null,
	validate: function () {
		validation.firstName = document.querySelector("#first-name");
		validation.lastName = document.querySelector("#last-name");
		validation.firstName.style.borderColor = 'black';
		validation.lastName.style.borderColor = 'black';
		if (validation.firstName.value != '' && validation.lastName.value != '')
			alert('Enviado com sucesso!');
		else {
			validation.firstName.style.borderColor = 'red';
			validation.lastName.style.borderColor = 'red';
		}
	},
	init: function () {
		var btn = document.querySelector("#send");
		btn.addEventListener('click', validation.validate);
	}
}

validation.init();