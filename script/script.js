"use strict";

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const inputArray=[username,email,password,confirmPassword]

const showError = function(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

  const showSuccess= function(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

const isValidEmail = function (input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(input).toLowerCase());
};


 const checkEmail=function(input) {
 const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

const checkRequired = function(inputArr)
 {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    }
     else {
      showSuccess(input);
    }
  });
 return isRequired;
}

const checkLength = function (input, min, max) {
  if (input.value.length < min) {
    showError(input, `${message(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${message(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
};


 const checkPasswordsMatch = function(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

const message = function (input) {
  var errorMessage = input.id.replace(/-p/, ' P');
  return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
};

 const getFieldName = function(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
 form.addEventListener('submit', (e) => {
  e.preventDefault();

  if(!checkRequired([username, email, password, confirmPassword]))
  {
   checkEmail(email);
   checkPasswordsMatch(password, confirmPassword);
  }
});
