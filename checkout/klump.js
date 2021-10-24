class KlumpPopUp {
    key = '123';
    constructor(public_key, amount) {
        this.flag = this.key === public_key ? true : false;
        this.amount = amount;
    }

    payWithKlump() {
        if (this.flag) {
            const body = document.getElementsByTagName('body')[0];
            const iFrame = document.createElement('iframe');
            iFrame.setAttribute(
                'src',
                'https://elastic-kilby-0d4f88.netlify.app'
            );
            iFrame.style.cssText =
                '\nbackground: transparent;\nbackground: rgba(0,0,0,0.005);\nborder: 0px none transparent;\noverflow-x: hidden;\noverflow-y: hidden;\nmargin: 0;\npadding: 0;\n-webkit-tap-highlight-color: transparent;\n-webkit-touch-callout: none; position: fixed;\nleft: 0;\ntop: 0;\nwidth: 100%;\nheight: 100%;)';
            body.appendChild(iFrame);
            console.log(
                iFrame.contentWindow.document.getElementsByTagName('button')[0]
            );
        }
    }
}
