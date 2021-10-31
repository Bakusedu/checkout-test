const completeYourAccount = document.getElementById('complete-your-account');

const email = document.getElementById('email');

completeYourAccount.addEventListener('click', () => {
    if (!email.value || email.value.length < 4) {
        alert('Invalid email');
        return;
    } else {
        window.top.postMessage(
            JSON.stringify({
                closeCheckoutId: 'enter-the-code',
                openCheckoutId: 'complete-your-account',
                email: email.value,
            }),
            '*'
        );
    }
});
