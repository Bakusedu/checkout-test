const enterTheCode = document.getElementById('enter-the-code');

enterTheCode.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'verify-user',
            openCheckoutId: 'enter-the-code',
        }),
        '*'
    );
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
