"use strict";

class Check {
  constructor() {}  
  
  //CHECKS ALL CHECKBOXES IF VALUE IS 1 VICE-VERSA                 
  selectToggle(toggle) {
    const colors = document.getElementsByTagName("input");
    let counter = 0;
    for(counter; counter < colors.length; counter++) {
      colors[counter].checked = toggle;
    }
  }  

  init() {
    const all = document.getElementById("all");
    const none = document.getElementById("none");

    let self = this;
    all.addEventListener('click', function() {
      self.selectToggle(true);
    })

    none.addEventListener('click', function() {
      self.selectToggle(false);
    }
  )}
}

const check = new Check();
check.init(); 