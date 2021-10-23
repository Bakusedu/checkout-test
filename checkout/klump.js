class KlumpPopUp {
    email = null;
    amount = null;
    flag = false;
    key = '123';
    constructor(public_key, email, amount) {
        this.flag = this.key === public_key ? true : false;
        this.email = email;
        this.amount = amount;
    }

    payWithKlump() {
        if (this.flag && this.email && this.amount) {
            const body = document.getElementsByTagName('body')[0];
            const iFrame = document.createElement('iframe');
            iFrame.setAttribute(
                'src',
                'https://elastic-kilby-0d4f88.netlify.app'
            );
            body.appendChild(iFrame);
        }
    }
}
