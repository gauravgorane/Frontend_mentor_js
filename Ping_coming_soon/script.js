// "Whoops! It looks like you forgot to add your email"
//  "Please provide a valid email address"
const form = document.getElementById("input-section");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

const isValid = (mail) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result = regex.test(mail);

    if (result) {
        return emailError.innerHTML = `<p class="succes-msg">Thank you for subscription</p>`, email.style.borderColor = 'green';
    }
    else {
        email.classList.toggle = 'error';
        return emailError.innerHTML = `<p class="error-msg">Please provide a valid email address</p>`, email.style.borderColor = 'red';
    }
}

form.addEventListener("submit", e => {
    e.preventDefault();
    email.blur();
    if (email.value === '') {
        return emailError.innerHTML = `<p class="error-msg">Whoops! It looks like you forgot to add your email</p>`, email.style.borderColor = 'red';
    }
    else {
        isValid(email.value);
    }
})