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

  verifyLoginId(eventValue) {    
    const loginId = document.getElementById("loginId").value;
    if(loginId === '' || loginId.match(/^ *$/) !== null) {
      eventValue.preventDefault(); 
      alert("Login Id cannot be empty.");
    }
  }

  verifyEmail(eventValue) {
    const email = document.getElementById("email").value;
    if(email == '' || email.match(/^ *$/) !== null) { 
      eventValue.preventDefault();
      alert("Email cannot be empty.");
    } else { }
  }

  verifyName(eventValue) {
    const name = document.getElementById("name").value;
    if (name == '' || name.match(/^ *$/) !== null) { 
      eventValue.preventDefault(); 
      alert("Name cannot be empty.");
    }
  }

  verifyHomePage(eventValue) {
    const homePage = document.getElementById("homePage").value;
    if (homePage == '' || homePage.match(/^ *$/) !== null) { 
      eventValue.preventDefault(); 
      alert("home page cannot be empty.");
    } else { }
  }

  verifyAboutMe(eventValue) {
    const aboutMe = document.getElementById("aboutMe").value;
    if(aboutMe == '' || aboutMe.match(/^ *$/) !== null) {
      eventValue.preventDefault(); 
      alert("Please tell us aboput yourself.\n This field cannot be empty.")
    } else { 
      if(aboutMe.length < 50) {
        eventValue.preventDefault(); 
        alert("Statement about yourself is too short.\n Kindly ensure that you write more than 50 characters of summary on yourself.")
      } else if(aboutMe.length > 50) {
        this.verifyNotification(eventValue);
      }
    }
  }

  verifyNotification(eventValue) {
    const receiveNotification = document.getElementById("receiveNotification").checked;
    if(receiveNotification == false) {
      eventValue.preventDefault(); 
      alert("Receive notification is not checked.");
    } else if (receiveNotification == true) {
      //SUBMITS FORM
     }
  }
}

const btn = document.getElementById("myBtn");
const formValidation = new Validation(btn);
formValidation.init();
