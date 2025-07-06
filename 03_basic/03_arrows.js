const user ={
    username : "alok",
    price: 999,

    welcomemessage:function (){
        console.log(`${this.username} welcome to website`);
        
    }

}
user.welcomemessage()
user.username="sam"
user.welcomemessage()
console.log(this);// result : empty {}

// const chai = function chai() {
//   let = "alok"
//  console.log(this);
// }
// chai()


const chai = ()=> { // usnig arrow function
    let = "alok"
    console.log(this);
}
//chai()

// const addtwo = (num1,num2)=>{// using arrow function
//     return num1+num2
// }
// console.log(addtwo(3,4));

//const addtwo = (num1,num2)=> (num1+num2)

const addtwo = (num1,num2)=>({username: "alok"})// without () object will not retuen  value
console.log(addtwo());

// const myarray = [2,3,4,5,6]

// myarray.forEach()