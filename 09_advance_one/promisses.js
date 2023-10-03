const promisOne = new Promise((resolve, reject) => {
  //Do an async task
  //DB call, networkCall
  setTimeout(() => {
    console.log("async task complete");
    resolve();
  }, 1000);
});

promisOne.then(() => {
  console.log("promise consume");
});

new Promise((resolve, reject) => {
  //Do an async task
  //DB call, networkCall
  setTimeout(() => {
    console.log("async task 2 complete");
    resolve();
  }, 1000);
}).then(() => console.log("promise complete 2"));

const promisThree = new Promise((resolve, reject) => {
  //Do an async task
  //DB call, networkCall
  setTimeout(() => {
    console.log("async task 3 complete");
    resolve({ username: "NK", email: "test@test.com" });
  }, 1000);
});

promisThree.then((user) => {
  console.log("promise consume", user);
});

const promisFour = new Promise((resolve, reject) => {
  //Do an async task
  //DB call, networkCall
  setTimeout(() => {
    console.log("_________________________________________________");
    let error = true;
    if (!error) {
      resolve({ username: "NK", email: "test@test.com" });
    } else {
      reject("ERROR : somthing went rong");
    }
  }, 1000);
});

promisFour
  .then((user) => {
    console.log("promise consume", user);
    return user.username;
  })
  .then((userName) => {
    console.log("promise consume userName", userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() =>
    console.log("Finaly : the promise is either resolved or rejected")
  );

const promisFive = new Promise((resolve, reject) => {
  //Do an async task
  //DB call, networkCall
  setTimeout(() => {
    console.log("_________________________________________________");
    let error = true;
    if (!error) {
      resolve({ username: "NK", password: "wdr3123" });
    } else {
      reject("ERROR : JS went rong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promisFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
//     const data = await response.json(); // used await
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getAllUsers();

fetch("https://api.github.com/users/nikhil12894")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
