//Initialize all needed variables
var indicator = 0;

//Number button Clicked
$(".btn-primary").on("click",function(){

    //get the text of that button
    var number = $(this).text();
    
        if(indicator === 0){

        //Append number to the first display
        $("#first-number").append(number);

        }

        if(indicator != 0){

        //Append number to the second display
        $("#second-number").append(number);

        }

});
    


// //Operator Button Clicked
$(".btn-danger").on("click",function(){

    //Change indicator so that the next number will display on second line
    indicator = 1; 

    //Get operator text
    var operator = $(this).text();

    //Display operator text 
    $("#operator").text(operator);

});