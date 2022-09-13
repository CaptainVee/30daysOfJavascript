// init github and UI class
const github = new Github
const ui = new UI

// Search input
const searchUser = document.getElementById('searchUser')

// search input event listiners
searchUser.addEventListener('keyup', (e) =>{
	// Get input text
	const userText = e.target.value

	if(userText !== ''){
		// Make http call
		github.getUser(userText)
		  .then(data => {
		  	if(data.profileData.message === 'Not Found'){
		  		// show alert
		  		ui.showAlert('User not found', 'alert alert-danger')

		  	}else {
		  		// show profile
		  		ui.showProfile(data.profileData)
		  		ui.showRepos(data.reposData)
		  	}

		  })

	}else {
		// clear profile
	}
})