// swap two number withought using tem var

/**let a=5

// bellow line we need to add the semicolon 
let b=10;  

[a,b]=[b,a]

console.log(a,b)*/



// it working code 

/**a=a+b
b=a-b
a=a-b

console.log(a)
console.log(b)*/


// now i am going to js ui programm

const fromBox=document.getElementById('from')
const swap=document.getElementById('swap-btn')

const toBox=document.getElementById('to')

swap.addEventListener('click', function(){
    [fromBox.value ,toBox.value]=[toBox.value,fromBox.value]
   
})

