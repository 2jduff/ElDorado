$(document).ready(function() {
    $("#homebannerslides").owlCarousel({
        autoPlay : 3000,
        loop : true,
        stopOnHover : true,
        paginationSpeed : 10000,
        goToFirstSpeed : 2000,
        singleItem : true,
        autoHeight : true,
        pagination : false,
        transitionStyle:"fade"
    });
});