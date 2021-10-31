// var message = document.getElementById('success-otp-alert');
window.addEventListener('message', (event) => {
    console.log(event);
    const data = JSON.parse(event.data);
    if (data.variable === 'phone_number') {
        message.innerHTML = `A code has been sent to <strong>${data.phoneNumber}</strong> You
                    should get it within 20 seconds`;
    }
});
