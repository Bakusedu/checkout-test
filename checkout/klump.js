var data = null;
const url = 'http://sendnodemail.herokuapp.com/';
window.addEventListener('message', function (event) {
    const button = document.getElementById('checkout')[3];
    data = event.data;

    button.innerHTML = 'Pay NGN ' + data;
});

const button = document.getElementById('payment');

button.addEventListener('click', () => {
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
