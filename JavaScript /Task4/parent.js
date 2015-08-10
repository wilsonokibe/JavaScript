"use strict";

class CheckBox {

  init() {
    const parentCheckBox = document.querySelectorAll(".parent");
    this.bindCheckBoxes(parentCheckBox);    
  }

  bindCheckBoxes(parentCheckBox) {
    let self = this;
    for(let i = 0; i < parentCheckBox.length; i++) {     
      parentCheckBox[i].addEventListener("click", function() {         
        self.hideOrSHowChildren(i, parentCheckBox) ;        
      })
    }
  }  

  hideOrSHowChildren(i, parentCheckBox) {
    let self = this;
    self.checkParent(parentCheckBox, i)
  }

  checkParent(parentCheckBox, i) {
    let self = this; 
    let value = true;   

    if(parentCheckBox[i].checked == true) {
      let show = "block";
      self.actionForChecked(value, show, i);
      parentCheckBox[i].scrollIntoView();
    }else {
      let show = "none";
      let value = false;
      self.actionForChecked(value, show, i);
    }
  }

  actionForChecked(value, show, i) {
    let self = this; 
    const divElement = self.getParentCheckBox(i); 
    const divChildren = self.getChildrenCheckBox(divElement); 
    divElement.style.display = show;
    
    for(let k = 0; k < divChildren.length; k++) {
      if(divChildren[k].type == 'checkbox') {
        divChildren[k].checked = value;
      } 
    }
  }

  getParentCheckBox(i) {
    const divElement = document.getElementById(`chckBox${i+1}`);
    return divElement;
  }

  getChildrenCheckBox(divElement) {    
    const divChildren = divElement.getElementsByTagName("input"); 
    return divChildren;
  }  
}

const newParentChild = new CheckBox();
newParentChild.init();
