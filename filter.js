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

const isValue = shopCart.filter(el => el.price < 50);

console.log(inBasket);
console.log(inBasket.length);
console.log(isValue);