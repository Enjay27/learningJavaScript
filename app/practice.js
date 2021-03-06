

let y = {
    a : 1,
    b : 2
};

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
    for (const two in yy[one])
        console.log(yy[one][two]);
}

console.log(1 + 2);

console.log(1 + 2 + '');

const elem = null;
let value = elem?.value;
console.log(value);

let nullValue = null;
let foo = nullValue ?? 'default';
console.log(foo);