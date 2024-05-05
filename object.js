// // Create
// const person ={
//     // key:value pair
//     name:'Snigdha',
//     age: 10,
//     isMale: true,
// }

// // Read Object.key
// console.log(person.name);

// // update
// person.salary = 1000;
// person.name = "Snigdha Adhikari"
// console.log(person)

// // delete
// delete person.salary;


const car = {
    name: "BYD",
    model: "Atto 3",
    date: 2011,
    age: () =>{
        return (2024 - car.date)
    }
}
console.log(car.age());

