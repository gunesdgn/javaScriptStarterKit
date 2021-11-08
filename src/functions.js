<<<<<<< HEAD
function addToCart(quantity, productName ="elma"){
console.log("sepete eklendi. : "+ quantity + " adet :" + productName)
}

let sayHello = () =>{
    console.log("Hello World !")
}

let sayHello2 = function(){
    console.log("Hello World 2 !")    
}

addToCart("Portakal",10);
sayHello();
sayHello2();

function addToCart2(productName,quantity,unitPrice)
{
    
}

addToCart2("elma",5,10)
addToCart2("Armut",10,20)
addToCart2("Patates",6,8)

let product1 = {productName:"Elma", unitPrice:10,quantity:5}


function addTocart3(product){

    console.log("Ürün : " + product.productName +" Adet : "+ product.quantity +" Fiyat : "+ product.unitPrice)
}

addTocart3(product1);

function addToCart4(x){
    console.log(x)
}

let products=[
    {productName:"Elma",unitPrice:6,quantity:10},
    {productName:"Armut",unitPrice:3,quantity:120},
    {productName:"Karpuz",unitPrice:76,quantity:11}
]

addToCart4(products);

function add(...numbers){ // rest operatörü değişen başına üç nokta konur... ve herzaman parametlerin sonuna yazılır.
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
       total = total+numbers[i];
    }
    console.log(total)
}

add(20,30)

let numbers = [30,10,40,50]
console.log(...numbers) // burada sayıları diziden çıkarıp  ayırdık.
console.log(Math.max(...numbers)) // burada en büyük sayıyı bulmak için array içindeki sayıları ... rest operatörü ile ayırdık.

let [icAnadolu,Marmara] = [
    {name:"iç anadolu",population:"10M"} , 
    {name :"marmara", population:"20"}
]

console.log(icAnadolu)
console.log(Marmara)
=======
function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " 
    + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2();

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut", 2, 20)
addToCart2("Limon",3,15)

let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}


addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(bisey,...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30, 40)
//add(20,30, 40, 50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
= {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
>>>>>>> 356709dd1c8d89a8fd8b4505618f36d28c557a25
