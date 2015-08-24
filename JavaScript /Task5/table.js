"use strict";  

class Table {  
  constructor(newTableButtonId) {
    this.newTableButtonId = newTableButtonId;
  }

  init() {
    this.createTableHeader();
  }

  createTableHeader() {
    const nameField = this.createHeaderText("Name");
    const emailField = this.createHeaderText("Email");
    const addRowButton = this.createButton("Add Row");
    
    const table = document.createElement("table");
    this.tableHead = table.createTHead(); 
    table.setAttribute("class", "centre");
    table.appendChild(this.tableHead);
    this.createNewRow();
    this.appendRow(nameField, emailField, addRowButton);

    //APPEND TABLE TO DOCUMENT BODY
    container.insertBefore(table, container.childNodes[0]); 
    newTableButton.style.display = "none";

    this.addRowClick(addRowButton);
  }

  addRowClick(addRowButton) {
    let self = this;
    addRowButton.addEventListener("click", function() {
      const nameInput = self.createInputField();
      const emailInput = self.createInputField();
      const saveRowButton = self.createButton("Save");
      self.createNewRow();
      self.appendRow(nameInput, emailInput, saveRowButton);
      self.buttonVisibility("none", addRowButton);
      self.saveRow(nameInput, emailInput, saveRowButton, addRowButton);
    })
  }

  saveRow(nameInput, emailInput, saveButton, addRowButton) {
    let self = this;
    let rowCount = self.tableHead.rows.length
    saveButton.addEventListener("click", function() { 
      let row = self.tableHead.rows[rowCount-1]; 
      let nameText = self.nameText(nameInput.value);     
      let emailText = self.nameText(emailInput.value);

      if(self.validateNameInputField(nameInput)) {
        if(self.validateEmailInputField(emailInput)) {
          row.cells[0].replaceChild(nameText, nameInput);
          row.cells[1].replaceChild(emailText, emailInput);      
          self.buttonVisibility("block", addRowButton);
          self.replaceSaveButtons(this, nameText, emailText, addRowButton);          
        }
      }
    })
  }

  validateEmptyInputField(value, fieldName) {
    if(value == null || value.trim() == '') {
      alert(`Please enter valid ${fieldName} field`);
      return false;
    } else {return true;};
  }

  validateNameInputField(nameInput) {
    let result = this.validateEmptyInputField(nameInput.value, "name");
    if(result) {
      if(nameInput.value.match(/^[a-zA-Z\s]+$/)) {  return true;  }
      else {          
        alert(`Please enter valid name format`);
        return false; 
      }
    } else {return result;}
  }

  validateEmailInputField(emailInput, eventValue) {
    let result = this.validateEmptyInputField(emailInput.value, "email");
    if(result) {
      if(emailInput.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {return true;} 
      else {
        alert(`Please enter valid email format`);
        return false;
      }
      return true;
    } else {return result;}
  }

  replaceSaveButtons(saveRow, nameText, emailText, addRowButton) {    
    let self = this;
    let row = self.tableHead.rows.length;
    this.editButton = self.createButton("Edit");
    this.deleteButton = self.createButton("Delete");
    this.editButton.setAttribute("class", row-1);
    this.deleteButton.setAttribute("class", row-1);
    this.tableHead.rows[row-1].cells[2].replaceChild(this.editButton, saveRow);
    this.tableHead.rows[row-1].cells[2].appendChild(this.deleteButton);
    self.deleteClick(this.deleteButton);
    self.switchToEditMode(nameText, emailText, addRowButton);
  }

  switchToEditMode(nameText, emailText, addRowButton) {
    let self = this;
    let buttonClass = this.editButton.className;
    let nameValue = this.tableHead.rows[buttonClass].cells[0].innerHTML;
    let emailValue = this.tableHead.rows[buttonClass].cells[1].innerHTML;
    let nameInput = this.createInputField();
    let emailInput = this.createInputField();
    this.editButton.addEventListener("click", function() {     
      const saveButtonInsideEdit = self.createButton("Save");     
      self.buttonVisibility("none", addRowButton);
      self.buttonVisibility("none", self.editButton);
      self.buttonVisibility("none", self.deleteButton);
      
      buttonClass = Number(buttonClass);      
      nameInput.value = nameValue;
      emailInput.value = emailValue;

      //SWITCH FROM LABEL TO INPUT
      self.switchToTextField(nameInput, nameText, buttonClass, 0);
      self.switchToTextField(emailInput, emailText, buttonClass, 1);
      self.tableHead.rows[buttonClass].cells[2].appendChild(saveButtonInsideEdit);

      //validate input on save click
      buttonClass += 1;      
      self.saveRow(nameInput, emailInput, saveButtonInsideEdit, addRowButton);
    });
  }

  switchToTextField(InputField, TextField, buttonClass, index) {    
    this.tableHead.rows[buttonClass].cells[index].replaceChild(InputField, TextField);
  }

  deleteClick() {
    let self = this;
    this.deleteButton.addEventListener("click", function(){      
      let deleteConfirm = confirm("Are you sure?");
      if(deleteConfirm){
        var row = self.deleteButton.parentNode.parentNode;
        row.parentNode.removeChild(row);
      }        
    })
  }

  createNewRow() {
    const rowCount = this.tableHead.rows.length;
    let row = this.tableHead.insertRow(rowCount);
    let nameField = this.tableHead.rows[rowCount].insertCell(0);
    let emailField = this.tableHead.rows[rowCount].insertCell(1);
    this.tableHead.rows[rowCount].insertCell(2); 
    row.setAttribute("class", rowCount);  
    nameField.setAttribute("class", "name");
    emailField.setAttribute("class", "email");
  }

  nameText(value) {
    const nameValue = value;    
    let nameText = document.createTextNode(nameValue);   
    return nameText;
  }

  createHeaderText(name) {
    const result = document.createTextNode(name);
    return result;
  }

  appendRow(nameField, emailField, addRowButton) {
    const rowCount = this.tableHead.rows.length;
    this.tableHead.rows[rowCount-1].cells[0].appendChild(nameField);
    this.tableHead.rows[rowCount-1].cells[1].appendChild(emailField);    
    this.tableHead.rows[rowCount-1].cells[2].appendChild(addRowButton);
  }

  createButton(buttonText) {
    let button = document.createElement("button");
    button.innerHTML = buttonText;
    return button;
  }

  createInputField() {
    let name = document.createElement("input");
    name.type = "text";
    return name;
  }

  buttonVisibility(value, buttonName) {
    buttonName.style.display = value;
  }
}

const newTableButton = document.getElementById("newTableButton");
newTableButton.addEventListener("click", function (){
  const table = new Table();
  table.init();
})
