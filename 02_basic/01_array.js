//array
const myArr = [0,1,2,3,4,"alok"]
//console.log(myArr[5])

const myHeros = ["shaktiman","ironman"]
const myArr2 = new Array(1,2,3,4)
//console.log(myArr[1])

//Array methods
//myArr.push(6)//  insert element in start
//myArr.pop()// delete last element
//myArr.unshift(9)// insert element in start 
//myArr.shift()// delete first element of array

//console.log(myArr.includes(2))// tell if the element is present in the array or not
//console.log(myArr.indexOf(3))// if element will be present then it will provide index and if not then "-1"

//const newArr = myArr.join()// change array to string

//console.log(myArr)
//console.log(newArr)
//console.log(typeof newArr)

console.log(myArr)

const myA1 = myArr.slice(1,3)// original array remain same,second end element not included
console.log("A",myA1)
console.log("My Arr",myArr)

const myA2 = myArr.splice(1,3)// divide origina array in two parts, edd element are included
console.log("B",myA2)
console.log("My Arr",myArr)