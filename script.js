let loginForm = document.querySelector('.login-form-container');

// మీ హెడర్ లోని లాగిన్ ఐకాన్/బటన్ ఐడి ఇక్కడ ఇవ్వండి
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

// క్లోజ్ బటన్ నొక్కినప్పుడు క్లోజ్ అవ్వడానికి
document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}