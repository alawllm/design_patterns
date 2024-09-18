class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name) {
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    // return the builder back
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    // return the builder back
    return this;
  }
  setAddress(address) {
    this.user.address = address;
    // return the builder back
    return this;
  }

  build() {
    return this.user;
  }
}
// better method - with JS defaulting to undefined - after2.js
let user = new UserBuilder("Bob")
  .setAge("10")
  .setPhone("111111")
  .setAddress("MainStreet1")
  .build();
console.log(user);
