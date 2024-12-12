const onClickPeople = async () => {
  //Fetch data from the jsonplaceholder api (user)
  const response = await fetch("http://jsonplaceholder.typicode.com/users");

  //parse the data in a json formatt
  const users = await response.json();

  // grab the ul list id userScript the variable below gets inserted into the li
  const userList = document.getElementById("userScript");

  // create the element li that is a child of the ul and than append it
  // textContext is a method that return text !!!
  users.map((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} - ${user.email}`;
    userList.appendChild(li);
  });
};
