"use strict";

window.addEventListener("load", function() {
  const start = new Welcome();
  start.init();  
})

class Welcome {
  constructor() {}


  init() {
    const self = this;
    const btn = document.getElementById("myBtn");
    btn.addEventListener("click", function() {
      self.validateInput();
    });
  }

  //gets input from user, checks if empty. if not, sends input for validation
  validateInput() {
    const getNumber = document.getElementById("number").value;

    if (getNumber == '') {
      alert("You did not enter any value. \nPlease enter a number");
    } else {
        const number = this.isNumeric(getNumber);
        document.getElementById("result").value = number;
        if(number) {
          //this.submitIt();
        }
      }         
  }

  //validates that input is a number
  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  //submits form
  submitIt() {
    document.getElementById("myForm").submit();
  }
}