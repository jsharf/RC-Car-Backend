$(function() {
    $(document).keydown(function(e) {
            console.log(e.which);
            $.get( '/sendKey', { key: e.which } );
    });
});
