$(document).ready(function(){
    $("button").click(function(){

        // Here it hides all the paragraph tag 
        // $("p").hide();

        // To hide everything
        // $("*").hide();

        // To hide the selector it has instance of
        // In function if i used button instead of paragraph tyen while i click the paragraph in webpage then it hides that paragraph 
        // $(this).hide();

        // To hide the specic id
        // $("#para4").hide();

        // To hide the specic main class
        // $(".main").hide();

        // To specifically hide the main class inside the div
        // $("div .main").hide();


        // $("div .multi p").hide();

        // In para main class will be hided
        // $("p.main").hide();

        // To select multiple
        $("#para4,.main").hide();
    })
});