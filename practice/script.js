// const ul = document.getElementById('ul')
// ul.addEventListener("click", (event) =>{
//     if(event.target.tagName === "LI"){
//         console.log(event.target.textContent)
//     }
// })

// async function getUserAndPosts(userId) {
//     try{
//         const [userRes,postsRes] = await Promise.all([
//             fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
//             fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//         ]);
    
//     if(!userRes.ok || !postsRes.ok){
//         throw new Error("მონაცემების წამოღება ვერ მოხერხდა")
//     }
//     const [user,posts] = await Promise.all([
//         userRes.json(),
//         postsRes.json()
//     ])
//     return{user,posts};
// }catch(error){
//     console.error("დაფიქსირდა შეცდომა:", error.message)
// }
// }
// getUserAndPosts(1).then(data => console.log(data))

// const array = [1,2,3,4,5,6,7,8,9,10]
// const squares = array.map(x)
// function x(num){
//     return Math.pow(num,2)
// }

// let num = [1,2,3,4,5,6,7,8,9,10]
// let odd = num.filter(makeItOdd)
// function makeItOdd(num){
//     return num%2 ===1
// }
// console.log(odd)

// const colors = ["red","blue","yellow","green","purple"]