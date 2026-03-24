import { fields } from './field-config.js';
import { validate } from './validator.js';

// Event Listener which fires up on clicking submit button and checks whether all input fields are valid or not
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
