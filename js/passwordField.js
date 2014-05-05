(function() {
  var container = document.getElementById('container');

  var eightPlus = document.getElementById('eight-plus');
  var uppercase = document.getElementById('uppercase');
  var lowercase = document.getElementById('lowercase');
  var numbers = document.getElementById('numbers');
  var punctuation = document.getElementById('punctuation');
  var matchesPassword = document.getElementById('matches-password');

  var passwordSubmitBtn = document.getElementById('password-submit');
  var passwordInput = document.getElementById('password');
  var passwordForm = document.getElementById('new-password');

  var verifyPasswordSubmitBtn = document.getElementById('verify-password-submit');
  var verifyPasswordInput = document.getElementById('verify-password');
  var verifyPasswordForm = document.getElementById('verify-new-password');
  var goBack = document.getElementById('go-back');

  var allDone = document.getElementById('all-done');

  var containsUppercase = /[A-Z]/;
  var containsLowercase = /[a-z]/;
  var containsNumbers = /[0-9]/;
  var containsPunctuation = /[^\w\s]|_/;

  passwordInput.addEventListener('input', function() {

    var value = passwordInput.value;

    // More than 8 characters
    if (value.length >= 8)
      eightPlus.classList.add('complete');
    else
      eightPlus.classList.remove('complete');

    // Contains uppercase
    if (containsUppercase.test(value))
      uppercase.classList.add('complete');
    else
      uppercase.classList.remove('complete');

    // Contains lowercase
    if (containsLowercase.test(value))
      lowercase.classList.add('complete');
    else
      lowercase.classList.remove('complete');

    // Contains numbers
    if (containsNumbers.test(value))
      numbers.classList.add('complete');
    else
      numbers.classList.remove('complete');

    // Contains punctuation
    if (containsPunctuation.test(value))
      punctuation.classList.add('complete');
    else
      punctuation.classList.remove('complete');

    var passwordIsValid = (value.length >= 8) &&
        containsUppercase.test(value) &&
        containsLowercase.test(value) &&
        containsNumbers.test(value) &&
        containsPunctuation.test(value);

    passwordSubmitBtn.disabled = !passwordIsValid;

  });

  verifyPasswordInput.addEventListener('input', function() {
    var passwordsDoMatch = verifyPasswordInput.value === passwordInput.value;

    if (passwordsDoMatch)
      matchesPassword.classList.add('complete');
    else
      matchesPassword.classList.remove('complete');

    verifyPasswordSubmitBtn.disabled = !passwordsDoMatch;
  });

  passwordForm.addEventListener('submit', function(evt) {
    passwordForm.classList.add('done');
    setTimeout(function() {
      verifyPasswordForm.reset();
      verifyPasswordForm.classList.add('visible');
      verifyPasswordInput.focus();
      matchesPassword.classList.remove('complete');
    }, 400);
    evt.preventDefault();
  });

  verifyPasswordForm.addEventListener('submit', function(evt) {
    verifyPasswordForm.classList.add('done');
    setTimeout(function() {
      allDone.classList.add('visible');
    }, 400);
    evt.preventDefault();
  });

  goBack.addEventListener('click', function(evt) {
    verifyPasswordForm.classList.remove('visible');
    setTimeout(function() {
      passwordForm.classList.remove('done');
      passwordInput.focus();
    }, 400);
    evt.preventDefault();
  });

  window.addEventListener('load', function() {
    passwordForm.classList.add('visible');
  });
})();