

const product = {
    id: 101,
    name: 'Wireless Mouse',
    price: 799,
    inStock: true,
    category: 'electronics',
    ratings: [4, 5, 3, 5, 4]
}

const {id,...extra}=product
console.log(id) // 101
console.log(extra) // {name: 'Wireless Mouse', price: 799, inStock: true, category: 'electronics', ratings: [4, 5, 3, 5, 4]}    


// Q1. Destructure 'name' and 'price' from product in one line.
const {name,price}=product
console.log(name,price) // Wireless Mouse 799
console.log([name,price]) // ['Wireless Mouse', 799]

// Q2. Destructure 'category' but rename it to 'productCategory'.

const {category:productCategory} = product
console.log(productCategory) // 'electronics'

// Q3. Add a new key 'discount: 10' to product WITHOUT mutating the
//     original object (use spread) — store result in a new variable.

const product2={...product,discount:10}
console.log(product2)// {id: 101, name: 'Wireless Mouse', price: 799, inStock: true, category: 'electronics', ratings: [4, 5, 3, 5, 4], discount: 10}



// destructuring the array to get first two ratings and rest of the ratings in another array

const ratings = [4, 5, 3, 5, 4]

const [firstRating, secondRating, ...restRatings] = ratings
console.log(firstRating) // 4
console.log(secondRating) // 5
console.log(restRatings) // [3, 5, 4]

 //Q4. Write a function getAverageRating(product) that calculates the
//     average of product.ratings using reduce().

function getAverageRating(...ratings){// here we are using rest parameter to accept an indefinite 
                                         // number of arguments as an array
    const sum = ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / ratings.length;
}
    console.log(getAverageRating(...ratings)) // 4.2 here we are using spread operator to pass the ratings
                                            //  array as individual arguments to the function getAverageRating.


//Q5. Write a function that takes any object and returns an array
//     of its keys that have a truthy boolean value.
//     e.g. isBooleanTrue({inStock: true, onSale: false, active: true})
//     should return ['inStock', 'active']

function booleantruthy(obj){
   return Object.entries(obj).filter(([key,value])=>value===true).map(([key,value])=>key)
}
console.log(booleantruthy({inStock: true, onSale: false, active: true}))// ['inStock', 'active']

// Q6. Given the product object, remove the 'ratings' key and keep
//     everything else, using object destructuring + rest.

const {ratings,...extraFields}=product
console.log(ratings) // [4, 5, 3, 5, 4]
console.log(extraFields) // {id: 101, name: 'Wireless Mouse', price: 799, inStock: true, category: 'electronics'}

   //  Safely access order.customer.address.pincode without crashing,
//     even if 'address' or 'pincode' doesn't exist. Use optional chaining.

const order2 = {
    id: 2,
    customer: {
        name: 'ravi'
        // no address at all
    }
}
console.log(order2.customer?.address?.pincode) // undefined


const orders = [
    { id: 1, amount: 500, status: 'delivered' },
    { id: 2, amount: 1200, status: 'pending' },
    { id: 3, amount: 300, status: 'delivered' },
    { id: 4, amount: 950, status: 'cancelled' },
    { id: 5, amount: 70, status: 'pending' }
]


//Q9. Get the total amount of ALL orders using reduce().

 const totalAmount=orders.reduce((total,order)=>{
    return total+order.amount
}, 0)

console.log(totalAmount) // 3650

//Q10. Get only the orders that are 'delivered' using filter().

const deliveredOrders = orders.filter(order=>order.status==='delivered')
console.log(deliveredOrders)//
// [ { id: 1, amount: 500, status: 'delivered' },
//   { id: 3, amount: 300, status: 'delivered' } ]



// Q11. Get an array of just the order IDs using map().
const orderIds = orders.map(order => order.id);
console.log(orderIds) // [1, 2, 3, 4, 5]


 //Q12. Find the first order with amount greater than 1000 using find().
const highValueOrder = orders.find(order=>order.amount>1000) 
console.log(highValueOrder) // { id: 2, amount: 1200, status: 'pending' }


// Q13. Check if ANY order is 'cancelled' using some().

const orderCancelled=orders.some(order=>order.status==='cancelled')
console.log(orderCancelled) // true


const greaterThan100=orders.every(order=>order.amount>100)

console.log(greaterThan100) // true
