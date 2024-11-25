let search_input = document.getElementById("search")
let search_button = document.getElementById("search_button")
fetch("https://api.github.com/users")
  .then((response) => response.json())
  .then((usersdata) => {
    console.log(usersdata);
    console.log(usersdata[0].login);
    
  })
  .catch((error) => console.error("Error:", error));


