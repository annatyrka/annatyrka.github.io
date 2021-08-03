function validateForm() {

  let name = document.forms["survey-form"]["name"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
}

