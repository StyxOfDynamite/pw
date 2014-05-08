//plugin version 0.2
(function($) {
    $.fn.addPasswordConstraints = function() {
        //passwordInput
        var passwordInput = $(this);
        //constraints
        var eight = '<li id="eight-plus" class="password-constraint">8 characters</li>';
        var upper = '<li id="uppercase" class="password-constraint">Uppercase character</li>';
        var lower = '<li id="lowercase" class="password-constraint">Lowercase character</li>';
        var number = '<li id="numbers" class="password-constraint">Number character</li>';
        var special = '<li id="specials" class="password-constraint">Special character</li>';
        var passwordContstraints = '<ul>' + eight + upper + lower + number + special + '</ul>';

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
        return this;
    };

    $(document).ready(function() {
        $('input[type="password"]').addPasswordConstraints();
    });
}(jQuery));