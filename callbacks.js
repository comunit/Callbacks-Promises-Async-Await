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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000)
}


createPost({ title: 'Post Three', body: 'this is post three'}, getPosts);