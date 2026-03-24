import { fields } from './field-config.js';
import { validate } from './validator.js';

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  let allValid = true;
  Object.keys(fields).forEach((name) => {
    fields[name].wrap.classList.add('touched');
    if (!validate(name)) {
      allValid = false;
    }
  });
  if (allValid) {
    console.log('Success!');
  } else {
    console.log('Failure!');
  }
});
