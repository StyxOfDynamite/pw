//plugin version 0.1
(function($) {
    $.fn.addPasswordConstraints = function() {

        var eightPlus = '<li>8 characters</li>';
        var uppercase = '<li>Uppercase character</li>';
        var lowercase = '<li>Lowercase character</li>';
        var numbers = '<li>Number character</li>';
        var punctuation = '<li>Special character</li>';

        var passwordContstraints = '<ul>' + eightPlus + uppercase + lowercase + numbers + punctuation + '</ul>';
        $(passwordContstraints).insertAfter($(this));
        return this;
    };
}(jQuery));