"use strict";  

class CheckUrl {

  init () {
    let inputedUrl = this.retrieveUrl();
    window.open(inputedUrl, "_blank", "height = 450, width=400, top=10, left=10, resizable=no, scrollbars=no, status=no, toolbar=no, menubar=no");
  }

  retrieveUrl() {
    let promptResult = prompt("Please input url");
    
    this.checkEmptyField(promptResult);
    let isUrl = this.validateUrl(promptResult);

    while(!isUrl) {
      promptResult = prompt("You have entered an INVALID URL. \nPlease enter valid URL:");
      this.checkEmptyField(promptResult);
      if(promptResult != '') {        
        isUrl = this.validateUrl(promptResult);
      }      
    }
    return promptResult;
  }

  checkEmptyField(promptResult) {
    if(promptResult == null) 
    { alert("You may NOT cancel.")  }
    else {
      while(promptResult == '' || promptResult.match(/^ *$/) !== null) {
        promptResult = prompt("You have not entered URL. \nPlease enter URL:");
      }
    }
  }

  validateUrl(url) {
    let urlregex = new RegExp(
      "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
    return urlregex.test(url);
  }
}

const newCheckUrlObject = new CheckUrl();
newCheckUrlObject.init();