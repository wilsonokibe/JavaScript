"use strict";

window.addEventListener("load", function() {
  const check = new Check();
  check.init();  
})

class Check {
  constructor() {}  
  
  //checks all if toggle is 1 and uncheck if otherwise                
  selectToggle(toggle) {
    const theForm = document.forms["myForm"];
    for (let i = 0; i < theForm.length; i++) {
      if(toggle) {
        theForm.elements[i].checked = true;
      }else {
        theForm.elements[i].checked = false;
      }
    }
  }  

  init() {
    const all = document.getElementById("all");
    const none = document.getElementById("none");

    //handler for all click
    function allHandler() { 
      const all = new Check();
      all.selectToggle(1);
    }

    //handler for none click
    function noneHandler() { 
      const none = new Check();
      none.selectToggle(0);
    }

    all.addEventListener("click", allHandler, false);
    none.addEventListener("click", noneHandler, false);
  }
}

