//plugin version 0.1
(function($) {
    $.fn.showLinkLocation = function() {
        this.filter("a").each(function() {
            var link = $(this);
            link.append(" (" + link.attr("href") + ")");
        });
        return this;
    };
}(jQuery));
(function($) {
    $.fn.addPasswordConstraints = function() {
        var passwordContstraints = "<ul><li>8 characters</li><li>Mixed case</li></ul>";
        $(passwordContstraints).insertAfter($(this));
        return this;
    };
}(jQuery));