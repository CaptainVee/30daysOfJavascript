// Person constructor
function Person(name, age, dob){
	this.name = name
	this.age = age
	this.dob = new Date(dob)

	this.CalculateAge = function(){
		const diff = Date.now() - this.dob.getTime()
		const ageDate = new Date(diff)
		return Math.abs(ageDate.getUTCFullYear() - 1970)
	}
}

const vee = new Person('vee', 29, '9-10-1990')
console.log(vee.CalculateAge())