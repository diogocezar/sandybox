function executeFunction(fn, n1, n2) {
	return fn(n1, n2)
}

function getRand(){
	return Math.floor(Math.random() * 10)
}

const n1 = getRand()
const n2 = getRand()
const result = executeFunction(function(n1, n2){
	return n1 + n2
}, n1, n2)

document.querySelector("#console").innerHTML = `A soma de [${n1}] com [${n2}] é = [${result}]`