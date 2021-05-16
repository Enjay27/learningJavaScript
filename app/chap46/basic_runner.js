function* genDecFunc() {
    yield 1;
}

const genExpFunc = function* () {
    yield 1;
};

const obj = {
    *genObjMethod() {
        yield 1;
    }
};

class MyClass {
    *genClsMethod() {
        yield 1;
    }
}


function* genFunc() {
    yield 1;
    yield 2;
    yield 3;
}


function runner(gen) {
    const iter = gen();

    console.log('runner start');

    (function iterate({ value, done }) {

        console.log(value);
        console.log(done);

        if (done) {
            return value;
        }

        if (typeof value === 'number') {
            iterate(iter.next(value * 2));
        } else {
            iterate(iter.next('not a number : ' + value));
        }
    })(iter.next());
}

function* twoTimesNumber() {
    let y = yield 10
    console.log(y);
    y = yield y;
    console.log(y);
    console.log(yield 'hello');
}

runner(twoTimesNumber);