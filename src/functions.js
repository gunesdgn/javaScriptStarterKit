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