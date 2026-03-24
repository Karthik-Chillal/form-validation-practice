// Module for setting up event listeners on form fields
// Handles blur and input events to trigger validation

import { fields } from './field-config.js';
import { validate } from './validator.js';

// Log the fields configuration for debugging
console.log(fields);

// Iterate over each field name to attach event listeners
Object.keys(fields).forEach((name) => {
  const { el, wrap } = fields[name];

  // Function to mark field as touched and validate on first blur
  const touch = () => {
    if (!wrap.classList.contains('touched')) {
      wrap.classList.add('touched');
      validate(name);
      console.log(validate(name));
      console.log('touched');
    }
  };

  // Add blur event listener to mark field as touched
  el.addEventListener('blur', touch);

  // Add input event listener to validate if field is already touched
  el.addEventListener('input', () => {
    if (wrap.classList.contains('touched')) validate(name);
    console.log(validate(name));
  });
});
