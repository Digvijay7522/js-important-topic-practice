
//  ==Q- add the 18% gst in every product price and find that product which price more than 4000

const productList=[
    {laptop:'dell', price:40000},
    {mobile:'redmi',price:20000},
    {
        mouse:'logitech',price:400
    }
]

// map and filter using normal function


function increasePrice(productList){
return productList.map((item)=>{

   return {...item,pricewithtax:item.price + (item.price*18)/100}
}
)}
const finallistprice =increasePrice(productList)
console.log(finallistprice)

function search(list){
   return  list.filter(item=>
   {
       return   item.price>=4000
         
   }
   )
}

console.log(search(productList))

//  map and filter using arrow function

const increasePrice=(productList)=>
 productList.map((item)=>(

   {...item,pricewithtax:item.price + (item.price*18)/100}

))
const finallist =increasePrice(productList)
console.log(finallist)



const search=(list)=>
     list.filter(item=>
   
        // ( item.price>=4000) we can use it instead of bellow line
        { return item.price>=4000}

         
   
   )


console.log(search(productList))