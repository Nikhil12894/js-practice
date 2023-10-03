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
