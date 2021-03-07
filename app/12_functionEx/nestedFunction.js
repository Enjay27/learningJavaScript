function outer() {
    let x = 1;

    //nested
    function inner() {
        let y = 2;
        console.log(x + y);
    }

    inner();
}

outer();

let outer2 = function() {
    let x = 1;

    //nested
    function inner() {
        let y = 2;
        console.log(x + y);
    }

    inner();
}

outer2();