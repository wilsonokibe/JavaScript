"use strict";

class Check {
  constructor(checkLimit) {
    this.checkLimit = checkLimit;
  }

  init() {
    const daysElement = document.getElementsByClassName("day");
    const noneElement = document.getElementById("none");
    let self = this;

    //LISTEN TO CLICK ON DAYS CHECKBOX
    for(let i = 0; i < daysElement.length; i++) {
      daysElement[i].addEventListener('click', function() {
        if(noneElement.checked == true) { 
          self.unCheckNone(noneElement); 
        } 
        self.checkDaysLimit(i, daysElement); 
      })
    }

    //LISTEN TO CLICK ON NONE CHECKBOX
    noneElement.addEventListener('click', function() {
      self.unCheckDays(daysElement);
    })
  }

  checkDaysLimit(i, daysElement) {
    let count = document.querySelectorAll('.day:checked').length; 
    if(count > this.checkLimit) {
      daysElement[i].checked = false;
      count -= 1;
      this.getCheckedDays(daysElement);
    } 
  }

  unCheckNone(noneElement) {
    noneElement.checked = false;
  }

  unCheckDays(daysElement) {
    for(let i = 0; i < daysElement.length; i++) {
      daysElement[i].checked = false;
    }    
  }

  getCheckedDays(daysElement) {
    const days = [];
    for(let k = 0; k < daysElement.length; k++ ) {
      if(daysElement[k].checked == true) {
        days.push(daysElement[k].value);
      }        
    }
    this.displayMessage(days);      
  }

  displayMessage(days) {
    let dayHolder = days.join(', ');
    alert(`You can only select ${this.checkLimit} options.\n You have already selected ${dayHolder}`);
  }
}

const check = new Check(3);
check.init();
