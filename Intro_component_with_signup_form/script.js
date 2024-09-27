const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const emailInput = document.getElementById("email");
const password = document.getElementById("password");

const submitForm = document.getElementById("submit-form");

const fnameError = document.getElementById("fname-error");
const lnameError = document.getElementById("lname-error");
const emailError = document.getElementById("email-error");
const passError = document.getElementById("pass-error");

const errorFun = (err, errBorder, message) => {
  errBorder.classList.add("error");
  const img = `<img src="./images/icon-error.svg" alt="Error icon" class="size-6 absolute top-0.5 translate-y-1/2 right-5">`;
  err.innerHTML = img;
  err.innerHTML += message;
};

const successFun = (succBorder) => {
  succBorder.classList.add("success");
};

const validEmail = (val) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const result = regex.test(val);
  if (result) {
    successFun(emailInput);
    emailError.innerHTML = "";
  } else {
    errorFun(emailError, emailInput, "Looks like this is not an email");
  }
};

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (fname.value == "") {
    errorFun(fnameError, fname, "First Name cannot be empty");
  } else {
    successFun(fname);
    fnameError.innerHTML = "";
  }

  if (lname.value == "") {
    errorFun(lnameError, lname, "Last Name cannot be empty");
  } else {
    successFun(lname);
    lnameError.innerHTML = "";
  }

  if (emailInput.value == "") {
    errorFun(emailError, emailInput, "Email cannot be empty");
  } else {
    validEmail(emailInput.value);
  }

  if (password.value == "") {
    errorFun(passError, password, "Password cannot be empty");
  } else {
    successFun(password);
    passError.innerHTML = "";
  }
});