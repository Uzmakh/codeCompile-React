// ! Lecture -22
// ? async and await are the keywords in JavaScript, used to handle asynchronous operations in a cleaner and more readable way than promises.
// ? async makes a function returns a promise.
// ? await pauses the function execution until the Promise is resolved or rejected

//* Syntax of async-await
async function myFunc() {
  try {
    const result = await someAsyncTask(); //*it will take some time to complete
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Response Completed!")
  }
}
//* calling the function
myFunc();

// ? Real-World Example
async function fetchUserData() {
  try {
    console.log("Fetching user data...!");
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
      console.log(response);
      const post = await response.json();
      console.log("Posts loaded", post)
  } catch (error) {
      console.log("Error handling",error)
  } finally {
      console.log("Response Completed!")
  }
}
//* calling the function
fetchUserData();
