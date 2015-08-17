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
        return true;
      }else { return false;}
    }else {return false;}
  }

  alertMessage(message) {
    alert(message);
    return true; 
  }

  printMessage(message) {
    document.getElementById("welcome").innerHTML = message;
    return false;
  }
}

const newName = new Names();
newName.init();







 "use strict";

class Names {

  init() {
    this.getName();
  }

  getName() {
    let firstName = '';
    let lastName = '';
    do {
      firstName = this.getPromptResult('first');
    } while (this.isEmpty(firstName));

    do {
      lastName = this.getPromptResult('last');
    } while (this.isEmpty(lastName));
  
    this.displayMessage(firstName, lastName);
  }

  getPromptResult(inputName) {
    let result = prompt(`Please enter ${inputName} name`);
    return result;
  }

  isEmpty(value) {
    if (value == null || value.trim() == '') {
      return true;
    }
    return false;
  }

  displayMessage(firstName, secondName) {
    alert(`Hello ${firstName} ${secondName}`);
  }
}

const newName = new Names();
newName.init();