"use strict";

class Names {

  init() {
    let nameIs = `Hello `;
    let first = `first`;
    let last = `last`;

    nameIs = `${this.getName(nameIs, first)}`;
    nameIs = `${this.getName(nameIs, last)}`;
        
    let alertUser = this.alertMessage(nameIs);
    if (alertUser) {
      let message = this.printMessage(nameIs);
    }
    return 0; 
  }

  getName(nameIs, nameType) {
    let valid = 0;    
    do {
      let userValue = this.getPromptResult(nameType);
      if(userValue != null){   
        valid = this.validate(userValue);
        if (valid) {  nameIs += ` ${userValue}`; }        
        else {  alert(`${nameType}name cannot be empty`); }
      }
      else if(userValue == null) {  alert(`You may NOT cancel this request.`); }
    }while (!valid)
    return nameIs;
  }

  getPromptResult(inputName) {
    let result = prompt(`Please enter ${inputName} name`);
    return result;
  }

  validate(name) {
    if (name != '' || name.match(/^ *$/) !== null) {
      if (name.match(/^[a-zA-Z]+$/)) {
        return 1;
      }else { return 0;}
    }else {return 0;}
  }

  alertMessage(message) {
    alert(message);
    return 1; 
  }

  printMessage(message) {
    document.getElementById("welcome").innerHTML = message;
    return 0;
  }
}

const newName = new Names();
newName.init();