const people=[
    {
        age:46,name:'roger'
    },
    {
        age:99,name:'vinny'
    },
    {
        age:26,name:'don'
    },
    {
        age:74,name:'brendan'
    },
    
]
var orderPeople=function(peopele){
return people.sort((a,b)=>{
    return a.age-b.age>0
})
}
console.log(orderPeople(people));
