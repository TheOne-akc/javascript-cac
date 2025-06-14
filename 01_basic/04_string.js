const name ="Alok"
const count = 10
console.log(name + " age is " + count);
console.log(`My name is ${name} and my age is ${count}`)//bactix--sring inpolation

const gameName = new String('alok')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString =gameName.substring(0,2)
console.log(newString)
const new1String =gameName.slice(-2)// slice a string
console.log(new1String)

const newstring1= "alok  " +"kumar"
console.log(newstring1)
console.log(newstring1.trim())// trim extra space

const url = "https://alok@google.com"
console.log(url.replace('@','922@'))
console.log(url.includes("alok"))

console.log(gameName.split("l"))




