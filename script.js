$(document).ready(function(){
    $(".soc-twitter")
        .mouseover(function() {
            $("#socDiv").css("display", "inline-block");
        })
        .mouseout(function() {
            $("#socDiv").css("display", "none");
        });
});
