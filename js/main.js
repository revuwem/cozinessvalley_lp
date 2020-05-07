window.onscroll = function () { fixHeader() };
var header = document.getElementById('header');
var headerOffsetTop = header.offsetTop;

function fixHeader() {
    if (window.pageYOffset >= headerOffsetTop) {
        header.classList.add("fixed-top");
    } else {
        header.classList.remove("fixed-top");
    }
}

$(".nav-items .nav-link").on("click", function () {
    $(".nav-items").find(".active").removeClass("active");
    $(this).addClass("active");
});


//Safari browser detection for handle background:fixed bug
const valley_overview=document.getElementById("valley-overview");
const situation_plan=document.getElementById("situation-plan");
if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
{ 
    if(!valley_overview.classList.contains("bg-not-fixed")){
        valley_overview.classList.add("bg-not-fixed");
    }  

    if(!situation_plan.classList.contains("ios-bg")){
        situation_plan.classList.add("ios-bg");
    }
}else{
    if(valley_overview.classList.contains("bg-not-fixed")){
        valley_overview.classList.remove("bg-not-fixed");
    }

    if(situation_plan.classList.contains("ios-bg")){
        situation_plan.classList.remove("ios-bg");
    }
};
