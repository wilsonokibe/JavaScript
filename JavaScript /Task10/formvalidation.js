"use strict";  

class Validation {
  constructor(button) {
    this.button = button;
  }

  init(){
    let self = this;
    this.button.addEventListener("click", function(event){
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
    const loginId = document.getElementById("loginId").value;
    this.validateEmptyInput(loginId, eventValue, "Login Id cannot be empty.");    
  }

  verifyEmail(eventValue) {  
    const email = document.getElementById("email").value;
    let result = this.validateEmptyInput(email, eventValue, "Email cannot be empty.");
    if(result) {
      const validEmail = this.validateEmail(email);
      if(!validEmail) {
        eventValue.preventDefault(); 
        alert("Please enter valid email.");
      }
    }
  }

  verifyName(eventValue) {
    const name = document.getElementById("name").value;    
    this.validateEmptyInput(name, eventValue, "Name cannot be empty.");
  }

  verifyHomePage(eventValue) { 
    const homePage = document.getElementById("homePage").value;
    let result = this.validateEmptyInput(homePage, eventValue, "home page cannot be empty.");
    if(result) {
      const validUrl = this.validateUrl(homePage);
      if(!validUrl) {
        eventValue.preventDefault(); 
        alert("Please enter valid home page.");
      }   
    } 
  }

  verifyAboutMe(eventValue) {
    const aboutMe = document.getElementById("aboutMe").value;
    let result = this.validateEmptyInput(aboutMe, eventValue, "Please tell us about yourself.\n This field cannot be empty.");
    if(result) {
      if(this.checkTextLength(aboutMe)) {
        this.verifyNotification(eventValue);        
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
    const receiveNotification = document.getElementById("receiveNotification").checked;
    if(receiveNotification == false) {
      eventValue.preventDefault(); 
      alert("Receive notification is not checked.");
    } 
  }

  validateEmail(email) {
    const emailRegEx = new RegExp(/^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/gm);
    return emailRegEx.test(email);
  }

  validateUrl(urlValue) {
    let urlregex = new RegExp(
      "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
    return urlregex.test(urlValue);
  }
}

const btn = document.getElementById("myBtn");
const formValidation = new Validation(btn);
formValidation.init();
