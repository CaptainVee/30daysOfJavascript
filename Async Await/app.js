// async function myFunc(){
// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(()=> resolve('Hello'), 1000)
// 	})
// 
// 	const res = await promise // wait until promise is resolved
// 	return res
// }
// 
// myFunc()
// 	.then(res => console.log(res))


async function getUsers() {
	// await the response of the fetch call
	const response = await fetch('https://jsonplaceholder.typicode.com/users')

	// only proceed once its resolved
	const data = await response.json()
	return data
}

getUsers().then(users => console.log(users))