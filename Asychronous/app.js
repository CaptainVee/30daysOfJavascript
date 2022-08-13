document.getElementById('button').addEventListener('click', loadData)

function loadData(){
	// Create an XHR object
	const xhr = new XMLHttpRequest()

	// Open
	xhr.open('GET', 'data.txt', true)

	//Optional - Used for spinners/loader while waiting for data to fetch

	xhr.onprogress = function(){
		console.log('READY STATE', xhr.readyState)
	}

	xhr.onload = function(){
		if(this.status === 200){
			console.log(this.responseText)
		}
	}

	xhr.send()
}