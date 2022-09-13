

class Github{
	constructor(){
		this.client_id = 'abf92b1c222642bf60e0'
		this.client_secret = 'fd4e042191f394ec1e519d5b83b86444a4e7b67d'
		this.repos_count = 7
		this.repos_sort = 'created: asc'
	}

	async getUser(user){
		const profileRespose = await fetch(`https://api.github.com/users/${user}
			?client_id=${this.client_id}
			&client_secret=${this.client_secret}`)

		const repositoryRespose = await fetch(`https://api.github.com/users/${user}/repos
			?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}
			&client_secret=${this.client_secret}`)
		const profileData = await profileRespose.json()
		const reposData = await repositoryRespose.json()
		return {
			profileData,
			reposData
		}

	}
}