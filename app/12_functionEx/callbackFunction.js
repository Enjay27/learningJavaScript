// higher-order function, HOF
let repeat = function (n, f) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}

// callback function
let logAll = function (i) {
    console.log(i);
};

repeat(10, logAll);

// callback function
let logOdds = function (i) {
    if (i % 2)
        console.log(i);
};

repeat(10, logOdds);

// send functional reference to higher-order function
repeat(10, function(i) {
   if (i % 3)
       console.log(i);
});


// HOF map with using callback function
let res = [1, 2, 3].map(function (item) {
    return item * 2;
});

console.log(res);

// HOF filter
res = [1, 2, 3].filter(function (item) {
    return item % 2;
});

console.log(res);

// HOF with arrow function
res = [1, 2, 3, 0, 5].reduce(function (acc, cur) {
    return acc > cur ? acc : cur;
});

console.log(res);

// with arrow function and ternary operator
res = [1, 2, 3, 0, 5].reduce((acc, cur) => acc < cur ? acc : cur);

console.log(res);