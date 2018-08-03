let Person = {
	name : '',
	age  : '',
	init : () => {
		Person.name = document.querySelector('#name').value
		Person.age  = document.querySelector('#age').value
	},
	log : () => {
		console.log(Person)
	}
}

Person.init()
Person.log()