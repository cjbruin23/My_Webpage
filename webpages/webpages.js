$(document).ready(function() {
    var evenOrOdd = "odd";
    $(".wrapper").each(function() {
        var $this = $(this);
        $this.children("div").each(function() {
                var divisible;
                if (evenOrOdd === "even") {
                    divisible = 0;
                } else {
                    divisible = 1;
                }
                console.log(divisible);
                if (Number(this.className.substring(this.className.length - 1)) % 2 === divisible){
                    $(this).css("width", "100%");
                    $(this).addClass("picture")
                } else {
                    $(this).css({
                        "width": "0",
                        "background-color": "white"
                    });
                    $(this).children("p").css({
                        "visibility": "hidden",
                        "color": "black",
                        "text-align": "left",
                        "position": "relative",
                        "top": "30%",
                        "width": "500px",
                        "margin-right": "auto",
                        "margin-left": "auto"
                    });

                };
            });
            if (evenOrOdd === "odd") {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            };
            console.log(evenOrOdd);
        });

        $('.picture').mouseover(function(event) {
            $(this).animate({
                "width": "50%",
                "overflow-y": "hidden"
            }, 1500);
            $(this).siblings().children().css("visibility", "visible");
            $(this).siblings().animate({
                "width": '50%'
            }, 1500);
            $(this).unbind(event);
        })
})


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
