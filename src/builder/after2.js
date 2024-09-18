class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  // optional parameters in JavaScript
  // if values not present, default to undefined
  constructor(name, { age, phone, address }) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let user = new User("Bob", { age: 10, address: new Address('1', 'MainStreet1') });
console.log(user)