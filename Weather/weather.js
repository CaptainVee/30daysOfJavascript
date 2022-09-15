class Weather{
	constructor(city, country){
		this.apikey = '2503cebd3120a66fa37ea6b7d4423a4e'
		this.city = city
		this.country = country
	}

	// Fetch weather from API
	async getWeather(){
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather
			?q=${this.city},${this.country}&APPID=${this.apikey}&units=metric`)
		const responseData = await response.json()

		return responseData
	}

	// Change weather location
	changeLocation(city, country){
		this.city = city
		this.country = country
	}
		
}