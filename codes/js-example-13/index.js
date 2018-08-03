/*
	Sua principal função é deixar mais elegante o CallBackHell
	func1(func2){
		func2(func3){
			func3(func4){
				...
			}
		}
	}
*/

/*
	Criamos uma Peomesa que será resolvida após 5 segundos
	Se algo acontecer, reject é chamado
*/
var promise = new Promise((resolve, reject) => {
	try{
		setTimeout(() => {
			resolve()
		}, 3000)
	}
	catch(e){
		console.log(e)
		reject()
	}
})

/*
	Aqui passamos uma função anônima para a promise resolver
	Quando ficar pronto... faça...
*/
promise.then(() => {
	document.getElementById('console').innerHTML = 'Promessa foi cumprida!'
})