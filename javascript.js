/* day3 task 4 */
console.log("Javascript assignment 1");
async function fetchUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();
    console.log(users,"users")
     users.map(user => console.log(user.name));
  } catch (error) {
    console.error("Error:", error.message);
  }
}

fetchUsers();
/* day3 task1*/
const price=[120,60,899];
const total=price.reduce((sum,price)=>sum+price,0);
console.log(total);

/* day3 task2*/

const students=[{name:"alwin",marks:85},{name:"kiran",marks:50},{name:"vijay",marks:88}];
const student=students.find(s=>s.name==="kiran");
console.log(student ? student.marks:"Not found");

/* day3 task3*/
function makeGreeter(greeting){
    return function(name){
        return `${greeting} ${name}`;
    };
}
console.log(makeGreeter("Hello")("Asha"));
