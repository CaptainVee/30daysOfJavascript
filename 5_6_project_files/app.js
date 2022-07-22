
class Human{
  constructor(firstname, lastname, dob){
    this.firstname = firstname
    this.lastname = lastname
    this.birthday = new Date(dob)
  }

  greeting(){
    return`Hi there ${this.firstname} ${this.lastname}`
  }

  calculateAge(){
    const diff  = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  getsMarried(newLastname){
    this.lastname = newLastname
  }

  static addNumber(x, y){
    return x+y

  }

}

const big_guy = new Human("big", "guy", "12-12-2008")
big_guy.getsMarried('man')
console.log(big_guy.greeting())
console.log(big_guy.calculateAge())
console.log(Human.addNumber(1,2))