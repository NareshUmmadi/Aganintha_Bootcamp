

function sendData() {
 
const emailInput=document.getElementById('email');
const errorPara=document.getElementById('para');
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        errorPara.style.display = 'block';
    } else {
        errorPara.style.display = 'none';
        // You can perform further actions here on valid email input
    }
}

