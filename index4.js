const assets = [
    { id: 1, name: "MacBook Pro", price: 150000 },
    { id: 2, name: "Office Chair", price: 5000 },
    { id: 3, name: "Dell Monitor", price: 12000 },
    { id: 4, name: "iPhone 15", price: 80000 }
];

const totalPrice=(list)=>{
    let total=0;
for(let i=0; i<list.length;i++){
  return  total=total+list[i].price

}}

console.log(totalPrice(assets))