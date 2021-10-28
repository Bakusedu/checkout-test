var data = null;
const url = 'https://sendnodemail.herokuapp.com/';
window.addEventListener('message', function (event) {
    if (event.data.length <= 4) {
        const button = document.getElementById('checkout')[3];
        data = event.data;

        button.innerHTML = 'Pay NGN ' + data;
    }
});

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.top.postMessage('close-window', '*');
});

const button = document.getElementById('payment');

button.addEventListener('click', (event) => {
    event.preventDefault();
    axios({
        method: 'post',
        url: url,
        data: {
            payload: data,
        },
    })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
});
