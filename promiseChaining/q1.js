function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("A");
    }, 2000);
  });
}
function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("B");
    }, 2000);
  });
}
function getComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("C");
    }, 2000);
  });
}

getUserData()
  .then((userData) => {
    console.log(userData);
    return getPosts(userData);
  })
  .then((posts) => {
    console.log(posts);
    return getComments(posts);
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((e) => {
    console.log(e);
  });
