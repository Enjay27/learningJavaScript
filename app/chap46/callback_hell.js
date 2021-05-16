function getUserByPostId() {

    const url = 'https://jsonplaceholder.typicode.com';

    // API 1
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            successCallback(JSON.parse(xhr.response));
        } else {
            failureCallback(xhr.status);
        }
    };
}
getUserByPostId(1);
