// const tinderUser = new Object();
const tinderUser ={};

tinderUser.id ="123abc";
tinderUser.name="babluu";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser={
    email:"abc@gmail.com",
    fullName:{
        userFullName: {
            firstName: "Ritik",
            LastName:"Gupta"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 ={...obj1, ...obj2} //spread method
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {

    },
    {

    },
]

users[1].email;
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
     courseName: "js in Hindi",
     price: "699",
     courseInstructer: "Hitesh"
}

// console.log(course.courseInstructer);

const {courseInstructer: instructer}=course; //destuctureing
console.log(instructer);
