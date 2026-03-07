document.getElementById('signin_btn').addEventListener('click', function () {
  //1.get the user number 
  const inputNumber = document.getElementById('input_number');
  const contactNumber = inputNumber.value;
  console.log(contactNumber)
  //2.get the password
  const inputPin = document.getElementById('input_pin');
  const pin = inputPin.value;
  console.log(pin)
  //3.match the number and pin 
  if (contactNumber == "admin" && pin== "admin123"){
  // 3.1 true:::>alert>homepage
    alert("sign in successfully")
    // after sign in go to home page
    window.location.assign("/home.html")
}
  else {
   //3.2 false:::>alert>return
    alert('sign in failed');
    return;
  }
 })