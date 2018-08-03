
var frutas = ['Maça', 'Banana']

console.log(frutas.length)
console.log(frutas)

var primeiro = frutas[0]
console.log(primeiro)

var ultimo = frutas[frutas.length -1]
console.log(ultimo)

// Iterar um Array
frutas.forEach(function (item, indice) {
	console.log(item, indice);
});

// Adicionar um item ao final do Array
frutas.push('Laranja')
console.log(frutas)

// Remover do final do Array
var ultimo = frutas.pop()
console.log(ultimo)
console.log(frutas)

// Remover do início do Array
var primeiro = frutas.shift()
console.log(primeiro)
console.log(frutas)

// Adicionar ao início do array
var adicionar = frutas.unshift('Morango')
console.log(adicionar)
console.log(frutas)

// Procurar o índice
frutas.push('Manga')
var pos = frutas.indexOf('Banana')
console.log(pos)

// Remover um item pela posição do índice
var removido = frutas.splice(pos, 1)
console.log(frutas)

// Filter
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
const result = words.filter(word => word.length > 6)
console.log(result)

// Map
var array1 = [1, 4, 9, 16]
const map1 = array1.map(x => x * 2)
console.log(map1)

// Reduce
const array2 = [1, 2, 3, 4]
const reducer = (accumulator, currentValue) => accumulator + currentValue
console.log(array2.reduce(reducer))

// ForEach
const array3 = [5,6,7,8]
array3.forEach(item => { console.log(item)})