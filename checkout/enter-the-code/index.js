var message = document.getElementById('success-otp-alert');
var code = document.getElementById('otp-code');
const goBackToVerifyUser = document.getElementById('verify-user');
const changePhone = document.getElementById('change-phone');
const closeBtn = document.getElementById('close-btn');


const inputBorder = document.getElementById('input-border');
// Validation
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
code.addEventListener('keyup', () => {
    if (
        !numbers.includes(Number(code.value.slice(-1))) ||
        code.value.length < 6 ||
        code.value.length > 6 ||
        code.value === ''
    ) {
        inputBorder.setAttribute("style", "border-color: red");
        return;
    }

    inputBorder.setAttribute("style", "background-color: black");
    inputBorder.setAttribute("style", "margin-top: 1rem");
    inputBorder.setAttribute("style", "margin-bottom: 1rem");

    if (code.value.length >= 6) {
        window.top.postMessage(
            JSON.stringify({
                closeCheckoutId: 'enter-the-code',
                openCheckoutId: 'whats-your-email',
                code: code.value,
            }),
            '*'
        );
    }
});
// Validation Ends

closeBtn.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'enter-the-code',
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

changePhone.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'enter-the-code',
            openCheckoutId: 'verify-user',
        }),
        '*'
    );
});

code.addEventListener('keyup', () => {
    if (code.value.length >= 6) {
        window.top.postMessage(
            JSON.stringify({
                closeCheckoutId: 'enter-the-code',
                openCheckoutId: 'whats-your-email',
                code: code.value,
            }),
            '*'
        );
    }
});
