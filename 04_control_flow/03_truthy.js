const usermail = []

if (usermail) {
    console.log("got user mail");
    
} else {
    console.log("do not have user mail");
}

//falsy values
// false,0,-0,BigInt 0n,"",null,undefined,Nan
//truthy value
//  "0" , 'false', " ",[],{}, function(){},

// if (usermail.length === 0) {
//     console.log("Array is empty");
// }

const empty= {}
if (Object.keys(empty).length===0) {
    console.log("Object is empty");
    
}

//Nullish coalescing Operator (??): null,undefined

let val1;
// val1=5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
//val1 = null ?? 10 ?? 20

console.log(val1);

//Terniary Operator

// condition ? true:false

const iceteaprice = 100
iceteaprice >=80 ? console.log("less than 80"): console.log("more than 80");

