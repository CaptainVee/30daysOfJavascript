
import { http } from './http'
import { ui } from './ui'

//Get post on DOM load
document.addEventListener('DOMContentLoaded', getPosts)

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', addPost)

// Listen for delete post
// document.querySelector('delete').addEventListener('click', deletePost)
// you can't use the above because the delete is added dynamucally
document.querySelector('#posts').addEventListener('click', deletePost)

// Listen for edit post
document.querySelector('#posts').addEventListener('click', editPost)


// Get post
function getPosts() {
	http.get('http://localhost:3000/posts')
	  .then(data => ui.showPosts(data))
	  .catch(error => console.log(error))
}

// Add post
function addPost(){
	const title = document.querySelector('#title').value
	const body = document.querySelector('#body').value

	const data = {
		title,
		body
	}
	http.post('http://localhost:3000/posts', data)
	  .then( data => {
	  	ui.showAlert('Post added!', 'alert alert-success')
	  	ui.clearFields()
	  	getPosts()
	  })
	  .catch(error => console.log(error))
}

// Delete post
function deletePost(e){

	if (e.target.parentElement.classList.contains('delete')) {
		const id = e.target.parentElement.dataset.id
		if (confirm('Are you sure?')) {
			http.delete(`http://localhost:3000/posts/${id}`)
			  .then(data => {
			  	ui.showAlert('Deleted successfully', 'alert alert-success')
			  	getPosts()
			  })
			  .catch(error => {console.log(error)})
		}
	}
	e.preventDefault()
	
}

// Edit post
function editPost(e){

	if (e.target.parentElement.classList.contains('edit')) {
		const id = e.target.parentElement.dataset.id
		const body = e.target.parentElement.previousElementSibling.textContent
		const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent

		const data = {
			id,
			title,
			body
		}

		// Fill form with the current post
		ui.fillForm(data)
	}

	e.preventDefault()
}

npm run json-server
npm start