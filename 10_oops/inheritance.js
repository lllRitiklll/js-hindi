class User{
    //constructor
    constructor(username){
        this.username=username
    }
    //method
    logme(){
        console.log(`USERNAME is ${this.username}`)
    }
}
//extends kyeword for take user functionality (inheritance)
class teacher extends User{
    constructor(username,email,password){
        //username call using superkeywod form user
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai =new teacher("chai","chai@gmail.com","233rr")
chai.addCourse()

const masalaChai = new User("masalaChai")
masalaChai.logme()

console.log(chai instanceof teacher);