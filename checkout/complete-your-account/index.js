goBackToWhatsYourEmail = document.getElementById('whats-your-email');

const terms = document.getElementById('terms');

const closeBtn = document.getElementById('close-btn');

const addYourCard = document.getElementById('add-your-card');

const fname = document.getElementById('fname');

const lname = document.getElementById('lname');

addYourCard.addEventListener('click', () => {
    const userBio = {
        fname: fname.value,
        lname: lname.value,
    };
    if (terms.checked) {
        if (!fname.value || !lname.value) {
            console.log('Invalid first name or last name');
            return;
        } else {
            window.top.postMessage(
                JSON.stringify({
                    closeCheckoutId: 'complete-your-account',
                    openCheckoutId: 'add-your-card',
                    userBio: userBio,
                }),
                '*'
            );
        }
    }
});

goBackToWhatsYourEmail.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'complete-your-account',
            openCheckoutId: 'whats-your-email',
        }),
        '*'
    );
});

closeBtn.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'complete-your-account',
        }),
        '*'
    );
});
