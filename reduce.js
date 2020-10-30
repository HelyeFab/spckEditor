const items = [{
    name: "Bike",
    price: 100
  },
  {
    name: "TV",
    price: 200
  }
]


const total = items.reduce((acc, el) => {
  console.log(`this the acc ${acc}`);
  console.log(`this the el ${el}`);
  return acc + el.price
},0);


console.log(total);



const myArr = [5, 2, 3];


const sum = myArr.reduce((acc, el) => {
   console.log(`this the acc ${acc}`);
   console.log(`this the el ${el}`);
  return acc + el

});


console.log(`The sum is ${sum}`);

