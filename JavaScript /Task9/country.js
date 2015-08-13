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
      self.swapOption(addSelectOption, removeSelectOption);     
    });

    removeBtn.addEventListener("click", function () {
      self.swapOption(removeSelectOption, addSelectOption);     
    });
  }

  swapOption(selectOption1, selectOption2) {  
    let selectId = '';
    let selectText = '';

    for(let i = selectOption1.options.length-1; i >= 0; i--) {
      if (selectOption1.options[i].selected == true) {
        selectId = selectOption1.options[i].value;
        selectText = selectOption1.options[i].text;

        let newRow = new Option(selectText, selectId);
        
        selectOption2.options[selectOption2.length] = newRow;
        selectOption1.options[i] = null;
      }
    }
  }
}

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

const newCountry = new Country(addBtn, removeBtn);
newCountry.init();
