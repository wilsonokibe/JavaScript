"use strict";  

class Country{
  constructor(addBtn, removeBtn) {
    this.addBtn = addBtn;
    this.removeBtn = removeBtn;
  }

  init() {
    let self = this;
    const addSelectOption = document.getElementById("add_country");
    const removeSelectOption = document.getElementById("remove_country");    
    addBtn.addEventListener("click", function () {
      self.addOption(addSelectOption, removeSelectOption);     
    });

    removeBtn.addEventListener("click", function () {
      self.removeOption(addSelectOption, removeSelectOption);     
    });
  }

  addOption(addSelectOption, removeSelectOption) {  
    let selectId = '';
    let selectText = '';

    for(let i = addSelectOption.options.length-1; i >= 0; i--) {
      if (addSelectOption.options[i].selected == true) {
        selectId = addSelectOption.options[i].value;
        selectText = addSelectOption.options[i].text;
        let newRow = new Option(selectText, selectId);
        removeSelectOption.options[removeSelectOption.length] = newRow;
        addSelectOption.options[i] = null;
      }
    }
  }

  removeOption(addSelectOption, removeSelectOption) {  
    let selectId = '';
    let selectText = '';

    for(let i = removeSelectOption.options.length-1; i >= 0; i--) {
      if(removeSelectOption.options[i].selected == true) {
        selectId = removeSelectOption.options[i].value;
        selectText = removeSelectOption.options[i].text;
        let newRow = new Option(selectText, selectId);
        addSelectOption.options[addSelectOption.options.length] = newRow;
        removeSelectOption.options[i] = null; 
      }
    }
  }
}

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

const newCountry = new Country(addBtn, removeBtn);
newCountry.init();
