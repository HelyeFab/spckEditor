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

// ! 05 November

const shopCart = [{
  item: "name",
  price: 50,
  inBasket: true
},
{
  item: "name2",
  price: 40,
  inBasket: true
},
{
  item: "name3",
  price: 50,
  inBasket: false
}
];



const itemInBasket = shopCart.filter(item => item.inBasket === true);
const totalShop = itemInBasket.reduce((acc, el) => (acc + el.price), 0);
const cartAverage = totalShop / itemInBasket.length ;

console.log(itemInBasket);
console.log(totalShop);
console.log(cartAverage);

// const myNumbers = [3, 5, 7]

// const average = myNumbers.reduce((acc, el) => (acc + el))/ myNumbers.length

// console.log(average);



// const cart = [{
//     name: "Bike",
//     price: 1000
//   },
//   {
//     name: "TV",
//     price: 2000
//   }
// ]

// const cartTotal = cart.reduce((acc, el) => acc + el.price, 0);

// console.log(cartTotal);