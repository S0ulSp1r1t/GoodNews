$(document).ready(function () {
    $("#new").click(function (){
        $("#new").addClass("active")
        $("#popular").removeClass("active")
    })
    $("#popular").click(function (){
        $("#popular").addClass("active")
        $("#new").removeClass("active")
    })
})