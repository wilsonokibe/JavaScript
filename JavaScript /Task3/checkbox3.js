"use strict";

class Check {

  init() {
    const daysElement = document.getElementsByClassName("day");
    const noneElement = document.getElementsByClassName("none");
    let self = this;

    //LISTEN TO CLICK ON DAYS CHECKBOX
    for(let i = 0; i < daysElement.length; i++) {
      daysElement[i].addEventListener('click', function() {
        self.unCheckNone(noneElement);  
        self.checkDaysLimit(i, daysElement); 
      })
    }

    //LISTEN TO CLICK ON NONE CHECKBOX
    noneElement[0].addEventListener('click', function() {
      self.unCheckDays(daysElement);
    })
  }

  checkDaysLimit(i, daysElement) {
    let count = document.querySelectorAll('input[type="checkbox"]:checked').length; 
    if(count > 3) {
      daysElement[i].checked = false;
      count -= 1;
      this.getCheckedDays(daysElement);
    } 
  }

  unCheckNone(noneElement) {
    noneElement[0].checked = false;
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
    alert(`You can only select 3 options.\n You have already selected ${dayHolder}`);
  }
}

const check = new Check();
check.init();
