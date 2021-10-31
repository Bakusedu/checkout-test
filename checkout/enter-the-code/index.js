var message = document.getElementById('success-otp-alert');
const goBackToVerifyUser = document.getElementById('verify-user');
const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'verify-user',
        }),
        '*'
    );
});

window.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    if (data.variable === 'phone_number') {
        message.innerHTML = `A code has been sent to <strong>${data.phoneNumber}</strong> You
                    should get it within 20 seconds`;
    }
});

goBackToVerifyUser.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'enter-the-code',
            openCheckoutId: 'verify-user',
        }),
        '*'
    );
});
