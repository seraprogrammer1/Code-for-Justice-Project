
const donateOther = document.getElementById('donate-other');
const otherAmountEnterHolder = document.getElementById('other-amount-enter-holder');
const other_amount_Enter = document.getElementById('other-amount-enter');
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

//verify recaptcha
function verify() {
    var response = grecaptcha.getResponse();
    if (response.length == 0){
        alert("Please complete the reCAPTCHA.");
        return false;
    }
    return true;
}

//maskify. masks the last for digits in a string or array
// function maskify(cc) {
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }
 
// let cnn = document.getElementById("cnn");

// cnn.addEventListener('change', (event) => {
//     console.log(cnn.value);
//     cnn.value = maskify(cnn.value);
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

    if (donateOther.checked){
        if (other_amount_Enter.value.trim() === ''){
            other_amount_Enter.style.border = '2px solid red';
            passed = false;
        } else {
            other_amount_Enter.style.border = '2px solid #ccc';  // Fix the border color here
        }
    }

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


