

const numbers = [100, 3, -3]

let aSum = 0
for (let n of numbers) 
    aSum += +n

console.log(typeof aSum); //-> number
console.log(`this is the result of aSum ${aSum}`); //-> this is the result of aSum -2




const simpleSum = ((arr) =>{
    let acc = 0;
    for (let n of arr)
        acc += n
    return acc
 
});


console.log(simpleSum([100, 3, -3])); //-> 100


function sum(arr) {
    let acc = 0;
    for (const n of arr) {
        acc += n;
    }
    return acc;
}

console.log(sum([100, 3, -3])); //-> 100