

let y = {
    a : 1,
    b : 2
};

console.log("y.a" + y.a);
console.log("y['a']" + y['a']);

let yy = [
    {
        a : 1,
        b : 2
    },
    {
        a : 5,
        b : 6
    }
];

for (const one in y) {
    console.log(y[one]);
}

for (const one in yy) {
    for (const two in yy[one]){
        console.log(yy[one][two])
    }
}

for (const e of yy) {
    console.log("e : " + e + " " + e.a);
    for (const m in yy) {
        console.log("m : " + m);
    }
}

console.log(1 + 2);

console.log(1 + 2 + '');

//Optional Chaining Operator
const elem = null;
let value = elem?.value;
console.log(value);

//nullish coalescing
let nullValue = null;
let foo = nullValue ?? 'default';
console.log(foo);

let add = (x, y) => x + y;
console.log("add(3,4) : " + add(3,4));

let printFoo = () => console.log("foo");
printFoo();

function funcAdd(x, y) {
    return x + y;
}

console.log(funcAdd(2.5,"3"));
let groupFunc = (function () {
    let a = 3;
    let b = 5;
    return a * b;
}());
console.log(groupFunc);

groupFunc = (function () {} );
groupFunc();

