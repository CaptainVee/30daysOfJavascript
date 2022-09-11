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
		  		console.log('cow')

		  	}else {
		  		// show profile
		  		ui.showProfile(data.profileData)
		  	}

		  })

	}else {
		// clear profile
	}
})