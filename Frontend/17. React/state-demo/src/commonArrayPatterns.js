// COMMON PATTERNS FOR UPDATING ARRAYS IN STATE
const shoppingCart = [
    {id: 1, product: "HDMI Cable", price: 4},
    {id: 2, product: "LED Screen", price: 28},
    {id: 3, product: "Speaker", price: 12},
]


// ADDING TO AN ARRAY
[...shoppingCart, {id: 4, product: "Wireless Keyboard", price: 20}]

// REMOVING AN ELEMENT
shoppingCart.filter((item) => item.id !== 2)


// UPDATING ALL ELEMENTS IN AN ARRAY
shoppingCart.map((item) => {
    return {
        ...item, 
        product: item.product.toLowerCase()
    }
})

// MODIFYING A PARTICULAR ELEMENT IN AN ARRAY
shoppingCart.map((item) => {
    if(item.id === 3){
        return {...item, price: 10.99}
    } else{
        return item
    }
})