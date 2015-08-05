"use strict";

class Check {

  init() {
    const daysValue = document.getElementsByClassName("day_class");
    const noneValue = document.getElementsByClassName("none_class");
    let self = this;

    for(let i = 0; i < daysValue.length; i++) {
      daysValue[i].addEventListener('click', function() {
        self.uncheckNone();  
        self.checkDays(i); 
      })
    }

    noneValue[0].addEventListener('click', function() {
      self.checkNone();
    })
  }

  checkDays(i) {
    const daysValue = document.getElementsByClassName("day_class");
    let count = document.querySelectorAll('input[type="checkbox"]:checked').length;
    let dayHolder = '';

    if(count > 3) {
      daysValue[i].checked = false;
      count -= 1;

      for(let k = 0; k < daysValue.length; k++ ) {
        if(daysValue[k].checked == true) {
          dayHolder =  `${dayHolder} ${this.getCheckedDay(k)}`;
          dayHolder = `${dayHolder},`;
        }        
      }
      alert(`You can only select 3 options.\n You have already selected ${dayHolder}`);
      } 
  }

  uncheckNone() {
    const noneValue2 = document.getElementsByClassName("none_class");
    noneValue2[0].checked = false;
  }

  checkNone() {
    const days = document.getElementsByClassName("day_class");
    for(let i = 0; i < days.length; i++) {
      days[i].checked = false;
    }    
  }

  getCheckedDay(value) {
    let day = '';
    if(value == 0) { day = 'Sunday';} 
    else if(value == 1) { day = 'Monday';}
    else if(value == 2) { day = 'Tuesday';}
    else if(value == 3) { day = 'Wednesday';}
    else if(value == 4) { day = 'Thursday';}
    else if(value == 5) { day = 'Friday';}
    else if(value == 6) { day = 'Saturday';}
    return day;
  }
}

const check = new Check();
check.init();
