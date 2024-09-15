document.getElementById('contact_form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
    
    alert('Message Sent');

    document.getElementById('contact_form').reset();
});

