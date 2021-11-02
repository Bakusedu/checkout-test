goBackToWhatsYourEmail = document.getElementById('whats-your-email');

const terms = document.getElementById('terms');

const closeBtn = document.getElementById('close-btn');

const addYourCard = document.getElementById('add-your-card');

const fname = document.getElementById('fname');

const lname = document.getElementById('lname');
const dob = document.getElementById('dob');


// Validation begins
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var allInputFields = document.getElementsByTagName('input');
var termsValue;

const inputs = [];
for (let index = 0; index < allInputFields.length; index++) {
    // gets all inputs' ids
    let field = document.getElementById(allInputFields[index].id);
    field.addEventListener('keyup', () => {
        if (field.value === '') {
            inputs[index] = { field: '' };
            validate(inputs)
            return;
        }
        inputs[index] = { field: field.value };
        validate(inputs)
    });
}
dob.addEventListener('change', () => {
    if (dob.value === '') {
        inputs[inputs.length] = { dob: '' };
        validate(inputs)
        return;
    }
    inputs[inputs.length] = ({ dob: dob.value })
    validate(inputs)
});
terms.addEventListener('click', () => {
    if (!terms.checked) {
        termsValue = terms.checked;
        validate(inputs)
        return;
    }
    termsValue = terms.checked;
    validate(inputs)
});
function validate(inputs) {
    if (inputs.length >= 8) {
        for (let index = 0; index < inputs.length; index++) {
            if (Object.values(inputs[index])[0] !== '' && termsValue) {
                addYourCard.setAttribute("style", "background-color: black");
            } else {
                addYourCard.setAttribute("style", "background-color: #6B7280");
                return;
            }
        }
        addYourCard.addEventListener('click', () => {
            const userBio = {
                fname: fname.value,
                lname: lname.value,
            };
            window.top.postMessage(
                JSON.stringify({
                    closeCheckoutId: 'complete-your-account',
                    openCheckoutId: 'add-your-card',
                    userBio: userBio,
                }),
                '*'
            );
        });
    };
}
// Validation Ends

goBackToWhatsYourEmail.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'complete-your-account',
            openCheckoutId: 'whats-your-email',
        }),
        '*'
    );
});

closeBtn.addEventListener('click', () => {
    window.top.postMessage(
        JSON.stringify({
            closeCheckoutId: 'complete-your-account',
        }),
        '*'
    );
});
