// used when you have a method that returns null and you want to avoid null checks
// uses a special object to represent the absence of an object rather than using null
// helps avoid null checks and make the code less error-prone
// can provide default behavior

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Bob";
  }
}

// adding only one extra class to handle the null case
class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }

  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id) {
  const user = users.find((user) => user.id === id);
  if (user === null) {
    return new NullUser();
  } else {
    return user;
  }
}

function printUser(id) {
  const user = getUser(id);

  console.log("Hello " + user.name);

  if (user.hasAccess()) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}

printUser(1);
