
const http = new EassyHTTP

// Get posts

http.get('https://jsonplaceholder.typicode.com/users')
	.then(data => console.log(data))
	.catch(error => console.log(error))


// POST post

const data = {
	name : 'cow goat',
	username : 'cowgoat',
	email: 'cow@goatmail.com'
}

http.post('https://jsonplaceholder.typicode.com/users', data)
	.then(data => console.log(data))
	.catch(error => console.log(error))

// PUT post
http.put('https://jsonplaceholder.typicode.com/users/1', data)
	.then(data => console.log(data))
	.catch(error => console.log(error))


// DELETE post
http.delete('https://jsonplaceholder.typicode.com/users/1')
	.then(data => console.log(data))
	.catch(error => console.log(error))
