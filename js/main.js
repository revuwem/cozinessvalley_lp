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


//Safari browser detection
if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
{
  const valley_overview=document.getElementById("valley-overview");
  valley_overview.classList.add("bg-not-fixed");
}