"use strict";

window.addEventListener("load", function() {
  const check = new Check();
  check.init();  
})

class Check {
  constructor(index){
    this.index = index;
  }

  init() {       
    document.getElementById("form1").addEventListener('click', function(e){
      if(e.target && e.target.nodeName == 'INPUT') {
        var checker = e.target.id;
        const checkBox = new Check(checker);
        checkBox.regulateCheck();
      }
    })
  }

  regulateCheck() {
    let cnt = 0;
    let i = 0;
    let arr = [];
    const day = document.getElementsByName("day");
    
    for( ;i < day.length-1; i++) {
      if (day[i].checked) {
        switch (i) {
          case 0:
          arr.push("Sunday");
          break;
          case 1:
          arr.push("Monday");
          break;
          case 2:
          arr.push("Tuesday");
          break;
          case 3:
          arr.push("Wednesday");
          break;
          case 4:
          arr.push("Thursday");
          break;
          case 5:
          arr.push("Friday");
          break;
          case 6:
          arr.push("Saturday");
          default:
          break;
        }      
        cnt += 1;
      }
    }
    if (cnt > 3 && this.index != 7) {
      arr.splice(this.index, 1);
      alert('Only 3 days can be selected.\nYou have already selected '+arr.join(', ')+'.'); 
      document.getElementById(this.index).checked = false;
    }
    else if (this.index == 7) {
      for (let j = 0; j < day.length-1; j++) {
        document.getElementById(j).checked = false;
      }
    }
    else {
      document.getElementById(7).checked = false;
    }     
  }
}
