"use strict";

window.addEventListener("load", function() {
  const names = new Welcome();
  names.init();  
})

class Welcome {
  constructor() {}

  init() {
    let nameIs = 'Hello ';
    let valid = 0;

    do {
      let firstName = prompt('Please enter first name');
      
      //call to method validate
      valid = this.validate(firstName);

      if (valid) {
        nameIs += firstName;
      }
    }while (!valid) 

    do {
      let lastName = prompt('Please enter last name');

      //second call to method validate
      valid = this.validate(lastName);
      
      if (valid) {
        nameIs += ' '+lastName;
      }
    }while (!valid) 

    //call to alert message
    let alertUser = this.alertMessage(nameIs);
    if (alertUser) {

      //call to print messgae
      let message = this.printMessage(nameIs);
    }
    return 0; 
  }

  //validates prompot input value
  validate(name) {
    if (name != '') {
      if (name.match(/^[a-zA-Z]+$/)) {
        return 1;
      }else { return 0;}
    }else {return 0;}
  }

  //alert message method
  alertMessage(message) {
    alert(message);
    return 1; 
  }

  //print message method
  printMessage(msg) {
    document.getElementById("welcome").innerHTML = msg;
    return 0;
  }
}
