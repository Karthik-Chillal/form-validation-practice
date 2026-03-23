import { fields } from './field-config.js';

export const getError = (name, input) => {
  const v = input.validity;

  if (v.valid) return '';

  if (v.customError) return input.validationMessage;

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

export const validate = (name) => {
  const { el, err, wrap } = fields[name];
  if (name === 'confirm') {
    const pw = fields['password'].el.value;
    el.setCustomValidity(el.value !== pw ? "Passwords don't match" : '');
  }
  if (name === 'country') {
    el.setCustomValidity(el.value === 'none' ? 'Select a Country' : '');
  }
  console.log({ err });
  const msg = getError(name, el);
  err.textContent = msg;

  wrap.classList.toggle('valid', el.validity.valid);
  wrap.classList.toggle('invalid', !el.validity.valid);

  return el.validity.valid;
};
