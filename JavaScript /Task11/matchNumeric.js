"use strict"; 

class CheckNumber {
  constructor() {

  }

  init() {
    const self = this;
    const btn = document.getElementById("myBtn");
    btn.addEventListener("click", function(event) {
      self.validateInput(event);
    });
  }

  validateInput(eventValue) {
    const value = document.getElementById("number").value;

    if (value == '') {
      eventValue.preventDefault();
      alert("You did not enter any value. \nPlease enter a number");
    } else {
        const isNumber = this.isNumeric(value);
        document.getElementById("result").value = isNumber;
        
        if(!isNumber) {eventValue.preventDefault();}
      }         
  }

  isNumeric(n) {
    let numberRegex = new RegExp(/^-?(\d+|\d{1,3}(\.\d{3})+)(\,(\s)?\d*)?$/g);
    return numberRegex.test(n);
  }
}

const start = new CheckNumber();
start.init(); 