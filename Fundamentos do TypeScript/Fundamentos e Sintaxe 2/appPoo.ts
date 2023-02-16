//POO
class User {
    name: string = 'Ben'
    age: number = 34

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name);
    }
}
const user = new User("Jessica", 28)
user.showName()

const otherUser = new User("Hatus", 30)
user.showName()

