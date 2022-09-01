// const sayHello = function(){
// 	console.log('hello')
// }
// 

// Arrow function
// const sayHello = () => {
// 	console.log('hello')
// }

// One line Arrow function
// const sayHello = () => console.log('hello')

// arrow function returning a string
// const sayHello = () => 'hello'

// arrow function returning an object literal
// const sayHello = () => ({greeting: 'hello'})

// Passing single parameter
// const sayHello = name => console.log(`Hello ${name}`)
// sayHello('vee')

// Passing multiple parameter
// const sayHello = (name, age) => console.log(`Hello ${name}, you are ${age}`)
// sayHello('vee', 12)

const animals = ['cow', 'goat', 'hen']

// const animalSize = animals.map(function(name) {
// 	return name.length
// })

// const animalSize = animals.map((name) => {
// 	return name.length
// })

const animalSize = animals.map((name) => name.length)
console.log(animalSize)





