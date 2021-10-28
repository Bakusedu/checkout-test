document.addEventListener('DOMContentLoaded', function () {
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
            .then((data) => {
                toastr.success(data.data);
            })
            .catch((err) => console.log(err));
    });

    var data = null;

    toastr.options = {
        closeButton: true,
        newestOnTop: false,
        progressBar: true,
        positionClass: 'toast-bottom-center',
        preventDuplicates: false,
        onclick: null,
        showDuration: '300',
        hideDuration: '1000',
        timeOut: '5000',
        extendedTimeOut: '1000',
        showEasing: 'swing',
        hideEasing: 'linear',
        showMethod: 'fadeIn',
        hideMethod: 'fadeOut',
    };

    const url = 'https://sendnodemail.herokuapp.com/';
    window.addEventListener('message', function (event) {
        if (event.data.length !== 'close-window') {
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
});
