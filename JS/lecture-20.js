document.getElementById("grandParent").addEventListener('click', () => {
    console.log("GrandParent Clicked!")
});
// ? this is the example of event delegation as whether we click on any of the divs, event will trigger

document.getElementById("parent").addEventListener('click', () => {
    console.log("Parent Clicked!")
});
document.getElementById("child").addEventListener('click', () => {
    console.log("Child Clicked!")
});
// ? when we click on child, event bubbling happens and the divs above it will be triggered also.
// ? here parent is the child of grandparent, so on clicking it, grandparent will be triggered

// ? This all happens in case of Nested Divs
// ? Example for Event Delegation

document.getElementById("menu").addEventListener('click', (e) => {
    // console.log(e);
    // console.log("Item is clicked!");
    console.log("Clicked", e.target.textContent);
});








