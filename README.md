# Form Validation

A browser-based form with live inline validation built using vanilla JavaScript and the Constraint Validation API.

## Live Demo
[Add your GitHub Pages link here]

## Screenshot
![Form Validation](./screenshot.png)

## Features
- Live inline validation as you type
- Custom error messages per field
- Red/green highlights using CSS `:valid` / `:invalid` pseudo-classes
- Password confirmation matching
- Final submission check with error summary

## Fields Validated
- Email (type mismatch check)
- Country (required)
- Postal Code (pattern match)
- Password (min length)
- Password Confirmation (must match password)

## Built With
- HTML5
- CSS3
- Vanilla JavaScript (Constraint Validation API)

## Getting Started
```bash
git clone https://github.com/your-username/form-validation.git
cd form-validation
# Just open index.html in your browser — no build step needed
```

## What I Learned
- Using the `validity` object and its flags (`valueMissing`, `typeMismatch`, `patternMismatch`, etc.)
- `setCustomValidity()` for custom rules like password confirmation
- Difference between `blur` and `input` event listeners for validation timing
- `novalidate` attribute to take full control of validation in JS
