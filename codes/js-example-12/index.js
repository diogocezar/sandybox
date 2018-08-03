class Person{
	constructor(){
		this.name = document.querySelector('#name').value
		this.age  = document.querySelector('#age').value
	}
	log(){
		console.log(this)
	}
}

const p = new Person()
p.log()