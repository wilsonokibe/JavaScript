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
      self.changeOption(addSelectOption, removeSelectOption);     
    });

    removeBtn.addEventListener("click", function () {
      self.changeOption(removeSelectOption, addSelectOption);     
    });
  }

  changeOption(selectOption1, selectOption2) {
    let options = selectOption1.selectedOptions;
    for(let i = options.length-1; i >= 0; i--) {
      selectOption2.appendChild(options[i]);
    }
  }
}

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

const newCountry = new Country(addBtn, removeBtn);
newCountry.init();
