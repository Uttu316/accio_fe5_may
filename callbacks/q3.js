const getUserData = (onSuccess, onFailure) => {
  console.log("Loading user Data");

  const userName = prompt("Enter username");
  setTimeout(() => {
    if (userName === "Karan") {
      const data = {
        userId: "33232",
        name: "Karan kumar",
      };
      onSuccess(data);
    } else {
      onFailure("No user Found");
    }
  }, 2000);
};

getUserData(
  (userData) => {
    console.log("UserData Fetched", userData);
  },
  (error) => {
    console.log(error);
  }
);
