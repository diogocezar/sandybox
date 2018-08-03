function Person(name, age) {
	this.name  = name
	this.age   = age
	this.print = () => {
		console.log(`Nome : ${this.name} - Idade : ${this.age}`)
	}
}

const diogo = new Person(
	document.querySelector('#name').value,
	document.querySelector('#age').value
)

diogo.print()