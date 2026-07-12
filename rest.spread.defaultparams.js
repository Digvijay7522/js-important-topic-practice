// default params means default parameter values are the values that are used if no value or undefined is passed.
function greet(name,greeting='hello'){
    console.log(`${greeting} ${name}`)

}
greet("ravi",'hi')
greet("ravi") // here we are not passing greeting value so it will take default value 'hello'