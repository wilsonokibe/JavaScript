"use strict";

window.addEventListener("load", function() {
  const names = new Welcome();
  names.init();  
})

class Welcome {
  constructor() {}

  init () {

    //call to get url
    let getURL = this.retrieveURL();

    let popPage = window.open(getURL, "_blank", "height = 450, width=400, top=10, left=10, resizable=no,scrollbars=no, status=no, toolbar=no, menubar=no");
  }

  //method: get url from user
  retrieveURL() {
    let userURL = prompt("Please input url");
    while(userURL == '') {
      userURL = prompt("You have not entered URL. \nPlease enter URL:");  
    }

    //call to validate url
    let verifyURL = this.validateURL(userURL);
    while(!verifyURL) {
      userURL = prompt("You have entered an INVALID URL. \nPlease enter valid URL:");
      if(userURL != '') {
        verifyURL = this.validateURL(userURL);
      }      
    }

    return userURL;
  }

  //method: validate url entered by user
  validateURL(urlValue) {
    var urlregex = new RegExp(
      "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
    return urlregex.test(urlValue);
  }
}