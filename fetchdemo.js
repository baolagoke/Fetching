let fetchRes = fetch("http://jsonplaceholder.typicode.com/todos/1");

fetchRes
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
