const myNums =[1,2,3]

// const myTotal=myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and Currval: ${currval}`);
//     return acc + currval;
// }, 0)

const myTotal = myNums.reduce( (acc , curr)=> acc +curr,0)

// console.log(myTotal);


const ShopingCart =[
    {
        itemName: 'js Course',
        price: 1999
    },
    {
        itemName: 'mobile app development Course',
        price:5999
    },
    {
        itemName: 'python Course',
        price: 999
    },
    {
        itemName: 'Data scince Course',
        price: 12000
    },
]
const priceToPay = ShopingCart.reduce((acc ,item )=> acc + item.price,0)

console.log(priceToPay);
