

// Q=====search product through title=======

const product = [
    { id: 101, title: "Apple iPhone 15", price: 80000 },
    { id: 102, title: "Samsung Galaxy S23", price: 75000 },
    
    { id: 103, title: "Apple MacBook Pro", price: 120000 },
    
    { id: 104, title: "Apple Watch Series 9", price: 45000 }
];

function matchWord(list,input){
    return list.filter(item=>{
      const title=item.title.toLowerCase()
      const query=input.toLowerCase()
     return  title.includes(query)
    })
}
console.log(matchWord(product,"apple"))



// Q=======count admin and user========

const users = [
    { name: "Rahul", role: "admin" },
    { name: "Amit", role: "user" },
    { name: "Suresh", role: "admin" },
    { name: "Priya", role: "user" },
    { name: "Deepak", role: "admin" }
];

const countRole=(list)=>
    list.reduce((acc,curr)=>{
        if(curr.role==="admin"){
             acc.admin++
        }
      
      else{acc.user++} 

      return acc
    },{admin:0,user:0})

    console.log(countRole(users))


// Q======find maximum price=========

const products = [
    { title: "Smart Watch", price: 5000 },
    { title: "iPhone 15", price: 80000 },
    { title: "AirPods", price: 20000 },
    { title: "MacBook", price: 120000 }
];

const findMaxi=(list)=>
 list.reduce((acc,curr)=>{
    if(acc.price < curr.price){
        return curr
    }
    return acc
})
console.log(findMaxi(products))