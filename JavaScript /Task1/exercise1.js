"use strict";  

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  } 
                 
  compare(secondUser) { 
    if (this.age > secondUser.age) {
      return (this.name + ' is older than ' + secondUser.name+ '\n');
    } 
    else if (this.age < secondUser.age) {
      return (this.name + ' is younger than ' + secondUser.name+ '\n');
      
    } 
    else if (this.age == secondUser.age) {
      return (this.name + ' is same age as ' + secondUser.name+ '\n');
    } 
    else {
      return ("Nothing to compares");
    }    
  }
}

let user1 = new User('John', Number('025'));
let user2 = new User('Mary', Number('22'));
const result1 = user1.compare(user2); 
console.log(result1);

let user3 = new User('John', Number('22'));
let user4 = new User('Mary', Number('22'));
const result2 = user3.compare(user4); 
console.log(result2);  

let user5 = new User('John', Number('22'));
let user6 = new User('Mary', Number('30'));
const result3 = user5.compare(user6); 
console.log(result3); 
