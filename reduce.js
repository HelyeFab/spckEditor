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


const total = items.reduce((acc, el) => {
  return acc + el.price
});


console.log(total);

// -> [object Object]2001055001000





const myArr = [1, 2, 3, 4, 7, 5];


const sum = myArr.reduce((acc, el) => {
  return acc + el

});


console.log(`The sum is ${sum}`);

// -> 22


const numbers = [1, -1, 2, 4]

const newSum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(`This is the result from Mosh' example: ${newSum}`)



let data = [{
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]


let populationSum = data.reduce((acc, el) => {

  return el.country === 'China' ? acc : acc + el.pop;
  // if (el.country === 'China') {
  //   return acc
  // } else {
  //   return acc + el.pop
  // }

}, 0);

console.log(`Population sum not including China: ${populationSum}`);