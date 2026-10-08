// task1
// const secretCode = Symbol()
// account = {
//     username:"andria",
//     [secretCode]:"1234"
// }
// console.log(account[secretCode])

// task2
// const product = Symbol()
// const computerbrand = Symbol()
// const name = Symbol()
// let user = {
//     [product]:"waffle",
//     [computerbrand]:"apple",
//     [name]:"andria"
// }
// console.log(`product: ${user[product]}, computer brand: ${user[computerbrand]}, name: ${user[name]}`)

// task3
// const username1 = Symbol("name")
// const username2 = Symbol("name")
// const account ={
//     [username1]:"andria",
//     [username2]:"nika"
// }
// if(account[username1] != account[username2]){
// console.log(`${account[username1]} ${account[username2]}`)
// }

// task4
// const score = Symbol()
// let game = {
//     title:"Enter the gungeon",
//     [score]:100
// }
// console.log(Object.keys(game))
// console.log(Object.getOwnPropertySymbols(game))

// task5
// const price = Symbol()
// const quantity = Symbol()
// const product = {
//     [price]:100,
//     [quantity]:2
// }
// let sum = product[quantity]*product[price]
// console.log(sum)

// task6
// let isAdmin = Symbol()
// const profile = {
//     name:"andria",
//     [isAdmin]:true
// }
// if(profile[isAdmin]==false){
//     console.log("profile is not admin")
// }
// else{
//     console.log("profile is indeed admin")
// }

// task7
// let id = Symbol()
// const user1 = {
//     name:"andria",
//     [id]:1
// }
// const user2 ={
//     name:"nika",
//     [id]:2
// }
// console.log(`user1 id: ${user1[id]},   user2 id: ${user2[id]}`)

// task8
// let app = Symbol()
// let playtime = Symbol()
// const settings = {
//     [app]:"youtube",
//     [playtime]:"∞"
// }
// let propertys = Object.getOwnPropertySymbols(settings)
// console.log(`app is: ${settings[propertys[0]]}, playtime is: ${settings[propertys[1]]}`)





// level 126:


// 1) შექმენი Symbol `secretCode`. შექმენი ობიექტი `account`, რომელსაც ექნება `username` და Symbol-ით შექმნილი თვისება. შეინახე საიდუმლო კოდი და გამოიტანე მისი მნიშვნელობა.

// 2) შექმენი სამი განსხვავებული Symbol და გამოიყენე ისინი ობიექტის თვისებებად. თითოეულ Symbol-ს მიანიჭე განსხვავებული მნიშვნელობა და გამოიტანე ყველა მნიშვნელობა.

// 3) შექმენი ორი Symbol ერთი და იმავე აღწერით `"name"`. გამოიყენე ისინი ობიექტის ორ თვისებად და შეინახე ორი განსხვავებული სახელი. დაამტკიცე, რომ ისინი განსხვავებული თვისებებია.

// 4) შექმენი ობიექტი `game`, რომელსაც ექნება ჩვეულებრივი თვისება `title` და Symbol-ის თვისება `score`. გამოიყენე `Object.keys()` და `Object.getOwnPropertySymbols()` და შეადარე მიღებული შედეგები.

// 5) შექმენი ობიექტი `product`, რომელსაც ექნება ორი Symbol-ის თვისება: ერთი შეინახავს ფასს, მეორე კი რაოდენობას. გამოითვალე და გამოიტანე ორივე მნიშვნელობის ნამრავლი.

// 6) შექმენი ობიექტი `profile`, რომელსაც ექნება ჩვეულებრივი თვისება `name` და Symbol-ის თვისება `isAdmin`. შეამოწმე კონსოლში, არის თუ არა მომხმარებელი ადმინისტრატორი.

// 7) შექმენი ორი ობიექტი, `user1` და `user2`. შექმენი ერთი Symbol `id` და ორივე ობიექტში გამოიყენე ის თვისების სახელად, მაგრამ მიანიჭე განსხვავებული მნიშვნელობები. გამოიტანე ორივე ობიექტის id.

// 8) შექმენი ობიექტი `settings`, რომელსაც ექნება ორი Symbol-ის თვისება. `Object.getOwnPropertySymbols()`-ის გამოყენებით მიიღე ორივე Symbol, შემდეგ ამ Symbol-ების გამოყენებით გამოიტანე მათი მნიშვნელობები.