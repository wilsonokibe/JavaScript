"use strict"; 

class CheckNumber {

  init() {
    const self = this;
    const btn = document.getElementById("myBtn");
    btn.addEventListener("click", function(event) {
      self.validateInput(event);
    });
  }

  validateInput(event) {
    const value = document.getElementById("number").value;

    if (this.isEmpty(value)) {
      event.preventDefault();
      alert("You did not enter any value. \nPlease enter a number");
    } else {
        if(!this.isValueNumber(value)) {event.preventDefault();}
      }         
  }

  isValueNumber(value) {
    const isNumber = this.isNumeric(value);
    document.getElementById("result").value = isNumber;
    return isNumber;        
  }

  isEmpty(value)  {
    if(value == null || value.trim() == '') {
      return true;
    }
    return false;
  }

  isNumeric(n) {
    let numberRegex = new RegExp(/^-?\d*\.?\d+$/);
    return numberRegex.test(n);
  }
}

const start = new CheckNumber();
start.init(); 