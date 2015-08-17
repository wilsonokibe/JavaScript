"use strict";  

class Validation {

  init(){
    let self = this;
    this.errorMessage;
    let form = document.getElementById("myForm");
    form.addEventListener("submit", function(e){
      self.verifyLoginId();
      self.verifyEmail();
      self.verifyName();
      self.verifyHomePage();
      self.verifyAboutMe();
      self.verifyNotification();

      if(self.errorMessage) {
        e.preventDefault();
      }
      self.errorMessage = "";
    });
  }

  verifyLoginId() {
    this.validateEmptyInputField("loginId", "Login Id cannot be empty");
  }

  verifyEmail() {
    this.validateEmptyInputField("email", "Email cannot be empty");  
    this.verifyEmailFormat("email"); 
  }

  verifyEmailFormat(inputId) {
    let email = document.getElementById(inputId).value;
    if(!this.validateEmail(email))  {
      alert(this.errorMessage = "Email is invalid");
    }
  }

  verifyName() {
    this.validateEmptyInputField("name", "Name cannot be empty");
  }

  verifyHomePage() {
    this.validateEmptyInputField("homePage", "Home page cannot be empty");    
    this.verifyHomePageFormat("homepage");
  }

  verifyHomePageFormat(inputId) {
    let homePage = document.getElementById(inputId).value;
    if(!this.validateUrl(homePage)) {
      alert(this.errorMessage = "URL is invalid.");
    }
  }

  verifyAboutMe() {
    this.validateEmptyInputField("aboutMe", "About me field cannot be empty");
    this.validateInputLength("aboutMe", "Cannot be less than 50");
  }

  verifyNotification() { 
    const receiveNotification = document.getElementById("receiveNotification");
    if(!receiveNotification.checked) {
      alert(this.errorMessage = "Receive notification is not checked.");
    } 
  }
  
  verifyNotification(eventValue) {
    const receiveNotification = document.getElementById("receiveNotification").checked;
    if(receiveNotification == false) {
      eventValue.preventDefault(); 
      alert(this.errorMessage = "Receive notification is not checked.");
    } 
  }


  validateInputLength(inputId, errorMessage) {
    let inputField = document.getElementById(inputId);
    if(!this.isMinLength(inputField.value, 50)) {
      alert(this.errorMessage = errorMessage);
    }
  }

  validateEmptyInputField(inputId, errorMessage) {
    let inputField = document.getElementById(inputId);
    if(this.isEmpty(inputField.value)) {
      alert(this.errorMessage = errorMessage);
    }
  }

  isEmpty(value)  {
    if(value == null || value.trim() == '') {
      return true;
    }
    return false;
  }

  isMinLength(value, length) {
    if(value.length >= length) {
      return true;
    }
    return false;
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

const formValidation = new Validation();
formValidation.init();
