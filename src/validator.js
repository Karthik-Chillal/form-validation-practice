// Validation module for form fields
// Contains functions to get error messages and perform validation

import { fields } from './field-config.js';

// Function to get error message based on field name and input validity
export const getError = (name, input) => {
  const v = input.validity;

  // If input is valid, return empty string
  if (v.valid) return '';

  // If custom error is set, return the custom message
  if (v.customError) return input.validationMessage;

  // Switch based on field name to provide specific error messages
  switch (name) {
    case 'email':
      if (v.valueMissing) return 'Email is required';
      if (v.typeMismatch) return 'Enter a valid Email address';
      break;

    case 'country':
      if (v.valueMissing) return 'Please select a country.';
      break;

    case 'postal':
      if (v.valueMissing) return 'Postal is required';
      if (v.tooShort) return 'too short';
      if (v.tooLong) return 'too long';
      if (v.patternMismatch) return 'Enter a valid postal code';
      break;

    case 'password':
      if (v.valueMissing) return 'password is required';
      break;

    case 'confirm':
      if (v.valueMissing) return 'confirm password is required';
      break;
  }
};

// Function to validate a specific field and update UI accordingly
export const validate = (name) => {
  const { el, err, wrap } = fields[name];
  console.log(name, el.validity.valid, el.value);
  // Special validation for confirm password: check if it matches password
  if (name === 'confirm') {
    const pw = fields['password'].el.value;
    el.setCustomValidity(el.value !== pw ? "Passwords don't match" : '');
  }

  // Special validation for country: ensure not 'none'
  if (name === 'country') {
    el.setCustomValidity(el.value === 'none' ? 'Select a Country' : '');
  }

  // Get error message and set it in the error span
  const msg = getError(name, el);
  err.textContent = msg;

  // Toggle CSS classes based on validity
  wrap.classList.toggle('valid', el.validity.valid);
  wrap.classList.toggle('invalid', !el.validity.valid);

  // Return the validity status
  return el.validity.valid;
};
