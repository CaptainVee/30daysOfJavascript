document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(e){
	const number = document.querySelector('input[type="number"]').value

	xhr = new XMLHttpRequest()

	xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

	xhr.onload = function(){
		if(this.status === 200){
			const response = JSON.parse(this.responseText)
			
			let output = ''

			if(response.type === 'success')
		}
	}

	xhr.send()

	e.preventDefault()

}