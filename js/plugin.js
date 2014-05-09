//plugin version 0.2
(function($) {
    $.fn.addPasswordConstraints = function() {
        //passwordInput
        var passwordInput = $(this);
        //constraints
        var eight = '<li id="eight-plus" class="password-constraint pc-8"></li>';
        var upper = '<li id="uppercase" class="password-constraint pc-u"></li>';
        var lower = '<li id="lowercase" class="password-constraint pc-l"></li>';
        var number = '<li id="numbers" class="password-constraint pc-n"></li>';
        var special = '<li id="specials" class="password-constraint pc-s"></li>';
        var passwordContstraints = '<ul id="pc-contraints">' + eight + upper + lower + number + special + '</ul>';

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
                eightPlus.addClass('pc-8-complete');
            } else {
                eightPlus.removeClass('pc-8-complete');
            }
            // Contains uppercase
            if (containsUppercase.test(value)) {
                uppercase.addClass('pc-u-complete');
            } else {
                uppercase.removeClass('pc-u-complete');
            }
            // Contains lowercase
            if (containsLowercase.test(value)) {
                lowercase.addClass('pc-l-complete');
            } else {
                lowercase.removeClass('pc-l-complete');
            }
            // Contains numbers
            if (containsNumber.test(value)) {
                numbers.addClass('pc-n-complete');
            } else {
                numbers.removeClass('pc-n-complete');
            }
            // Contains specials
            if (containsSpecial.test(value)) {
                specials.addClass('pc-s-complete');
            } else {
                specials.removeClass('pc-s-complete');
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