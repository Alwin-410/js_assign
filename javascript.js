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