
// Q- add user frst name and last name from user array

const users=[
{firstName:"digvijay", lastName:"bhardwaj", age:27},
{firstName:"ravi", lastName:"chauhan", age:28},
{firstName:"mohan", lastName:"roy", age:23},

]
// through normal function
function fullname(users){
    return users.map(person=>person.firstName+" "+person.lastName)
}
console.log(fullname(users))

// through arrow function

 fullname=(users)=>
    users.map(person=>person.firstName+" "+person.lastName)

console.log(fullname(users))