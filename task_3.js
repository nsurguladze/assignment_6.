
// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს მომხმარებლების მასივს და დააბრუნებს დალაგებულ მასივს მომხმარებლების ასაკის ზრდადობის მიხედვით. მაგ, ჩავთვალოთ რომ გვაქვს [{name: 'Lasha', age: 30}, {name: 'Saba', age: 20}]. ფუნქციამ უნდა დააბრუნოს [{name: 'Saba', age: 20}, {name: 'Lasha', age: 30}]. შეგიძლიათ გამოიყენოთ sort() ფუნქცია.


let students = [{name: 'Lasha', age: 30}, {name: 'Saba', age: 20}];

   students.sort((a, b) =>{
    console.log(a.age - b.age);
   })

   students.forEach((e) => {
    console.log(`${e.name} ${e.age}`);
});