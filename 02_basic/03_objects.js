//singleton


// objects literals
const mysym = Symbol("Key1")

const JsUser = {
    name:"Alok",
    "full name":"Alok Chaturvedi",
    [mysym]: "mykey1",// to execute symbol

    age: 18,
    locationi: "Mathura",
    email: "alok@google.com",
    isLoggedIn : false,
    LastLoginDays :["Mondays","Saturday"]
}

console.log(JsUser.email);

console.log(JsUser["email"]);
console.log(JsUser[mysym])// to execute symbol

JsUser.email="Alok@yahoo.com"
console.log(JsUser)// to freeze an object
//Object.freeze(JsUser)
JsUser.email="Alok@chatgpt.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user");    
}
console.log(JsUser.greeting());

JsUser.greetingtwo = function(){
    console.log(`Hello ${this["full name"]} js user`);    
}
console.log(JsUser.greetingtwo());
