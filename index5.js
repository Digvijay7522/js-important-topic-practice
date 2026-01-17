const assets = [
    { id: 101, name: "MacBook Pro", category: "Electronics" },
    { id: 102, name: "Office Chair", category: "Furniture" },
    { id: 103, name: "Dell Monitor", category: "Electronics" }
];
  
// using normal function 

const returnAsset=(list)=>{
    for(let i=0;i<list.length;i++){
        if(list[i].id==102)
        {
            // list[i].name='economy chair'
            return list[i]
        }
    }
     return "no data found"
}
console.log(returnAsset(assets))


// const findAsset=(list)=>{
//    return list.find(e=>{return e.id==101})
//     // return list.find(e=> e.id==101) it is working
// }
// console.log(findAsset(assets))

// Q======find and update=======


const findAndUpdateAsset=(list)=>{
    for(let i=0;i<list.length;i++){
        if(list[i].id==102)
        {
            list[i].name='economy chair'
            return list[i]
        }
    }
     return "no data found"
}
console.log(findAndUpdateAsset(assets))