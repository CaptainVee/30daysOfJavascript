// Book Constructor
function Book(title, author, isbn){
	this.title = title
	this.author = author
	this.isbn = isbn
}

// UI Constructor
function UI(){}


// Add book to list function
UI.prototype.addBookToList = function(book){
	const list = document.getElementById('book-list')
	//create tr elements
	const row = document.createElement('tr')
	//insert cols
	row.innerHTML = `
	<td>${book.title}</td>
	<td>${book.author}</td>
	<td>${book.isbn}</td>
	<td><a href="" class="delete">X</a></td>
	`
	list.appendChild(row)
}

// Error alert function

UI.prototype.showAlert = function(message, className){
	// create div
	const div = document.createElement('div')
	// add classes
	div.className = `alert ${className}`
	// add text
	div.appendChild(document.createTextNode(message))
	// Get parent
	const container = document.querySelector('.container')
	// get form
	const form = document.querySelector('#book-form')
	// insert alert
	container.insertBefore(div, form)
	// set timout after 3sec
	setTimeout(function(){
		document.querySelector('.alert').remove()
	}, 3000)
}

// Delete book function
UI.prototype.deleteBook = function(target){
	if( target.className === 'delete'){
		target.parentElement.parentElement.remove()
	}
}

// Clear Fields function
UI.prototype.clearFields = function(){
	document.getElementById('title').value = ''
	document.getElementById('author').value = ''
	document.getElementById('isbn').value = ''
}
// Event Listeners

document.getElementById('book-form').addEventListener('submit',
	function(e){
		// Get form values
		const title = document.getElementById('title').value,
			  author = document.getElementById('author').value,
			  isbn = document.getElementById('isbn').value

		//Instantiate a book
		const book = new Book(title, author, isbn)
		
		//Instantiate UI
		const ui = new UI();

		// Validate
		if(title === ''|| author === ''|| isbn ===''){
			// Error alert
			ui.showAlert('please fill in all fields', 'error')

		} else{

		// Add book to list 
		ui.addBookToList(book)

		// show success
		ui.showAlert('Book Added!', 'success')

		// Clear fields
		ui.clearFields()
		}

		e.preventDefault()
	})

// Event listener for delete

document.getElementById('book-list').addEventListener('click', function(e){

	const ui = new UI()
	ui.deleteBook(e.target)

	ui.showAlert('Book removed!', 'success')

	e.preventDefault()
})