"use strict";  

class Url {

  init () {
    let newUrl = this.retrieveUrl();
    let popPage = window.open(newUrl, "_blank", "height = 450, width=400, top=10, left=10, resizable=no, scrollbars=no, status=no, toolbar=no, menubar=no");
  }

  retrieveUrl() {
    let userUrl = prompt("Please input url");
    while(userUrl == '' || userUrl.match(/^ *$/) !== null) {
      userUrl = prompt("You have not entered URL. \nPlease enter URL:");  
    }

    let verifyUrl = this.validateUrl(userUrl);
    while(!verifyUrl) {
      userUrl = prompt("You have entered an INVALID URL. \nPlease enter valid URL:");
      if(userUrl != '') {
        verifyUrl = this.validateUrl(userUrl);
      }      
    }
    return userUrl;
  }

  validateUrl(urlValue) {
    var urlregex = new RegExp(
      "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
    return urlregex.test(urlValue);
  }
}

const names = new Url();
names.init();