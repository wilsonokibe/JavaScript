function selectToggle(toggle, form) {
  var theForm = document.forms[form];
  for (var i = 0; i < theForm.length; i++) {
    if(toggle) {
      theForm.elements[i].checked = true;
    }else {
      theForm.elements[i].checked = false;
    }
  }
}