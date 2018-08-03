var a = 19;
var b = "Teste";
var c = [1, 2, 3, 4];
var d = { 'name': 'diogo' };

const x = a;
let   y = b;

const result = []

result.push(`O valor da variável a = ${a}\n`)
result.push(`O valor da variável b = ${b}\n`)
result.push(`O valor do array c = ${c.map(function(item){ return item}).join('')}\n`)
result.push(`O valor da variável d = ${JSON.stringify(d)}`)

document.querySelector("#console").innerHTML = result.join('')

// Arrow Functions

var soma = function soma(n1, n2){
	return n1 + n2
}
console.log(soma(1,1))

var soma = (n1, n2) => {
	return n1 + n2
}
console.log(soma(1,1))

var soma = (n1, n2) => n1 + n2
console.log(soma(1, 1))

var say = function(word){
	return word
}
console.log(say('Hey'))

var say = word => {
	return word
}
console.log(say('How'))

var say = word => word
console.log(say('Let\'s Go'))


