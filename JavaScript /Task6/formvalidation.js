"use strict";  

class Validation {  
  constructor(myBtn) {    
    this.btn = document.getElementById("myBtn");
  }

  init(){
    let self = this;
    this.btn.addEventListener("click", function(event){
      self.verifyLoginId(event);
      self.verifyEmail(event);
      self.verifyName(event);
      self.verifyHomePage(event);
      self.verifyAboutMe(event);
    })
  }

  validateEmptyInput(value, eventValue, message) {
    if(value == '' || value.match(/^ *$/) !== null) {
      eventValue.preventDefault(); 
      alert(message);
    } else return 1;
  }

  verifyLoginId(eventValue) {   
    let self = this; 
    const loginId = document.getElementById("loginId").value;
    let result = self.validateEmptyInput(loginId, eventValue, "Login Id cannot be empty.");    
  }

  verifyEmail(eventValue) {   
    let self = this; 
    const email = document.getElementById("email").value;    
    let result = self.validateEmptyInput(email, eventValue, "Email cannot be empty.");
  }

  verifyName(eventValue) {   
    let self = this; 
    const name = document.getElementById("name").value;    
    let result = self.validateEmptyInput(name, eventValue, "Name cannot be empty.");
  }

  verifyHomePage(eventValue) {   
    let self = this; 
    const homePage = document.getElementById("homePage").value;
    let result = self.validateEmptyInput(homePage, eventValue, "home page cannot be empty.");
  }

  verifyAboutMe(eventValue) {   
    let self = this; 
    const aboutMe = document.getElementById("aboutMe").value;
    let result = self.validateEmptyInput(aboutMe, eventValue, "Please tell us about yourself.\n This field cannot be empty.");
    if(result) {
      console.log("result is good");
      if(self.checkTextLength(aboutMe)) {
        self.verifyNotification(eventValue);        
      } else {  
        eventValue.preventDefault(); 
        alert("Statement about yourself is too short.\n Kindly ensure that you write at least 50 characters of summary on yourself.");
      }    
    }
  }

  checkTextLength(aboutMe) {
    if(aboutMe.length >= 50){ return true; } 
    else { return false;}
  }

  verifyNotification(eventValue) {   
    let self = this; 
    const receiveNotification = document.getElementById("receiveNotification").checked;
    if(receiveNotification == false) {
      eventValue.preventDefault(); 
      alert("Receive notification is not checked.");
    } 
  }
}

const formValidation = new Validation(myBtn);
formValidation.init();
