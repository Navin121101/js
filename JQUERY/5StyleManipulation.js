$(document).ready(function(){
    $("button").click(function(){
        // To know the background-color
        // console.log($("body").css("background-color"))

    // to change bg
        // $("body").css("background-color","lightgrey")


        // To add multiple properties
        // $("p").css("background-color","red")
        // $("p").css({"color": "white","font-size":"14px","padding":"10px"})

        // to add class
        // $("p,h1").addClass("green big");

        // to remove class
        // $("h1,p").removeClass("green")


        // togleclass
        $("h1,p").toggleClass("green")
    })
})