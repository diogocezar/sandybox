function sumNumbers(n1, n2){
	return n1 + n2
}

function getRand(){
	return Math.floor(Math.random() * 10)
}

const n1 = getRand()
const n2 = getRand()

document.querySelector("#console").innerHTML = `A soma de [${n1}] com [${n2}] é = [${sumNumbers(n1, n2)}]`