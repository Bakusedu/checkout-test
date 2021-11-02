const completeYourAccount = document.getElementById('complete-your-account');

const closeBtn = document.getElementById('close-btn');

const email = document.getElementById('email');

const goBackToEnterTheCode = document.getElementById('enter-the-code');


// Validation
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

email.addEventListener('keyup', () => {
    if (
        email.value === '' ||
        !emailRegex.exec(email.value)
    ) {
        completeYourAccount.disabled = true;
        completeYourAccount.setAttribute("style", "background-color: #6B7280");
        return;
    }
    completeYourAccount.disabled = false;
    completeYourAccount.setAttribute("style", "background-color: black");
    completeYourAccount.addEventListener('click', () => {
        window.top.postMessage(
            JSON.stringify({
                closeCheckoutId: 'whats-your-email',
                openCheckoutId: 'complete-your-account',
                email: email.value,
            }),
            '*'
        );
    });
});
// Validation Ends

goBackToEnterTheCode.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'whats-your-email',
            openCheckoutId: 'enter-the-code',
        }),
        '*'
    );
});

closeBtn.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'verify-user',
        }),
        '*'
    );
});
