function one() {
    const username = "alok"
    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    //two()
    
}
//one()

/*if (true) {
    const username1 = "alok"
    if (username1==="alok") {
        const website = " youtube"
        console.log(username1 + "" + website);
    }
    //console.log(website);
    }
//console.log(username1);*/

/************************************* */
// a syntex of a function,even when  function is called before function it will work
//console.log(addone(5))
function addone(num) {
    
    return num+1
}
//a syntex of a function,in below code function is saved in a variable and if its called before function
//then it will throw error
addtwo(5)
const addtwo = function (num) {
    return num+1
}
