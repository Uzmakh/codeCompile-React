// ! Lecture-21
// ? Promises in JavaScript
// ? A Promise in Js ia an object that represents the eventual completion (or failure) of asynchronous operation and its resulting value.

// * Traditional Way of Writing a Promise
// * Syntax of a Promise
const myPromise = new Promise((resolve, reject) => {
    if (true) {
        resolve("")
    } else {
        reject("");
    }
}
);
myPromise.then((result) => {
    console.log(result);    //*we receive result here
}).catch(() => {
    
}).finally(() => {
    console.log("All Done!");
})


// ? Use Case of a Promise
function orderFood(isRestaurantOpen) {
    return new Promise((res, rej) => {
        console.log("Placing order...")
        setTimeout(() => {
            if (isRestaurantOpen) {
                res("Order Received!")
            } else {
                rej("Restaurant is Closed")
            }
        }, 5000);
    })
}
orderFood(true).then((res) => {
    console.log(res);
    return "Preparing food..."
}).then((res) => {
    console.log(res);
    return "Out for Delivery..."
}).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log("Error", error);
}).finally(() => {
    console.log("Thank you for using Food Panda!")
})

// ? Fetch API
fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
    console.log(response);
   return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("Error is HERE...", error);
})

// ? Promise.all()
// ? It is a method that takes an array of promises and returns a new promise, that resolves when all of them are resolved or rejects if any one fails.

const fetchUser1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json());
const fetchUser2 = fetch("https://jsonplaceholder.typicode.com/posts/2").then(res => res.json());
const fetchUser3 = fetch("https://jsonplaceholder.typicode/posts/3").then(res => res.json());


Promise.all([fetchUser1, fetchUser2, fetchUser3]).then((posts) => {
    // console.log("All posts loaded!!", posts);
    console.log("All posts loaded!!"),
        posts.forEach(post => console.log(post.title, post.body));
}).catch((err) => {
    console.log("Error fetching posts info!", err)
});

// ? This method allows us to handle multiple promises at once.It returns an array of results when all the promises are resolved. If any promise is rejected, then Promise.all immediately rejects with that error.


