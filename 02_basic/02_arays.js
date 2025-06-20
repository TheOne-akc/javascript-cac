const marvel_heores = ["thor","Ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

//marvel_heores.push(dc_heroes)// publish existing array ,an array inside another array
//console.log(marvel_heores)

//const all_heroes = marvel_heores.concat(dc_heroes)// merget to arrays and give new arrays as output
//console.log(all_heroes)

//const all_new_heros = [...dc_heroes,...marvel_heores]// spread method:can merge n number of arrays and give new array as output
 
//console.log(all_new_heros)

const a_new_array = [1,2,3,[4,5,6],6,7,[7,8,[9,44,66,[56,66,],78]]]
const sec_new_array = a_new_array.flat(Infinity)// spread all element in to a single array
//console.log(sec_new_array);

console.log(Array.isArray("ALok","Kumar","Chaturvedi"));// tells if the element is a array or not
console.log(Array.from("Chaturvedi"));// converts into array
console.log(Array.from({name:"Alok"}));// intersting 

let score1= 100
let score2 = 200
let score3= 300
console.log(Array.of(score1,score2,score3));// merge elements into new array







