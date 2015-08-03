"use strict";  

window.onload = function(){
  const btn = document.getElementById("myBtn");
  const formValidation = new Validation(btn);
  formValidation.init();
}

class Validation {
  constructor(button) {
    this.button = button;
  }

  init(){
    let self = this;
    this.button.addEventListener("click", function (){
      let validationResult = self.getValues();
    })
  }

  getValues() {

    //GET VALUES OF ELEMENTS IN FORM
    const loginId = document.getElementById("loginId").value;
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const homePage = document.getElementById("homePage").value; 
    const aboutMe = document.getElementById("aboutMe").value;
    const receiveNotification = document.getElementById("receiveNotification").checked;

    //CHECK FOR EMPTY LOGIN INPUT
    if(loginId == '') { alert("Login Id cannot be empty.");}

    //CHECK FOR EMPTY EMAIL INPUT
    if(email == '') { 
      alert("Email cannot be empty.");
    } else {

      //VALIDATE EMAIL INPUT
      const validEmail = this.validateEmail(email);

      //IF VALID EMAIL MOVE TO NEXT STATEMENT ELSE ALERT MESSAGE
      if(validEmail) {} 
      else {alert("Please enter valid email.");}
    }

    //CHECK FOR EMPTY NAME INPUT. IF EMPTY ALERT MESSAGE
    if (name == '') { alert("Name cannot be empty.");}

    //CHECK FOR EMPTY HOME PAGE INPUT. IF EMPTY ALERT MESSAGE
    if (homePage == '') { alert("home page cannot be empty.");} 
    else {

      //VALIDATE HOME PAGE INPUT
      const validUrl = this.validateUrl(homePage);

      //IF VALID HOME PAGE MOVE TO NEXT STATEMENT ELSE ALERT MESSAGE
      if(validUrl) {}
      else { alert("Please enter valid home page.");}
    }

    //CHECK FOR EMPTY ABOUT ME INPUT. IF EMPTY ALERT MESSAGE
    if(aboutMe =='') {
      alert("Please tell us aboput yourself.\n This field cannot be empty.")
    } else { 

      //IF VALID 'ABOUT ME' MOVE TO NEXT STATEMENT AND CHECK LENGTH 
      if(aboutMe.length < 50) {
        alert("Statement about yourself is too short.\n Kindly ensure that you write more than 50 characters of summary on yourself.")
      } else if (aboutMe.length > 50) {

        //AFTER ALL VALIDATION, CHECK IF CHECKBOX IS CHECKED
          if(receiveNotification == false) {
            alert("Receive notification is not checked.");
          } else if (receiveNotification == true) {

            //iF CHECKED, SUBMIT FORM
            this.submitForm();
          }
      }
   }
  }

  //VALIDATION METHOD FOR EMAIL
  validateEmail(email) {
    const emailRegEx = new RegExp(/^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/gm);
    return emailRegEx.test(email);
  }

  //VALIDATION METHOD FOR HOME PAGE
  validateUrl(urlValue) {
    let urlregex = new RegExp(
      "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
    return urlregex.test(urlValue);
  }

  submitForm() {
    const sumitted = document.getElementById("myForm").submit();
    }
}