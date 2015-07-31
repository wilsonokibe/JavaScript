"use strict";  
window.onload = function(){

  class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }  
                   
    compare(secondUser) { 
      if (this.age > secondUser.age) {
        console.log(this.name + ' is older than ' + secondUser.name);
      } 
      else if (this.age < secondUser.age) {
        console.log(secondUser.name + ' is older than ' + this.name);
      } 
      else if (this.age == secondUser.age) {
        console.log(this.name + ' and ' + secondUser.name + ' are of the same age');
      } 
      else {
        console.log('Nothing to compare');
      }    
    }
  }

  let user1 = new User('John', 25);
  let user2 = new User('Mary', 22);

  const result = user1.compare(user2);       
}
