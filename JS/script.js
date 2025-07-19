// ! Some General Checkings

let x = 1;

function func() {
    console.log(x); // ?

    var x = 2;
}

func();    //undefined



// ? checking array matching
console.log([] == ![]);   //true