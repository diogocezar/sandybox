var objs = [
	{
		name : 'Diogo Cezar',
		age: 32,
		cars : ['HB20','Gol']
	},
	{
		fruits : ['Maça', 'Laranja', 'Banana']
	},
	{
		numbers : [10,20,30],
		result : () => {
			return objs[2].numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
		}
	}
]

console.log(objs[0].name)
console.log(objs[1])
console.log(objs[2].result())