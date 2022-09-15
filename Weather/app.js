
const storage = new Storage()
const weatherLocation = storage.getLocationData()


const weather = new Weather(weatherLocation.country, weatherLocation.city)
const ui = new UI()



//get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather)
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
	const country = document.getElementById('country').value
	const city = document.getElementById('city').value

	weather.changeLocation(city, country)

	// save location in local storage
	storage.setLocationData(city, country)
	// get and display weather
	getWeather()
	
	// close modal
	$('#locModal').modal('hide')
})

// function to get weather
function getWeather(){
	weather.getWeather()
	  .then(response => {
	  	ui.paint(response)
	  })
	  .catch(err => console.log(err))	
}

