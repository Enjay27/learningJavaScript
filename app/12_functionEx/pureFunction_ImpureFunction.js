let count = 0;

// pure function
let pureIncrease = function (n) {
    return ++n;
}

let increased = pureIncrease(0);
console.log(increased);

increased = pureIncrease(increased);
console.log(increased);


// impure function
let impureIncrease = function (n) {
    return ++count;
};

impureIncrease();
console.log(count);

impureIncrease();
console.log(count);

