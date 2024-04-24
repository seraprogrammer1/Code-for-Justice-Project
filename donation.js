// Donation page 

// const creditCard_Radio = document.getElementById('creditCard');
// const paypal_Radio = document.getElementById('paypal');
// const cardInfo = document.getElementById('cardInfo');

// creditCard_Radio.addEventListener('change', (event) => {
//     if (event.target.checked){
//         cardInfo.style.display = 'block';
//     } else {
//         cardInfo.style.display = 'none';
//     }
// });

// paypal_Radio.addEventListener('change', (event) => {
//     if (event.target.checked){
//         cardInfo.style.display = 'none';
//     } else {
//         cardInfo.style.display = 'block';
//     }
// });

const donateOther = document.getElementById('donate-other');
const otherAmountEnterHolder = document.getElementById('other-amount-enter-holder');
const radioOthers = document.getElementsByClassName('radio-other');

donateOther.addEventListener('change', (event) => {
    console.log(event.target.checked);
    if (event.target.checked){
        otherAmountEnterHolder.style.display = 'block';
    } else {
        otherAmountEnterHolder.style.display = 'none';
    }
});

for (let i = 0; i < radioOthers.length; i++){
    let element = radioOthers[i];
    element.addEventListener('change', (event) => {
        console.log(event.target.checked);
        if (event.target.checked){
            otherAmountEnterHolder.style.display = 'none';
        } else {
            otherAmountEnterHolder.style.display = 'block';
        }
    });
}

function verify() {
    var response = grecaptcha.getResponse();
    if (response.length == 0){
        alert("Please complete the reCAPTCHA.");
        return false;
    }
    return true;
}
