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

function verify() {
    var response = grecaptcha.getResponse();
    if (response.length == 0){
        alert("Please complete the reCAPTCHA.");
        return false;
    }
    return true;
}
