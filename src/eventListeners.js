// Module for setting up event listeners on form fields
// Handles blur and input events to trigger validation

import { fields } from './field-config.js';
import { validate } from './validator.js';

// Iterate over each field name to attach event listeners
Object.keys(fields).forEach((name) => {
  const { el, wrap } = fields[name];

  // Function to mark field as touched and validate on first blur
  // const touch = () => {
  //   if (!wrap.classList.contains('touched')) {
  //     wrap.classList.add('touched');
  //     validate(name);
  //   }
  // };

  el.addEventListener('focus', () => {
    wrap.classList.add('touched');
    console.log(wrap.classList);
  });

  // Add blur event listener to mark field as touched
  el.addEventListener('blur', () => {
    validate(name);
    console.log(name, fields[name].el.validity.valid);
  });

  // Add input event listener to validate if field is already touched
  el.addEventListener('input', () => {
    console.log('input fired', name);
    validate(name);
    console.log(validate(name));
  });
});
