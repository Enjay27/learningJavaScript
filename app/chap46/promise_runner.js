function runner(gen, post_id) {
    const iter = gen(post_id);

    (function iterate({ value, done }) {
        if (done) {
            return value;
        }

        if (value.constructor === Promise) {
            value.then(data => iterate(iter.next(data)));
        } else {
            iterate(iter.next(value));
        }
    })(iter.next());
}

function* getLatestData(post_id) {

    const url = 'https://jsonplaceholder.typicode.com';

    let promise1 = createGetPromise(`${url}/posts/${post_id}`);

    const data1 = yield promise1;

    console.log(data1);

    let promise2 = createGetPromise(`${url}/users/${data1.userId}`)

    const data2 = yield promise2;

    console.log(data2);
}

function createGetPromise(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(`GET`, url);
        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) { 
                resolve(JSON.parse(xhr.response));
            } else {
                reject(new Error(xhr.status));
            }
        };
    });
}

runner(getLatestData, 2);
// log data