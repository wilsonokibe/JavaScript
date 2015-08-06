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

  getName(nameIs, kind) {
    let valid = 0;    
    do {
      let name = prompt(`Please enter ${kind} name`);   
      valid = this.validate(name);
      if (valid) { nameIs += ` ${name}`; }
    }while (!valid)
    return nameIs;
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

  printMessage(msg) {
    document.getElementById("welcome").innerHTML = msg;
    return 0;
  }
}

const newName = new Names();
newName.init();