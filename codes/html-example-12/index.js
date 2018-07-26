document.querySelector('.popup').addEventListener('click', (e) => {
	e.preventDefault();
	console.log(e.target.dataset)
	console.log(e.target.dataset.name)
	console.log(e.target.dataset.content)
	alert(`${e.target.dataset.name} - ${e.target.dataset.content}`)
})