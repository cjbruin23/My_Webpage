$(document).ready(function(){

    $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
    });

    $("#information > ul > li:first").css("font-size", "42px");
    $("#information > ul > li:nth-of-type(2)").css("font-size", "22px");
    $("#information > ul > li:even:not(:first)").css({"font-weight": "bold", "font-size": "18px"});
    $("#information > ul > li").css("margin-bottom", "3px");
    $(".school li:first-of-type").css("font-weight", "bold");
    $(".job li:first-of-type").css("font-weight", "bold");



    $(window).scroll(function() {
        if ($(document).scrollTop() > 315) {
            $(".school:first").addClass("animateSchool");
            $(".schoolInfo:first").addClass("animateSchoolInfo");
        };
        if ($(document).scrollTop() > 500) {
            $(".school:nth-of-type(2)").addClass("animateSchool");
            $(".schoolInfo:eq(1)").addClass("animateSchoolInfo");
        };
        if ($(document).scrollTop() > 620) {
            $(".school:nth-of-type(3)").addClass("animateSchool");
            $(".schoolInfo:eq(2)").addClass("animateSchoolInfo");
        };
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 780) {
            $(".job:first").addClass("animateSchool");
            $(".jobInfo:first").addClass("animateSchoolInfo");
        };
        if ($(document).scrollTop() > 930) {
            $(".job:nth-of-type(2)").addClass("animateSchool");
            $(".jobInfo:eq(1)").addClass("animateSchoolInfo");
        };
        if ($(document).scrollTop() > 1005) {
            $(".job:nth-of-type(3)").addClass("animateSchool");
            $(".jobInfo:eq(2)").addClass("animateSchoolInfo");
        };
    });
})
