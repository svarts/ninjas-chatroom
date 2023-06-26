$( ".change" ).on("click", function() {
    if( $( "body" ).hasClass( "light" )) {
        $( "body" ).removeClass( "light" );
        $( ".change" ).text( "ON" );
    } else {
        $( "body" ).addClass( "light" );
        $( ".change" ).text( "OFF" );
    }
});