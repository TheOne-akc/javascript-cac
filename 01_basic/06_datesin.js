//Dates is a object
 let myDate = new Date()
//console.log(myDate.toString())
//console.log(myDate.toDateString())
//console.log(myDate.toLocaleString())
//console.log(typeof myDate)

//let myCreatedDate = new Date(2025,5,18)
//console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date(2025,5,18,5,3)
//console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("2025-06-18")
//console.log(myCreatedDate.toLocaleString());
let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))