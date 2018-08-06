let result = []

/* Por que var não é interessante? Vaza o escopo! */
function meuNome(){
	var nome = 'Diogo Cezar';
	console.log(`Meu nome é: ${nome}`)
}

meuNome()
//console.log(`Aqui o nome não funciona, OK: ${nome}`)

function meuFor(){
	for(var i=0;i<10;i++){
		console.log(`Testando ${i}`)
	}
	// Aqui o i vaza o escopo!
	console.log(i)
}

meuFor()

// Para não quebrar a web:
// const e let

const a = 19;
const b = "Teste";
const c = [1, 2, 3, 4];

// const nunca muda, a não ser que seja um obj
const d = { 'name': 'diogo' };

const x = a;
let   y = b;

result.push(`O valor da variável a = ${a}\n`)
result.push(`O valor da variável b = ${b}\n`)
result.push(`O valor do array c = ${c.map(function(item){ return item}).join('')}\n`)
result.push(`O valor da variável d = ${JSON.stringify(d)}\n`)

// Mudando um objeto:
d.name = 'diogo cezar'

result.push(`O valor da variável d = ${JSON.stringify(d)}`)

document.querySelector("#console").innerHTML = result.join('')

// Qual usar?
// Sempre const! quando possível!

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


