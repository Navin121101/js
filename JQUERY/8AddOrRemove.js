$(document).ready(function(){
    $("button").click(function(){
        $("p").before("<p>Hello world!!</p>")
        // $("p").after("<p>Hello world!!</p>")
    })
})