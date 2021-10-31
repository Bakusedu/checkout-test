const closeBtn = document.getElementById('close-btn');

var avatar = document.getElementById('avatar');

var email = document.getElementById('email');

closeBtn.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'add-your-card',
        }),
        '*'
    );
});

window.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    console.log(data.user.fname.charAt[0]);
    avatar.value = data.user.fname.charAt[0];
    email.value = data.user.email;
});
