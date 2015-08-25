"use strict"; 

class Url {

  init() {
    self = this;
    const btn = document.getElementById("myBtn");
    btn.addEventListener("click", function() {
      self.getUrl();
    })
  }

  getUrl() {
    const urlValue = document.getElementById("urlInput").value;
    if(urlValue == null || urlValue.trim() == '') {
      alert(`You have not entered URL.\n Please enter URL.`);
    } else {      
        let validUrl = this.validateUrl(urlValue);
        if(validUrl) {
          const domainName = this.getDomain(urlValue);
          
          if (this.subDomain != null) { alert(`Domain: ${domainName}\nSub-Domain: ${this.subDomain}`); } 
          else {alert(`Domain: ${domainName}`); }
        } 
        else { alert(`The URL entered is not valid. \nPlease enter valid URL.`);}
      }
  }
  
  validateUrl(urlValue) {
    let urlregex = new RegExp(
      "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
    return urlregex.test(urlValue);
  }

  getDomain(url) {
    const hostName = this.getHostName(url);
    let domain = hostName;
    this.subDomain = null;    
    if (hostName != null) {
      let parts = hostName.split('.').reverse();        
      if (parts != null && parts.length > 1) {
        domain = `${parts[1]}.${parts[0]}`;            
        if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
          domain = `${parts[2]}.${domain}`;
          if(parts[3]) {
            this.subDomain = parts[3];
          }
        }
        else if(parts.length > 2){
          this.subDomain = parts[2];          
        } 
      }
    }    
    return domain;
  }

  getHostName(urlValue) {
    let domainRegex = new RegExp(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    let match = urlValue.match(domainRegex);

    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) { 
      return(match[2]); 
    } else { return null; }
  }
}

const newObject = new Url();
newObject.init();
