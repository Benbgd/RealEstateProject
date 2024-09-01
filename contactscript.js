document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    let name = document.getElementById('name').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();
    let address = document.getElementById('address').value.trim();
    let description = document.getElementById('description').value.trim();

    // Validate form fields
    if (!name || !phone || !email || !address || !description) {
        alert('Please fill in all required fields.');
        return;
    }


    alert('Form is submitted successfully. We will get in touch soon.');

   
    let formData = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nDescription: ${description}\n\n`;
    
   
    console.log(formData);

    // Optionally, reset the form after submission
    document.getElementById('contactForm').reset();
});

function login() {
    alert('Login functionality is not implemented yet.');
}
