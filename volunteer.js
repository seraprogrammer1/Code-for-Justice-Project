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

let inputs = document.querySelectorAll('.required');

const small_gray_p_tag = document.getElementById('small-gray-p-tag');
const large_gray_p_tag = document.getElementById('large-red-p-tag');

function verify() {
    let passed = true;

    for (let i = 0; i < inputs.length; i++){
        let element = inputs[i];
        if (element.value.trim() === ''){
            element.style.border = '2px solid red';
            passed = false;
        } else {
            element.style.border = '2px solid #ccc';  // Fix the border color here
        }
    }
    
    var response = grecaptcha.getResponse();
    if (passed){
        small_gray_p_tag.style.display = 'inline';
        large_gray_p_tag.style.display = 'none';
    }else{
        small_gray_p_tag.style.display = 'none';
        large_gray_p_tag.style.display = 'inline';
    }

    if ( passed !== false && response.length == 0){
        alert("Please complete the reCAPTCHA.");
        return false;
    }

    return passed;
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let verification = verify();
    if (verification === false){
        console.log('the form did not pass all tests');
    } else {
        console.log('the form passed all tests');

        let formData = {};
        for (let i = 0; i < inputs.length; i++) {
            let element = inputs[i];
            formData[element.name] = element.value;
        }
        
        // Display form data as an alert
        alert(JSON.stringify(formData));
    }
});