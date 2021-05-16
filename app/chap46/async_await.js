async function getUserByPostId(post_id) {

    const url = 'https://jsonplaceholder.typicode.com';

    const response_post = await fetch(`${url}/posts/${post_id}`);

    const json_post = await response_post.json();

    const response_user = await fetch(`${url}/users/${json_post.userId}`);

    const json_user = await response_user.json();

    return json_user;

}

const user = getUserByPostId(1);

user.then(console.log);
console.log(user);
