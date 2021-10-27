var data = null;
const url = 'https://sendnodemail.herokuapp.com/';
window.addEventListener('message', function (event) {
    const button = document.getElementById('checkout')[3];
    data = event.data;

    button.innerHTML = 'Pay NGN ' + data;
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
