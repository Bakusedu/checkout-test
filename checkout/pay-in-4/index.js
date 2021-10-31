const verifyUser = document.getElementById('next-verify-user');

verifyUser.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'checkout',
            openCheckoutId: 'verify-user',
        }),
        '*'
    );
});

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'checkout',
        }),
        '*'
    );
});
