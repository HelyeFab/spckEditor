

const items = [{
name: "Bike",
price: 100
},
{
name: "TV",
price: 200
},
{
name: "Album",
price: 10
},
{
name: "Book",
price: 5
},
{
name: "Phone",
price: 500
},
{
name: "Computer",
price: 1000
}
]

const myArr= [1,2,3,4,7,5]

console.log(myArr.length)

const total= items.reduce((acc,el) =>{
  return acc+el.price
  
  console.log(el.price)
});


const sum = myArr.reduce((acc,el)=>{
return acc+el

console.log(`Test ${el}`);
});

console.log(total);
console.log(`The sum is ${sum}`);