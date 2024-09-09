document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submitBtn');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const termsCheckbox = document.getElementById('terms');
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;
  
    const validateForm = () => {
        const isNameValid = nameInput.value.trim() !== '';
        const isEmailValid = emailPattern.test(emailInput.value);
        const isPhoneValid = phoneInput.value === '' || phonePattern.test(phoneInput.value);
        const isMessageValid = messageInput.value.trim() !== '';
        const isTermsAccepted = termsCheckbox.checked;

        submitBtn.disabled = !(isNameValid && isEmailValid && isPhoneValid && isMessageValid && isTermsAccepted);
    };
  
    form.addEventListener('input', validateForm);
  
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!submitBtn.disabled) {
            alert('Formulário enviado com sucesso!');
            form.reset();
            submitBtn.disabled = true;
        }
    });
});
