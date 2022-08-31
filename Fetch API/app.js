document.getElementById('button1').addEventListener('click', getText)

function getText(){
	fetch('text2.txt').then(function(response){
		return response.text()
	}).then(function(data){
		console.log(data)

	}).catch(function(error){
		console.log(error)
	})
}