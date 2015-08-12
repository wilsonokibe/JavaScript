"use strict";  

class Table {  
  constructor(newTableButtonId) {
    this.newTableButtonId = newTableButtonId;
  }

  init() {
    let self = this;
    this.createTableHeader();
  }

  createTableHeader() {
    const centre = "centre";
    const nameField = this.createHeaderText("Name");
    const emailField = this.createHeaderText("Email");
    const addRowButton = this.createButton("Add Row");
    
    const table = document.createElement("table");
    const tableHead = table.createTHead(); 
    table.setAttribute("class", centre);
    table.appendChild(tableHead);
    this.createNewRow(tableHead);
    this.appendRow(tableHead, nameField, emailField, addRowButton);

    //APPEND TABLE TO DOCUMENT BODY
    container.insertBefore(table, container.childNodes[0]); 
    newTableButton.style.display = "none";

    this.addRowClick(tableHead, addRowButton);
  }

  addRowClick(tableHead, addRowButton) {
    let self = this;
    addRowButton.addEventListener("click", function() {
      const nameInput = self.createInputField();
      const emailInput = self.createInputField();
      const saveRowButton = self.createButton("Save");
      self.createNewRow(tableHead);
      self.appendRow(tableHead, nameInput, emailInput, saveRowButton);

      let rowCount = tableHead.rows.length;
      self.buttonVisibility("none", addRowButton);
      self.saveRow(tableHead, rowCount, nameInput, emailInput, saveRowButton, addRowButton);
    })
  }

  saveRow(table, rowCount, nameInput, emailInput, saveButton, addRowButton) {
    let self = this;
    saveButton.addEventListener("click", function() { 
      let row = table.rows[rowCount-1]; 
      let nameText = self.nameText(nameInput.value);     
      let emailText = self.nameText(emailInput.value);

      if(self.validateNameInputField(nameInput)) {
        if(self.validateEmailInputField(emailInput)) {
          row.cells[0].replaceChild(nameText, nameInput);
          row.cells[1].replaceChild(emailText, emailInput);      
          self.buttonVisibility("block", addRowButton);
          self.replaceSaveButtons(table, rowCount-1, this, nameText, emailText, addRowButton);          
        }
      }
    })
  }

  validateEmptyInputField(value, fieldName) {
    if(value == '' || value.match(/^ *$/) !== null) {
      alert(`Please enter valid ${fieldName} field`);
      return false;
    } else {  return true  };
  }

  validateNameInputField(nameInput) {
    let result = this.validateEmptyInputField(nameInput.value, "name");
    if(result) {
      if(nameInput.value.match(/^[a-zA-Z\s]+$/)) {  return true;  }
      else {          
        alert(`Please enter valid name format`);
        return false; 
      }
    } else {  return result;  }
  }

  validateEmailInputField(emailInput, eventValue) {
    let result = this.validateEmptyInputField(emailInput.value, "email");
    if(result) {
      if(emailInput.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {  return true } 
      else {
        alert(`Please enter valid email format`);
        return false;
      }
      return true;
    } else {  return result;  }
  }

  replaceSaveButtons(table, rowCount, saveRow, nameText, emailText, addRowButton) {    
    let self = this;
    const editButton = self.createButton("Edit");
    const deleteButton = self.createButton("Delete");
    editButton.setAttribute("class", rowCount);
    deleteButton.setAttribute("class", rowCount);
    table.rows[rowCount].cells[2].replaceChild(editButton, saveRow);
    table.rows[rowCount].cells[2].appendChild(deleteButton);
    self.deleteClick(deleteButton, table);
    self.switchToEditMode(editButton, table, nameText, emailText, addRowButton, deleteButton);
  }

  switchToEditMode(editButton, table, nameText, emailText, addRowButton, deleteButton) {
    let self = this;
    let buttonClass = editButton.className;
    let nameValue = table.rows[buttonClass].cells[0].innerHTML;
    let emailValue = table.rows[buttonClass].cells[1].innerHTML;
    let nameInput = this.createInputField();
    let emailInput = this.createInputField();
    editButton.addEventListener("click", function() {     
      const saveButtonInsideEdit = self.createButton("Save");     
      self.buttonVisibility("none", addRowButton);
      self.buttonVisibility("none", editButton);
      self.buttonVisibility("none", deleteButton);
      
      buttonClass = Number(buttonClass);      
      nameInput.value = nameValue;
      emailInput.value = emailValue;

      //SWITCH FROM LABEL TO INPUT
      self.switchToTextField(table, nameInput, nameText, buttonClass, 0);
      self.switchToTextField(table, emailInput, emailText, buttonClass, 1);
      table.rows[buttonClass].cells[2].appendChild(saveButtonInsideEdit);

      //validate input on save click
      buttonClass += 1;      
      self.saveRow(table, buttonClass, nameInput, emailInput, saveButtonInsideEdit, addRowButton);
    });
  }

  switchToTextField(table, InputField, TextField, buttonClass, index) {    
    table.rows[buttonClass].cells[index].replaceChild(InputField, TextField);
  }

  deleteClick(deleteButton, table) {
    deleteButton.addEventListener("click", function(){      
      let deleteConfirm = confirm("Are you sure?");
      if(deleteConfirm){
        var row = deleteButton.parentNode.parentNode;
        row.parentNode.removeChild(row);
      }        
    })
  }

  createNewRow(tableHead) {
    const rowCount = tableHead.rows.length;
    let row = tableHead.insertRow(rowCount);
    let nameField = tableHead.rows[rowCount].insertCell(0);
    let emailField = tableHead.rows[rowCount].insertCell(1);
    tableHead.rows[rowCount].insertCell(2); 
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

  appendRow(tableHead, nameField, emailField, addRowButton) {
    let self = this;
    const rowCount = tableHead.rows.length;
    tableHead.rows[rowCount-1].cells[0].appendChild(nameField);
    tableHead.rows[rowCount-1].cells[1].appendChild(emailField);    
    tableHead.rows[rowCount-1].cells[2].appendChild(addRowButton);
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
