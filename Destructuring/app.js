// Destructuring assignment

let a, b;
// Rest patern
[a, b, ...rest] = [100, 200, 300, 400];

({ a, b, ...rest } = {a:100, b:200, c:300, d:400, e:500});


// Array Destructuring

// const people = ['John', 'Beth', 'Mike']
// 
// const [person1, person2, person3] = people

// Parse array returned from function
function getPeople() {
	return ['John', 'Beth', 'Mike']
}

const [person1, person2, person3] = getPeople()


// Object destructuring
const person = {
	name:"John",
	age:15,
	city:"katako",
	gender:"Male", 
	sayHello: function(){
		console.log('who goes')
	}
}

const { name, age, city, sayHello} = person
console.log(name, age, city, sayHello)


