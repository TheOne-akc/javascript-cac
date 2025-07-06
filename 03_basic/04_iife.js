//Immeduately Invoked Fucntion Expression(IIFE)

// function chai() {
//     console.log('DB CONNECTED');
    
// }
// chai()

// using IIFE ()()
(function chai() {
    console.log('DB CONNECTED');
    
})();

(()=>{
    console.log(`DB CONNECT TWO`);
    
})();

((name)=>{
    console.log(`${name}DB CONNECT TWO`);
    
})("Alok is connected to ")

