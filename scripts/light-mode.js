/* $( ".change" ).on("click", function() {
    if( $( "body" ).hasClass( "light" )) {
        $( "body" ).removeClass( "light" );
        $( ".change" ).text( "ON" );
    } else {
        $( "body" ).addClass( "light" );
        $( ".change" ).text( "OFF" );
    }
}); */
$(".change").on("click", function() {
    if ($("body").hasClass("light")) {
        $("body").removeClass("light");
        $(".change").text("ON");
        $(".container").off("mouseenter mouseleave"); // Remove previous hover event handlers
    } else {
        $("body").addClass("light");
        $(".change").text("OFF");
        $(".container").hover(
            function() {
                $(this).css("box-shadow", "0px 7px 29px 0px rgba(0, 0, 0, 0.2)"); // Change the shadow color on hover
            },
            function() {
                $(this).css("box-shadow", ""); // Reset the shadow color when not hovered
            },
        );
    }
});