$(function(){

$(".portfolio").hover(function(){
    $(".title, .description", this).delay(200).queue(function(){
        $(this).addClass("active").dequeue();
        

    })
},
function(){
    $(".title, .description", this).removeClass("active");
});

});

window.onload = function(){
    $(".top-background-image > p").css({
        "opacity" : "1",
        "transition" : "opacity 4.5s ease-out",
    });
}
