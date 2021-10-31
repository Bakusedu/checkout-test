const verifyUser = document.getElementById('next-verify-user');

verifyUser.addEventListener('click', (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'checkout',
            openCheckoutId: 'verify-user',
        }),
        '*'
    );
});

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', (event) => {
    const data = JSON.parse(event.data);
    console.log(data);
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'checkout',
        }),
        '*'
    );
});

window.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    if (data.variable === 'phone_number') {
        alert(data.phoneNumber);
    }
});
