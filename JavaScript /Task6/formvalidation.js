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
  }

  verifyName() {
    this.validateEmptyInputField("name", "Name cannot be empty");
  }

  verifyHomePage() {
    this.validateEmptyInputField("home-page", "Home page cannot be empty");
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

  validateInputLength(inputId, errorMessage) {
    let inputField = document.getElementById(inputId);
    if(!this.isMinLength(inputField.value, 50)) {
      alert(this.errorMessage = errorMessage);
    }
  }

  validateEmptyInputField(inputId, errorMessage) {
    let inputField = document.getElementById(inputId)
    if (this.isEmpty(inputField.value)) {
      alert(this.errorMessage = errorMessage);
    }
  }

  isEmpty(value) {
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
}

const formValidation = new Validation();
formValidation.init();
