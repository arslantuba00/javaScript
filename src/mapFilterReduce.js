let cart = [
    {id:1,productName:"Filtre kağıdı",quantity:1,unitPrice:56},
    {id:2,productName:"Kahve Makinesi",quantity:1,unitPrice:8450},
    {id:3,productName:"Filtre kahve",quantity:3,unitPrice:45},
    {id:4,productName:"Kahve fincanı",quantity:6,unitPrice:8},
    {id:5,productName:"Çikolata",quantity:4,unitPrice:7},
    {id:6,productName:"Zencefilli kurabiye",quantity:2,unitPrice:27}
]

    //map
    cart.map(product => {
     console.log(product.productName + " : " + product.unitPrice * product.quantity)
    })


    //reduce
    let total = cart.reduce((acc,product) => acc + (product.unitPrice * product.quantity),0)
    console.log(total)

   //filter
   let quantityOver2 = cart.filter(product => product.quantity > 2)

   for (let i = 0; i < quantityOver2.length; i++) {
    console.log(quantityOver2[i].productName)
       
   }



 function addToCart(sepet) {
    sepet.push({id:7,productName:"Gofret",quantity:5,unitPrice:4})
}

addToCart(cart)
//console.log(cart[6].productName)
