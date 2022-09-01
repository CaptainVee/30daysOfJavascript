document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJson)
document.getElementById('button3').addEventListener('click', getApi)


// get text from local
function getText(){
	fetch('text.txt').then(function(response){
		return response.text()
	}).then(function(data){
		console.log(data)
		document.getElementById('output').innerHTML = data

	}).catch(function(error){
		console.log(error)
	})
}

// get json from local
function getJson(){
	fetch('posts.json').then(function(response){
		return response.json()
	}).then(function(data){
		let output = ''
		data.forEach(function(post) {
			output += `<li>${post.title}</li>`
		})
		document.getElementById('output').innerHTML = output

	}).catch(function(error){
		console.log(error)
	})
}

// get json from external api
function getApi(){
	fetch('https://api.github.com/users').then(function(response){
		return response.json()
	}).then(function(data){
		let output = ''
		data.forEach(function(user) {
			output += `<li>${user.login}</li>`
		})
		document.getElementById('output').innerHTML = output

	}).catch(function(error){
		console.log(error)
	})
}