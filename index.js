// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name && email) {
        alert(`Thank you, ${name}! We have received your contact details.`);
        document.getElementById('contact-form').reset(); // Reset form
    } else {
        alert('Please fill in both fields.');
    }
});

