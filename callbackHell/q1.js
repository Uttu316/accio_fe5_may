function getUserData(onSuccess, onFailure) {
  console.log("Loading UserData");
  const name = prompt("Enter username");
  setTimeout(() => {
    const data = {
      userId: "4738437489",
      userName: "Ajay",
    };

    if (data.userName === name) {
      onSuccess(data);
    } else {
      onFailure("No user found");
    }
  }, 2000);
}

function getPosts(userId, onSuccess, onFailure) {
  console.log("Loading Posts for", userId);

  setTimeout(() => {
    if (userId) {
      const data = [
        {
          postId: "343434",
          caption: "Hello",
        },
        {
          postId: "3748374",
          caption: "Bonjor",
        },
      ];
      onSuccess(data);
    } else {
      onFailure("No Posts Found");
    }
  }, 2000);
}

function getComments(postId, onSuccess, onFailure) {
  console.log("Fetching Comments for post", postId);

  setTimeout(() => {
    if (postId) {
      const data = [
        {
          commentId: "243284",
          comment: "Hey",
        },
        {
          commentId: "434322",
          comment: "Bye",
        },
      ];
      onSuccess(data);
    } else {
      onFailure("No Comments available");
    }
  }, 2000);
}

getUserData(
  (userData) => {
    console.log("User Data", userData);
    const { userId } = userData;

    getPosts(
      userId,
      (posts) => {
        console.log("Posts recivied", posts);

        if (posts && posts.length) {
          posts.forEach((post) => {
            const { postId, caption } = post;

            getComments(
              postId,
              (comments) => {
                console.log("Comment for post", caption, comments);
              },
              (error) => {
                console.log(error);
              }
            );
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
