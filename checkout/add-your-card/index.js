const closeBtn = document.getElementById('close-btn');

var avatar = document.getElementById('avatar');

var email = document.getElementById('email');

var fullName = document.getElementById('fullName');

var continueButton = document.getElementById('next-verify-user');

var cardNumber = document.getElementById('card_number');
var cardDate = document.getElementById('card_date');
var cvv = document.getElementById('cvv');

// Validation
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var inputs = [];
cardNumber.addEventListener('keyup', () => {
    if (
        !numbers.includes(Number(cardNumber.value.slice(-1))) ||
        cardNumber.value.length < 16 ||
        cardNumber.value.length > 16 ||
        cardNumber.value === ''
    ) {
        inputs[0] = { card_number: '' };
        validate(inputs)
        return;
    }
    inputs[0] = ({ card_number: cardNumber.value })
    validate(inputs)
});
cardDate.addEventListener('keyup', () => {
    if (
        !numbers.includes(Number(cardDate.value.slice(-1))) ||
        cardDate.value.length < 4 ||
        cardDate.value.length > 4 ||
        cardDate.value === ''
    ) {
        inputs[1] = { card_date: '' };
        validate(inputs)
        return;
    }
    inputs[1] = ({ card_date: cardDate.value })
    validate(inputs)
});
cvv.addEventListener('keyup', () => {
    if (
        !numbers.includes(Number(cvv.value.slice(-1))) ||
        cvv.value.length < 3 ||
        cvv.value.length > 3 ||
        cvv.value === ''
    ) {
        inputs[2] = { cvv: '' };
        validate(inputs)
        return;
    }
    inputs[2] = ({ cvv: cvv.value })
    validate(inputs)
});
function validate(inputs) {
    if (inputs.length === 3) {
        for (let index = 0; index < inputs.length; index++) {
            if (Object.values(inputs[index])[0] !== '') {
                continueButton.setAttribute("style", "background-color: black");
            } else {
                continueButton.setAttribute("style", "background-color: #6B7280");
                return;
            }  
        }
    };
}
// Validation Ends

closeBtn.addEventListener('click', () => {
    console.log('hi')
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
    email.innerHTML = data.email;
});
