$(document).ready(function () {
    $(".new").click(function () {
        if ($(".popular").css("display") === "flex"){
            $(".popular").css("display", "none")
            $(".arrow").css("transform", "scale(1, 1)")
        }
        else {
            $(".popular").css("display", "flex")
            $(".arrow").css("transform", "scale(-1, -1)")
        }
        // $(".popular").css("display", ($(".popular").css("display") === "none" ? "flex" : "none" ))
    })
    $("#video").click(function (){
        $("#video").addClass("active")
        $("#article").removeClass("active")
    })
    $("#article").click(function (){
        $("#article").addClass("active")
        $("#video").removeClass("active")
    })
})