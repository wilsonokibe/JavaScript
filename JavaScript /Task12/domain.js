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
    if (urlValue == '' || urlValue.match(/^ *$/) !== null) {
      alert(`You have not entered URL.\n Please enter URL.`);
    } else {      
        let validUrl = this.validateUrl(urlValue);
        if(validUrl) {
          const domainName = this.getDomain(urlValue);
          const subDomainName = this.getSubDomain(urlValue);
          if (subDomainName) { alert(`Domain: ${domainName}\nSub-Domain: ${subDomainName}`); } 
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

  getHostName(urlValue) {
    let domainRegex = new RegExp(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    let match = urlValue.match(domainRegex);

    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) { return(match[2]); } 
    else { return null; }
  }

  getDomain(url) {
    const hostName = this.getHostName(url);
    let domain = hostName;
    
    if (hostName != null) {
      let parts = hostName.split('.').reverse();
        
      if (parts != null && parts.length > 1) {
        domain = `${parts[1]}.${parts[0]}`;            
        if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
          domain = `${parts[2]}.${domain}`;
        }
      }
    }    
    return domain;
  }

  getSubDomain(url) { 
    let subDomain = url;
    subDomain = subDomain.replace(new RegExp(/^\s+/),""); // START
    subDomain = subDomain.replace(new RegExp(/\s+$/),""); // END
     
    subDomain = subDomain.replace(new RegExp(/\\/g),"/"); //REPLACE \ WITH /

    subDomain = subDomain.replace(new RegExp(/^http\:\/\/|^https\:\/\/|^ftp\:\/\//i),"");
    subDomain = subDomain.replace(new RegExp(/^www\./i),"");
    subDomain = subDomain.replace(new RegExp(/\/(.*)/),"");

    if (subDomain.match(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i))) {
      subDomain = subDomain.replace(new RegExp(/\.[a-z]{2,3}\.[a-z]{2}$/i),"");     
    } else if (subDomain.match(new RegExp(/\.[a-z]{2,4}$/i))) {
      subDomain = subDomain.replace(new RegExp(/\.[a-z]{2,4}$/i),""); 
    }
     
    let subDomainStatues = (subDomain.match(new RegExp(/\./g))) ? true : false;

    if (subDomainStatues) {
      subDomain = subDomain.replace(new RegExp(/\.[a-z]{2,}$/i),"");
      return subDomain;   
    } else {return null;}     
  }
}

const newObject = new Url();
newObject.init();
