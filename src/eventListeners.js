import { fields } from './field-config.js';
import { validate } from './validator.js';
console.log(fields);
Object.keys(fields).forEach((name) => {
  const { el, wrap } = fields[name];
  const touch = () => {
    if (!wrap.classList.contains('touched')) {
      wrap.classList.add('touched');
      validate(name);
      console.log(validate(name));
      console.log('touched');
    }
  };
  el.addEventListener('blur', touch);

  el.addEventListener('input', () => {
    if (wrap.classList.contains('touched')) validate(name);
    console.log(validate(name));
  });
});
