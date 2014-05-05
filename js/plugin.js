//plugin version 1.0
(function($) {
    $.fn.addPasswordConstraints = function() {
        //passwordInput
        var passwordInput = $(this);
        //constraints
        var eight = '<li class="password-constraint" id="eight-plus">8 characters</li>';
        var upper = '<li class="password-constraint" id="uppercase">Uppercase character</li>';
        var lower = '<li class="password-constraint" id="lowercase">Lowercase character</li>';
        var number = '<li class="password-constraint" id="numbers">Number character</li>';
        var special = '<li class="password-constraint" id="specials">Special character</li>';
        var passwordConfirmationLabel = '<label for="password-confirm">Confirm your new password</label>';
        var passwordConfirmationInput = '<input placeholder="Confirm your new password" type="password" id="confirm-password" name="confirm-password" />';
        var passwordContstraints = '<ul>' + eight + upper + lower + number + special + '</ul>' + passwordConfirmationLabel + passwordConfirmationInput;
        $(passwordContstraints).insertAfter(passwordInput);
        //element selectors
        var eightPlus = $('#eight-plus');
        var uppercase = $('#uppercase');
        var lowercase = $('#lowercase');
        var numbers = $('#numbers');
        var specials = $('#specials')
        //regex tests for each constraint
        var containsUppercase = /[A-Z]/;
        var containsLowercase = /[a-z]/;
        var containsNumber = /[0-9]/;
        var containsSpecial = /[^\w\s]|_/;
        $(this).on('input', function() {
            var value = passwordInput.val();
            // More than 8 characters
            if (value.length >= 8) {
                eightPlus.addClass('complete');
            } else {
                eightPlus.removeClass('complete');
            }
            // Contains uppercase
            if (containsUppercase.test(value)) {
                uppercase.addClass('complete');
            } else {
                uppercase.removeClass('complete');
            }
            // Contains lowercase
            if (containsLowercase.test(value)) {
                lowercase.addClass('complete');
            } else {
                lowercase.removeClass('complete');
            }
            // Contains numbers
            if (containsNumber.test(value)) {
                numbers.addClass('complete');
            } else {
                numbers.removeClass('complete');
            }
            // Contains specials
            if (containsSpecial.test(value)) {
                specials.addClass('complete');
            } else {
                specials.removeClass('complete');
            }
            var passwordIsValid = (value.length >= 8) &&
                containsUppercase.test(value) &&
                containsLowercase.test(value) &&
                containsNumber.test(value) &&
                containsSpecial.test(value);
            if (passwordIsValid) {
                passwordInput.addClass('complete-password');
            } else {
                passwordInput.removeClass('complete-password');
            }
        });

        $('#confirm-password').on('input', function() {
            var password = passwordInput.val();
            var confirmedPassword = $('#confirm-password');
            var confirmedPasswordValue = confirmedPassword.val();

            if (password === confirmedPasswordValue) {
                confirmedPassword.addClass('complete-password');
            } else {
                confirmedPassword.removeClass('complete-password');
            }
        })
        return this;
    };
}(jQuery));