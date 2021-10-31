const closeBtn = document.getElementById('close-btn');

var avatar = document.getElementById('avatar');

var email = document.getElementById('email');

var fullName = document.getElementById('fullName');

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
    avatar.innerHTML = data.user.fname.charAt(0);
    fullName.innerHTML = data.user.fname + ' ' + data.user.lname;
    email.innerHTML = data.user.email;
});
