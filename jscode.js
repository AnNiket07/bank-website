function validation()
{
  var username = document.getElementById("name");
  var password = document.getElementById("pass");

  if(username.value=="" || password.value==""){
    alert("no blank values allowed");
    return false;
  }
  else {
    true;
  }
}
