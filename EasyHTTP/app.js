
const http = new easyHTTP

// Get posts

http.get('https://jsonplaceholder.typicode.com/posts', 	function(err, posts){

	if(err){ 
		console.log(err)
	}else{
		console.log(posts)
	}
})

// Get single post

http.get('https://jsonplaceholder.typicode.com/posts/1', 	function(err, post){

	if(err){ 
		console.log(err)
	}else{
		console.log(post)
	}
})


// POST post

const data = {
	title: 'custom post',
	body: 'custom body'
}

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
	if(err){ 
		console.log(err)
	}else{
		console.log(post)
	}

})

// PUT post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
	if(err){ 
		console.log(err)
	}else{
		console.log(post)
	}

})

// DELETE post

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, posts){

	if(err){ 
		console.log(err)
	}else{
		console.log(posts)
	}
})