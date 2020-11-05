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


const inBasket = shopCart.filter(item => item.inBasket === true);

console.log(inBasket);
console.log(inBasket.length);