$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );

    $("#carouselButton").click(function()
    {
        if( $("#carouselButton").children("span").hasClass("fa-pause") ) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }
        else {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        }
        
    });

    $('[data-toggle="tooltip"]').tooltip();


    $("#loginButton").click(function() {
        $("#loginModal").modal('show');
    });

    $("#reserveTableButton").click(function() {
        $("#reserveTableModal").modal('show');
    });

    $(".reserveTableDismiss").click(function() {
        $("#reserveTableModal").modal('hide');
    });

    $(".closeLoginModal").click(function() {
        $("#loginModal").modal('hide');
    });
    
});