# javascript and classes

Classes were introduced in ECMAScript 6 (also known as ES2015) as a way to define blueprints for creating objects. JavaScript classes provide a more structured and object-oriented way to define and create objects compared to the older prototype-based inheritance model.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Alice", 30);
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
```

`Person` is a class with a constructor method that sets properties (`name` and `age`) and a `sayHello` method. You can create instances of the `Person` class using the `new` keyword.

JavaScript classes also support inheritance, so you can create subclasses that inherit properties and methods from a parent class. This allows for more complex object-oriented programming in JavaScript.

## OPP

JavaScript supports Object-Oriented Programming (OOP) principles, allowing you to create and work with objects, classes, and inheritance. Here are the key components of OOP in JavaScript:

1.Objects: In JavaScript, objects are collections of key-value pairs (properties and methods) and are fundamental to OOP. You can create objects using object literals or constructors.

```javascript
// Using an object literal
const person = {
  name: "Alice",
  age: 30,
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Using a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}
```

const person1 = new Person("Alice", 30);
person1.sayHello(); // Output: Hello, my name is Alice

2. Classes: As mentioned earlier, JavaScript introduced class syntax in ES6, providing a more structured way to define and create objects. Classes act as blueprints for creating objects with shared properties and methods.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Alice", 30);
person1.sayHello(); // Output: Hello, my name is Alice
```

3. Inheritance: JavaScript supports prototype-based inheritance. You can create subclasses that inherit properties and methods from a parent class. This is achieved by extending the prototype chain.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy barks.
```

4. Encapsulation: JavaScript does not have access modifiers like some other languages (e.g., private, protected), so encapsulation is often achieved through naming conventions and closures. You can use closures to create private variables and methods.

```javascript
function Counter() {
  let count = 0;

  this.increment = function () {
    count++;
  };

  this.getCount = function () {
    return count;
  };
}

const counter = new Counter();
counter.increment();
console.log(counter.getCount()); // Output: 1
```

5. Polymorphism: Polymorphism is a fundamental concept in OOP that allows objects of different classes to be treated as objects of a common base class. In JavaScript, polymorphism is achieved through method overriding and dynamic dispatch.
