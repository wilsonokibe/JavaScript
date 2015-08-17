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
        self.respondToClick(i, parentCheckBox[i]) ;        
      })
    }
  }

  respondToClick(i, parentCheckBox) {
    if(parentCheckBox.checked) {
      this.hideOrShowChildren(true, "block", i);
      parentCheckBox.scrollIntoView();
    } else {
      this.hideOrShowChildren(false, "none", i);
    }
  }

  hideOrShowChildren(checkStatus, display, i) {
    const childrenContainer = this.getChildrenContainer(i);
    const children = childrenContainer.getElementsByTagName("input"); 
    childrenContainer.style.display = display;
    this.unCheckChildren(children, checkStatus)
  }

  unCheckChildren(children, checkStatus) {
    for(let k = 0; k < children.length; k++) {
      if(children[k].type == 'checkbox') {
        children[k].checked = checkStatus;
      } 
    }
  }

  getChildrenContainer(i) {
    return document.getElementById(`chckBox${i+1}`);
  } 
}

const newParentChild = new CheckBox();
newParentChild.init();
