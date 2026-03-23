export const fields = {
  email:    { el: document.getElementById('email'),    err: document.getElementById('email-error'),    wrap: document.getElementById('field-email') },
  country:  { el: document.getElementById('country'),  err: document.getElementById('country-error'),  wrap: document.getElementById('field-country') },
  postal:   { el: document.getElementById('postal'),   err: document.getElementById('postal-error'),   wrap: document.getElementById('field-postal') },
  password: { el: document.getElementById('password'), err: document.getElementById('password-error'), wrap: document.getElementById('field-password') },
  confirm:  { el: document.getElementById('confirm'),  err: document.getElementById('confirm-error'),  wrap: document.getElementById('field-confirm') },
};