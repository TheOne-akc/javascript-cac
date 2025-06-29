function saymyname (){
    console.log("a");
    console.log("l");
    console.log("0");
    console.log("k");
}
//saymyname()

//function addtwonumbers (number1,number2){
  //  console.log(Number(number1)+Number(number2));
//}
function addtwonumbers (number1,number2){
    let result =number1+number2;
    return result
    //return number1+number2;
}
//const result = addtwonumbers(3,4)
//console.log("Result:",result);

function loginusername(username="alok"){
    if (!username) {
        console.log("Please enter user name");
        return
    }
    return `${username} just logged in`
}
//console.log(loginusername())
////////

function calculatecartprice(val1,val2,...num1){// rest operator
    return num1
}
//console.log(calculatecartprice(200,400,500,600));// 200 and 400 went to val1 and val2 respectively

const user ={
    username :"Alok",
    price :100
}

function handleobject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleobject(user)
/*handleobject(//can pass object directly
    {
    username :"Alok",
    price :100
}
)*/
// passing array in function
const mynewarray = [100,200,300,400,500]

function returnsecondvalue(getarray) {
    return getarray[0]
}
//console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([100,200,300,400,500]));
