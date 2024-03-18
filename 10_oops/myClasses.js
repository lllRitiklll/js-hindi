//ES6

class User {
    constructor(username, email, password) {
        this.username = username,
            this.email = email,
            this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUserName() {
        return `${(this.username).toUpperCase()}`
    }

}

const chai = new User("ritik", "ritik@gmail.com", "fhashu33")
console.log(chai.encryptPassword());
console.log(chai.changeUserName());

//if we not use the class
///behind the scene

function User(username, email, password) {
    this.username = username,
    this.email = email,
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}
const tea =new User("tea","tea57@gmail.com", "6767hh")

console.log(tea.changeUserName());
console.log(tea.encryptPassword());