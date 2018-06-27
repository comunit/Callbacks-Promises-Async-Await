const posts = [
  {title: 'Post one', body: 'this is body post one'},
  {title: 'Post two', body: 'this is body post two'}
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {

  return new Promise((resole, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resole();
      } else {
        reject('Error: something went wrong');
      }
    }, 2000)
  })
}


// createPost({ title: 'post three', body: 'this is post three' })
// .then(getPosts)
// .catch(err => console.log(err));

// async / await

// async function init() {
//   await createPost({ title: 'post three', body: 'this is post three' });
//   getPosts();
// }

// init();

// async/await/fetch
async function fetchUsers() {
  const res = await fetch ('http://jsonplaceholder.typicode.com/users');

  const data = await res.json();
  console.log(data);
}

fetchUsers();


// promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10; 
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(res =>res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));


