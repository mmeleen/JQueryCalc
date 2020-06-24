//Initialize all needed variables
var indicator = 0;

//Number button Clicked
$(".btn-primary").on("click",function(){

    //get the text of that button
    var number = $(this).text();
    
        if(indicator === 0){

        //Append number to the first display
        $("#first-number").append(number);

        //Save the number
        firstNumber = $("#first-number").text();

        

        }

        if(indicator != 0){

        //Append number to the second display
        $("#second-number").append(number);

        //Save the number
        secondNumber = $("#second-number").text();

        

        }

});
    


////Operator Button Clicked
$(".btn-danger").on("click",function(){

    //Change indicator so that the next number will display on second line
    indicator = 1; 

    //Get operator text
    var operator = $(this).text();

    //Display operator text 
    $("#operator").text(operator);

});

////Equal
$(".btn-success").on("click",function(){

    

    //Get operator text
    var firstNumber = $("#first-number").text();
    var secondNumber = $("#second-number").text();
    var finalOperator = $("#operator").text();

    //Display operator text 
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(finalOperator);

});
