"use strict";  
window.onload = function(){ 

  //GET ID OF ADD BUTTON
  const addBtn = document.getElementById("addBtn");
  const removeBtn = document.getElementById("removeBtn");

  const newCountryClass = new CountryClass(addBtn, removeBtn);
  newCountryClass.init();
}

class CountryClass{
  constructor(addBtn, removeBtn) {
    this.addBtn = addBtn;
    this.removeBtn = removeBtn;
  }

  init() {
    let self = this;

   //GET ID OF FIRST MULTIPLE SELECTION
    const addSelectOption = document.getElementById("addCountrySelect");

    //GET ID OF SECOND MULTIPLE SELECTION
    const removeSelectOption = document.getElementById("removeCountrySelect");

    //LISTEN TO CLICK EVENT ON ADD BUTTON AND CALL METHOD addOption()
    addBtn.addEventListener("click", function () {
      self.addOption(addSelectOption, removeSelectOption);     
    });

    //LISTEN TO CLICK EVENT ON REMOVE BUTTON AND CALL METHOD removeOption()
    removeBtn.addEventListener("click", function () {
      self.removeOption(addSelectOption, removeSelectOption);     
    });
  }

  addOption(addSelectOption, removeSelectOption) {  

    //SEARCH FOR SELECTED OPTIONS IN FIRST MULTIPLE SELECT LIST
    let counter = 0;
    for(counter; counter < addSelectOption.length; counter++) {
      if(addSelectOption[counter].selected){
        
        //CREATE NEW OPTION FOR SECOND MULTIPLE SELECTION
        let option = new Option(addSelectOption[counter].text, counter);

        //APPEND THE NEWLY CREATED OPTION TO THE SECOND MULTIPLE SELECTION
        removeSelectOption.appendChild(option);

        //REMOVE FROM MULTIPLE SELECT OPTION THE ADDED ELEMENT
        addSelectOption.remove(counter, null);
      }
    }
  }

  removeOption(addSelectOption, removeSelectOption) {   

    //SEARCH FOR SELECTED OPTIONS IN SECOND MULTIPLE SELECT LIST
    let counter = 0;
    for(counter; counter < removeSelectOption.length; counter++) {
      if(removeSelectOption[counter].selected){
        
        //CREATE NEW OPTION FOR FIRST MULTIPLE SELECTION
        let option = new Option(removeSelectOption[counter].text, counter);

        //APPEND THE NEWLY CREATED OPTION TO THE FIRST MULTIPLE SELECTION
        addSelectOption.appendChild(option);

        //REMOVE FROM MULTIPLE SELECT OPTION THE ADDED ELEMENT
        removeSelectOption.remove(counter, null);
      }
    }
  }
}