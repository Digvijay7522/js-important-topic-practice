// function booleantruthy(obj){
//    return Object.entries(obj)
// }
// console.log(booleantruthy({inStock: true, onSale: false, active: true})) // [['inStock',true],['onSale',false],['active',true]]
//it converts the object into an array of key-value pairs using Object.entries() method. 
// Each key-value pair is represented as a sub-array within the main array.

// const product = {
//     id: 101,
//     name: 'Wireless Mouse',
//     price: 799,
//     inStock: true,
//     category: 'electronics',
//     ratings: [4, 5, 3, 5, 4]
// }

const order2 = {
    id: 2,
    customer: {
        name: 'ravi'
        // no address at all
    }
}
console.log(order2.customer?.address?.pincode) // undefined