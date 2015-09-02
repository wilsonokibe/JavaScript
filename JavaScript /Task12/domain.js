"use strict";

class Domain{

  init() {
    let myButton = document.getElementById("myBtn");

    myButton.addEventListener('click', function() {
      const inputValue = this.getInputValue(); 
      this.validateInput(inputValue);        
    }.bind(this));
  }

  getInputValue() {
    const inputValue = document.getElementById("urlInput").value;
    return inputValue;
  }

  validateInput(inputValue) {
    const isEmpty = this.isEmptyInput(inputValue);

    if(isEmpty) {
        this.alertPrompt(`Please enter URL.`);
      } else {
          if(this.validateUrl(inputValue)) {
            this.getDomainAndSubDomain();
          } else {
              this.alertPrompt(`Please enter valid URL`);
          }
      }
  }

  isEmptyInput(inputValue) {
    if(inputValue == null || inputValue.trim() == '') {
      return true;
    }
    return false;
  }

  validateUrl(urlInput) {
    const pattern =/^(?:http|https|ftp)\:\/\/([a-z0-9]*\.?[a-z0-9]*\.\w{2,3}(\.?\w{2,3})?)(\/\w+(?:\/|\?)\w+(?:\/|\?)?(?:[a-z0-9])*(?:\/|\=)?)?.*/gmi;

    const value = pattern.test(urlInput);
    pattern.lastIndex = 0;
    this.match = pattern.exec(urlInput);   

    return value; 
  }

  alertPrompt(message) {
    alert(`${message}`);
  }

  getDomainAndSubDomain() {
    const parts = this.match[1].split('.').reverse();    
    let domain = `${parts[1]}.${parts[0]}`;

    if(this.match[1].toLowerCase().indexOf('co.uk') != -1 || this.match[1].toLowerCase().indexOf('com.ng') != -1 && this.match[1].length > 2) {
      domain = `${parts[2]}.${domain}`;
    }

    const subDomain = this.getSubDomain();
    console.log(subDomain);
    if(subDomain) {      
      this.alertPrompt(`Domain: ${domain} \n${subDomain}`);
    } else {
        this.alertPrompt(`Domain: ${domain}`);
    }
  }

  getSubDomain() {
    let subDomain = null;
    const parts = this.match[1].split('.').reverse(); 

    if(parts[2] != 'www' && parts[2] != 'WWW' && this.match[1].length > 2) {
      subDomain = `${parts[2]}`;
    }
    else if(parts[3] != 'www' && parts[2] != 'WWW' && this.match[1].toLowerCase().indexOf('co.uk') != -1 || 
      this.match[1].toLowerCase().indexOf('com.ng') != -1 && this.match[1].length > 3) {
      subDomain = `${parts[3]}`;
    }

    if(subDomain != null && subDomain != '' && subDomain != 'undefined' ) {
      return `Sub-Domain: ${subDomain}`;
    }
  }
}

const domain = new Domain();
domain.init();