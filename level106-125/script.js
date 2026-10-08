// class Phone{
//     #pin
//     /**
//      *
//      */
//     constructor(pinn) {
//         this.#pin = pinn        
//     }

//     checkPing(pinn){
//         if(pinn == this.#pin){
//             return "pin სწორია"
//         }
//         else{
//             return "pin არასწორია"
//         }
//     }
// }

// const phoner = new Phone("1234")
// console.log(phoner.checkPing(123))


// class Product{
//     constructor(title,price) {
//         this.title = title
//         this.price = price
//     }

//     get PriceCheck(){
//         return `ფასი: ${this.price}`
//     }

//     set PriceSet(amount){
//         if(amount >0){
//             this.price = amount
//         }
//         else{
//            console.log("0ზე ნაკლები რიცხვი ვერ იქნება")
//         }
//     }

// }

// const prod = new Product(`vashli`,13)
// console.log(prod.PriceCheck)
// prod.PriceSet = -19


// class YoutubeChannel{
//     constructor(video,title) {
//         this.video = video
//         this.title = title
//     }
//     #checkVideo(){
//         if(this.video != null){
//             return true
//         }
//         else{
//             return false
//         }
//     }
    
//     #checkTitle(){
//         if(this.title != null){
//             return true
//         }
//         else{
//             return false
//         }
//     }

//     #publishVideo(){
//         if(this.#checkVideo() == true && this.#checkTitle() == true){
//             return true
//         }
//         else{
//             return false
//         }
//     }

//     uploadVideo(){
//         if(this.#publishVideo() == true){
//             return `თქვენი ვიდეო გაეშვა`
//         }
//         else{
//             return "sorry bum"
//         }
//     }
// }

// const youtube = new YoutubeChannel("howToBasic")
// console.log(youtube.uploadVideo())


// const prom = new Promise((resolve,reject) =>{
//     let serverStatus = 500;
//     setTimeout(() =>{
//         if(serverStatus ==200){
//             resolve("Server works propperly");
//         }
//         else{
//             reject("server error");
//         }
//     }, 2000);
// });

// prom
//     .then((message) =>{console.log(`this was message: ${message}`)})
//     .catch((error) =>{console.log(`this was message: ${error}`)})


// const pouch = new Promise((resolve,reject) => {
//     const coinst = 250;
//     setTimeout(()=>{
//         if(coinst>=200){
//             resolve("You can buy this item");
//         }
//         else{
//             reject("F off");
//         }
//     },2000);
// });

// pouch
//     .then((message) =>{console.log(`your message is: ${message}`)})
//     .catch((error) =>{console.log(`your message is: ${error}`)})


// async function GetApi(api){
//     try{
//         let response = await fetch(api);
//         if(!response.ok){
//             throw new Error("something went wrong")
//         }
//         let products = await response.json()
//         for(let product of products){
//             console.log(product.title)
//         }
//     }catch{
//         console.error("operation was a failure")
//     }
// }

// GetApi("https://jsonplaceholder.typicode.com/comments")
// GetApi("https://jsonplaceholder.typicode.com/albums")



// async function GetApiBoi(appi) {
//     try{
//         let response = await fetch(appi)
//         if(!response.ok){
//             throw new Error("something went wrong")
//         }
//         let users = await response.json()
//             console.log(`name: ${users.name}, username: ${users.username}, email: ${users.email} `)
//     }
//     catch{
//         console.error("operation was a failure")
//     }
// }

// GetApiBoi("https://jsonplaceholder.typicode.com/users/1")


// async function getProducts(link) {
//     try{
//         const response = await fetch(link)
//         if(!response.ok){
//             throw new Error("something went wrong")
//         }
//         const products = await response.json()
//         for(let product of products){
//             console.log(`product title: ${product.title}`)
//         }
//     }
//     catch{
//         console.error("operation was a failure")
//     }
// }

// getProducts("https://fakestoreapi.com/products")


// async function sumArray() {
//     const promise = new Promise((resolve)=>{
//         resolve([1,2,3,4,5,6,7,8,9,10]);
//     });
//     const numbers = await promise;

//     let sum = 0;
//     for(const number of numbers){
//         sum+=number;
//     }
//     console.log(sum)
// }

// sumArray()


// async function getWord(){
//     const prom = new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Javascript")
//         },1000)
//     });
//     const size = await prom
//     console.log(size.length)
// }

// getWord()

// async function sumProm() {
//     const prom1 = new Promise((resolve)=>{
//         resolve(10)
//     })
//     const prom2 = new Promise((resolve) =>{
//         resolve(20)
//     })

//     let a = await prom1
//     let b = await prom2
//     const sum = a+b
//     console.log(sum)
// }
// sumProm()


// async function API(link) {
//     try{
//         const products = await fetch(link)
//         if(!products.ok){
//             throw new Error("something went wrong")
//         }
//         const users = await products.json()
//         for(let i =0; i<=5;i++){
//             console.log(`this is ${i}: ${users[i].name} lives in ${users[i].address.city}`)
//         }
//     }
//     catch{
//         console.error("something went wrong")
//     }
    
// }

// API("https://jsonplaceholder.typicode.com/users")


// function CreateCounter(){
//     let count = 0
//     let step = 1
//     return function(){
//         count +=step
//         step++
//         return count
//     }
// }

// const func = CreateCounter()
// console.log(func())


// function bankAccount(money){
//     let balance =1000
//    return function depositOR(money){
//         if(Math.floor(Math.random()<0.5)){
//             balance+=money
//             return balance
//         }else{
//             balance-=money
//             return balance
//         }
//     }
// }
// const bank = bankAccount()
// console.log(bank(500))

// let response = await fetch("https://jsonplaceholder.typicode.com/users")
// response = await response.json()
// for(let user of response){
//     console.log(user.name)
// }

// greetUser();

// function greetUser() {
//   console.log("Welcome back!");
// }


// class Person{
//     constructor(name,age) {
//         this.name = name
//         this.age = age        
//     }
// }

// let per1 = new Person("andria",16)
// let per2 = new Person("nika",20)
// function introduce(city){
//     return `Hallo, ich bin ${this.name}, ich ${this.age} alt, ich wohne in ${city}`
// }

// console.log(introduce.call(per1,"tbilisi"))
// console.log(introduce.call(per2,"xobi"))


// const btn = document.getElementById("btn")
// const div = document.getElementById("div")
// btn.addEventListener('click',()=>{
//     event.stopImmediatePropagation()
//     console.log("the child has been clicked")
// })

// div.addEventListener('click',() =>{
//     console.log("the parent has been clicked")
// })

// const btn = document.getElementById("btn")
// btn.addEventListener("click",(e)=>{
//     console.log(e.target)
//     console.log(e.currentTarget)
// })

// const secret = Symbol("secretCode")
// const myAccount = {
//     username:"turiUser",
//     [secret]:"Andria2009!"
// }


// console.log(myAccount[secret])

const priceSymbol = Symbol("price")
const quantitySymbol = Symbol("quantity")

const product = {
    [priceSymbol]:50,
    [quantitySymbol]:5
}

const total = product[priceSymbol]*product[quantitySymbol]
console.log(total)