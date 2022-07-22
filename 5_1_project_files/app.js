// Person constructor
function Person(firstname, lastname, age, dob){
	this.firstname = firstname
	this.lastname = lastname
	this.age = age
	this.dob = new Date(dob)

	this.CalculateAge = function(){
		const diff = Date.now() - this.dob.getTime()
		const ageDate = new Date(diff)
		return Math.abs(ageDate.getUTCFullYear() - 1970)
	}
}

const vee = new Person('vee', 'joe', 29, '9-10-1990')
const mary = new Person('mary', 'John', 59, '10-10-2003')

// Get full name
Person.prototype.getFullname = function() {
	return `${this.firstname} ${this.lastname}`
}

// Gets married
Person.prototype.getsMarried = function(newLastname){
	this.lastname=newLastname
}

mary.getsMarried('cow')
console.log(mary.getFullname())

// Something something
const personPrototypes = {
	greeting: function(){
		return `Hello there ${this.firstname} ${this.lastname}`
	},
	getsMarried: function(newLastname){
		this.lastname = newLastname
	}
}




const biggy = Object.create(personPrototypes)
biggy.firstname = 'biggy'
biggy.lastname = 'fat'
biggy.age = 29

biggy.getsMarried("biggy biggy")

console.log(biggy.greeting())


// ES6 syntax








