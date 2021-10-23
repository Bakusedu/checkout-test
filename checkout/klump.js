const form = document.getElementById('checkout');
form.addEventListener('submit', (event) => {
    alert('form has been submitted');
    event.preventDefault();
});
