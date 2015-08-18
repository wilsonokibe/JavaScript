
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
