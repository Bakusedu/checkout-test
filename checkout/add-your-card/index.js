const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'add-your-card',
        }),
        '*'
    );
});

window.addEventListener('message', (event) => {
    console.log(event);
});
