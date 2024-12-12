const getTodos = async () => {
  //Fetch data from the jsonplaceholder api (user)
  const response = await fetch("http://jsonplaceholder.typicode.com/todos/1");

  //parse the data in a json formatt
  const users = await response.json();

  //return the data in a html format
  const usersList = users.map((parameter) => {
    return;
  });
};
