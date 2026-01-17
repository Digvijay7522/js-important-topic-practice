const root=document.getElementById('app')

const fromBox=document.createElement('input')
fromBox.type='text';
fromBox.value='USD';
fromBox.placeholder='USD';
fromBox.style.margin='10px'

const toBox=document.createElement('input')
toBox.type='text';
toBox.value='INR';
toBox.placeholder='INR';
toBox.style.margin='10px'

const swapButton=document.createElement('button')
swapButton.innerText='swap';
swapButton.style.cursor='pointer'

root.append(fromBox,toBox,swapButton)

swapButton.addEventListener('click', function(){
  [fromBox.value ,toBox.value]=[toBox.value,fromBox.value]
})