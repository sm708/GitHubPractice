    // JavaScript code for form validation
    const form = document.getElementById('myForm');
    const inputField = document.getElementById('inputField');
    const message = document.createElement('p');
    form.appendChild(message);

    // Add event listener
    form.addEventListener('submit', function(event) {

    
    // Prevent form from submitting
      event.preventDefault();

      // Retrieve the input field value
        const inputValue = inputField.value.trim();

      // Regular expression pattern for alphanumeric input
        const alphaNumPattern = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
        if (alphaNumPattern.test(inputValue)) {
          // Valid input: display confirmation and submit the form
          message.textContent = 'Your form has been successfully submitted.';
          message.style.color = 'green';
        } else {
          // Invalid input: display error message
          message.textContent = 'Error: Enter only alphanumeric characters (A-Z, 0-9).';
          message.style.color = 'red';
        }
      
      });



        

