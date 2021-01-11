function wrapValue(tempValue){
  let byTwo = 2
  let newResult= null
  
 return function multiply (tempValue){
   

newResult  = tempValue  * byTwo 
}


}

let tempValue = 5;

console.log( wrapValue(tempValue));





