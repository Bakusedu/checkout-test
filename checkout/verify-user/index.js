const enterTheCode = document.getElementById('enter-the-code');

const phone_number = document.getElementById('phone_number');

// Validation
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
phone_number.addEventListener('keyup', () => {
    if (
        !numbers.includes(Number(phone_number.value.slice(-1))) ||
        phone_number.value.length < 11 ||
        phone_number.value.length > 11 ||
        phone_number.value === ''
    ) {
        enterTheCode.disabled = true;
        enterTheCode.setAttribute("style", "background-color: #6B7280");
        return;
    }
    enterTheCode.disabled = false;
    enterTheCode.setAttribute("style", "background-color: black");
    enterTheCode.addEventListener('click', () => {
        console.log(phone_number.value)
        window.top.postMessage(
            JSON.stringify({
                closeCheckoutId: 'verify-user',
                openCheckoutId: 'enter-the-code',
                phoneNumber: phone_number.value,
            }),
            '*'
        );
    });
});
// Validation Ends

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'verify-user',
        }),
        '*'
    );
});
