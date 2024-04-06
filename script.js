// alert("g");

function adjustStyles() {
    const viewportWidth = window.innerWidth;
  
    
    // const h1Element = document.querySelector('h1');
    // if (viewportWidth < 768) {
    //   h1Element.style.fontSize = '24px';
    // } else if (viewportWidth >= 768 && viewportWidth < 1024) {
    //   h1Element.style.fontSize = '36px';
    // } else {
    //   h1Element.style.fontSize = '48px';
    // }
  
    const h2Element = document.querySelector('h2');
    if (viewportWidth < 301) {
      h2Element.style.paddingTop = '30px';
    } else if (viewportWidth >= 768 && viewportWidth < 1024) {
      h2Element.style.fontSize = '30px';}
    // } else {
    //   h2Element.style.fontSize = '48px';
    // }

    const formElement = document.getElementById("signupForm");
    const buttonElement = document.getElementById("submitButton");
    const h3Element = document.querySelector("h3");
    if (viewportWidth < 650) {
        formElement.style.display = 'flex';
        submitButton.style.marginLeft = "10px"
        h3Element.style.marginRight = "150px"
      } else if (viewportWidth >= 650 && viewportWidth < 1024) {
        formElement.style.display = 'block';
        h3Element.style.marginRight = "461px";
    }


   
  }
  window.addEventListener('load', adjustStyles);
  window.addEventListener('resize', adjustStyles);

document.getElementById('submitButton').addEventListener('click', function() {
  // Get the value of the email input field
  var username = document.getElementById("username").value;
  
  // Display the email in the div with id "displayEmail"
  var displayusernameDiv = document.getElementById("displayUsername");
//   displayusernameDiv.textContent = "Welcome to Koltech: " + username;
displayusernameDiv.textContent = alert("Welcome to Koltech " + username);
  // Show the displayEmailDiv
//   displayusernameDiv.style.display = "block";
  
  // Prevent the form from submitting
  event.preventDefault();
});


