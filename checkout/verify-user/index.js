const enterTheCode = document.getElementById('enter-the-code');

const phone_number = document.getElementById('phone_number');

enterTheCode.addEventListener('click', () => {
    if (!phone_number.value || phone_number.value.length < 11) {
        console.log('invalid phone number');
        return;
    } else {
        window.top.postMessage(
            JSON.stringify({
                closeCheckoutId: 'verify-user',
                openCheckoutId: 'enter-the-code',
                phoneNumber: phone_number.value,
            }),
            '*'
        );
    }
});

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'verify-user',
        }),
        '*'
    );
});
