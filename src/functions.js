function addToCart(quantity,productName="Çilek") {
    console.log("Sepete " + productName + " " + quantity+ " adet eklendi.")
}

addToCart(13)
addToCart(45,"Elma")
addToCart(30,"Yumurta")
addToCart(2,"Karpuz")

let sayHello = ()=>{
    console.log("Hello World")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}
sayHello2()