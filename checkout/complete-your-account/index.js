// const completeYourAccount = document.getElementById('complete-your-account');

const closeBtn = document.getElementById('close-btn');

const goBackToWhatsYourEmail = document.getElementById('whats-your-email');

// completeYourAccount.addEventListener('click', () => {
//     if (!email.value || email.value.length < 4) {
//         alert('Invalid email');
//         return;
//     } else {
//         window.top.postMessage(
//             JSON.stringify({
//                 closeCheckoutId: 'whats-your-email',
//                 openCheckoutId: 'complete-your-account',
//                 email: email.value,
//             }),
//             '*'
//         );
//     }
// });

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
