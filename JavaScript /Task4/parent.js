"use strict";

class CheckBox {

  init() {
    const parentCheckBox = document.querySelectorAll(".parent");
      this.parentClick(parentCheckBox);
    
  }

  parentClick(parentCheckBox) {
    for(let i = 0; i < parentCheckBox.length; i++) {     
      parentCheckBox[i].addEventListener("click", function() {
        const divElement = document.getElementById(`chckBox${i+1}`);
        const divChildren = divElement.getElementsByTagName("input");        

        if(parentCheckBox[i].checked == true) {
          divElement.style.display = "block";

          parentCheckBox[i].scrollIntoView(); 

          for(let k = 0; k < divChildren.length; k++) {
            if(divChildren[k].type == 'checkbox') {
              divChildren[k].checked = true;
            } 
          }
        } else if(parentCheckBox[i].checked == false) {
          for(let x = 0; x < divChildren.length; x++) { 
            divChildren[x].checked = false; 
          }
          divElement.style.display = "none";
        }
      })
    }
  }
}

const newParentChild = new CheckBox();
newParentChild.init();
