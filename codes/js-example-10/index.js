document.getElementById('ex1_button').addEventListener('click', function(){
	var fruta = document.getElementById('ex1_input').value
	console.log(fruta)
})

document.querySelector('#ex2_button').addEventListener('click', function () {
	var carro = document.querySelector('#ex2_input').value
	console.log(carro)
})

document.querySelector('#ex3_button').addEventListener('click', function () {
	var inputs = document.querySelectorAll('.form')
	inputs.forEach(function(input){
		console.log(input.value)
	})
})

document.querySelector('#ex4_button').addEventListener('click', function () {
	document.querySelector('#conteudo').innerHTML = 'Conteúdo Alterado'
})

document.querySelector('#ex5_button').addEventListener('click', function () {
	document.querySelector('#conteudo').style.color = '#32254f';
})