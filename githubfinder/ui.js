

class UI{
	constructor(){
		this.profile = document.getElementById('profile')
	}

// Show profile
	showProfile(user){
		this.profile.innerHTML = `
		<div class="card card-body mb-3">
		  <div class="row">
		    <div class="col-md-3">
		      <img class="img-fluid mb-2" src="${user.avatar_url}">
		      <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
		    </div>

		    <div class="col-md-9">
		      <span class="badge bg-primary">Public Repo: ${user.public_repos}</span>
		      <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
		      <span class="badge bg-warning">Followers: ${user.followers}</span>
		      <span class="badge bg-info">Following: ${user.following}</span>
		      <br><br>
		      <ul class="list-group">
		        <li class="list-group-item">Company: ${user.company}</li>
		        <li class="list-group-item">Website: ${user.blog}</li>
		        <li class="list-group-item">Location: ${user.location}</li>
		        <li class="list-group-item">Member since: ${user.created_at}</li>
		      </ul>
		    </div>
		  </div>

		</div>
		<h3 class="page-heading mb-3">Latest Repos</h3>
		<div id="repos"></div>
		`
	}

// Show user's repositories
	showRepos(repos){
		let output = ''
		repos.forEach(repo => {
			output += `
			  <div class="card card-body mb-2">
			    <div class="row">
			      <div class="col-md-6">
			      	<a href="${repo.html_url}" target="_blank">${repo.name}</a>
			      </div>
			      <div class="col-md-6">
					<span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
					<span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
					<span class="badge bg-warning">Forks: ${repo.forks_count}</span>
			      </div>
			    </div>
			  </div>
			`
		})

		//Output repos
		document.getElementById('repos').innerHTML = output

	}

// show Alert
	showAlert(message, className){
		// Clear any remaining alert
		this.clearAlert()
		// Create div
		const div = document.createElement('div')
		// Add class
		div.className = className
		// Add Text
		div.appendChild(document.createTextNode(message))
		// Get parent
		const container = document.querySelector('.search-container')
		// Get search box
		const search = document.querySelector('.search')
		// Insert alert
		container.insertBefore(div, search)

		// Set timeout
		setTimeout(() => {
			this.clearAlert()
		}, 3000)
	}
// Clear alert message
	clearAlert(){
		const currentAlert = document.querySelector('.alert')

		if (currentAlert) {
			currentAlert.remove()
		}
	}
// clear profile
	clearProfile(){
		this.profile.innerHTML = ''
	}
}