(function ($) {
    $.fn.categoryFilter = function (selector) {
        this.click(function (event) { // Add the event parameter
            event.preventDefault(); // Prevent the default behavior of the anchor element
            var categoryValue = $(this).attr('data-filter');
            $(this).addClass('active').siblings().removeClass('active');
            if (categoryValue == "all") {
                $('.filter').show(1000);
            } else {
                $(".filter").not('.' + categoryValue).hide('3000');
                $('.filter').filter('.' + categoryValue).show('3000');
            }
        });
    }
}(jQuery));
