const data = null;
window.addEventListener('message', function (event) {
    const button = document.getElementById('checkout')[3];
    data = event.data;

    button.innerHTML = 'Pay NGN ' + data;
});

const button = document.getElementById('payment');

button.addEventListener('click', () => {
    console.log(data);
});
