// object that has many moving parts
// many interactions between different components

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

// too complex, not self-explanatory
const user = new User("Bob", undefined, undefined, new Address('1', 'main'));
console.log(user);
