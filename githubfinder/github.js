

class Github{
	constructor(){
		this.client_id = 'abf92b1c222642bf60e0'
		this.client_secret = 'fd4e042191f394ec1e519d5b83b86444a4e7b67d'
	}

	async getUser(user){
		const profileRespose = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
			&client_secret=${this.client_secret}`)

		const profileData = await profileRespose.json()

		return {
			profileData
		}

	}
}