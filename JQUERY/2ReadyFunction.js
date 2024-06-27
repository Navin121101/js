// This is ready function .we use this function to run the jquery after html and css have completely loaded.if html and css is not completely loaded then jquery or javascript will not run properly

$("document").ready(function(){
    $("button").on("click", function(){
        $("h1").css("color","red")
    })
})