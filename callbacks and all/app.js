const posts = [
	{title:'Post one', body: 'This is the body of post one'},
	{title:'Post two', body: 'This is the body of post two'}
]

// function createPost(post, callback){
// 
// 	setTimeout(function(){
// 		posts.push(post)
// 		callback()
// 	}, 2000)
// 
// }
// 
// function getPosts(){
// 
// 	setTimeout(function(){
// 		let output = ''
// 		posts.forEach(function(post){
// 			output += `<li>${post.title}</li>`
// 		})
// 		document.body.innerHTML = output
// 	}, 1000)
// }
// 
// createPost({title:'Post three', body: 'This is the body of post three'}, getPosts)


// Promises

function createPost(post, ){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			posts.push(post)
			resolve()
		}, 2000)
	})
}

function getPosts(){

	setTimeout(function(){
		let output = ''
		posts.forEach(function(post){
			output += `<li>${post.title}</li>`
		})
		document.body.innerHTML = output
	}, 1000)
}

createPost({title:'Post three', body: 'This is the body of post three'}).then(getPosts)