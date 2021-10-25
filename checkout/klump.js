class KlumpPopUp {
    key = '123';
    constructor(public_key, amount) {
        this.flag = this.key === public_key ? true : false;
        this.amount = amount;
    }

    payWithKlump() {
        if (this.flag) {
            const body = document.getElementsByTagName('body')[0];
            this.iframe = document.createElement('iframe');
            this.iframe.setAttribute(
                'src',
                'https://elastic-kilby-0d4f88.netlify.app'
            );
            this.iframe.style.cssText =
                '\nbackground: transparent;\nbackground: rgba(0,0,0,0.005);\nborder: 0px none transparent;\noverflow-x: hidden;\noverflow-y: hidden;\nmargin: 0;\npadding: 0;\n-webkit-tap-highlight-color: transparent;\n-webkit-touch-callout: none; position: fixed;\nleft: 0;\ntop: 0;\nwidth: 100%;\nheight: 100%;)';
            body.appendChild(this.iframe);
            this.iframe.onload = function () {
                this.iframe.contentWindow.postMessage('communication', '*');
                this.setTransaction();
            };
        }
    }

    setTransaction() {
        window.addEventListener('message', function (event) {
            console.log(this.iframe.contentDocument.getElementById('payment'));
        });
    }
}
