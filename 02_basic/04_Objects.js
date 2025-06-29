// Objects  singleton

const tinderUser = new Object()
//console.log(tinderUser);

const tinderUser2 = {}
tinderUser2.id = "123abc"
tinderUser2.age = 18
tinderUser2.loggedIn = true
//console.log(tinderUser2);

const regularUser ={
    email : "alok@gmail.com",
    fullname :{
        userfullname :{
            fistname :"Alok",
            lastname:"Chaturvedi"
        }
    }
}
//console.log(regularUser);
//console.log(regularUser.fullname.userfullname.fistname)

const obj1= { 1: "a", 2: "b"}
const obj2= { 3: "a", 4: "b"}
const obj3 = Object.assign({},obj1,obj2)
const obj4= {...obj1,...obj2}
//console.log(obj3);
//console.log(obj4);

const Users= [
    {
        name: "alok",
        email: "google@gmail.com",
        Aim: "Prosper",

    },
    {
        name: "alok1",
        email: "yahoo@gmail.com",
        Aim: "Prosper1",

    },
      {
        name: "alok2",
        email: "HeyS@gmail.com",
        Aim: "Prosper2",

    }

]
//console.log(Users[0].Aim)
//console.log(Object.keys(tinderUser2));
//console.log(Object.values(tinderUser2));
//console.log(Object.entries(tinderUser2));
//console.log(tinderUser2.hasOwnProperty("age"));

///
const course ={
    coursename:"js in hinid",
    fees: "999",
    courseInstructor : "alok"
}
const {courseInstructor: inst}= course

console.log(inst);
