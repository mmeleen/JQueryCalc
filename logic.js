//Initialize all needed variables
var indicator = 0;
var answer = 0;
var firstNumber = '';

var secondNumber = '';

var finalOperator = '';

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

        if(indicator === 1){

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

    indicator = 2;
    //Get operator text
    answer = 0;
    firstNumber = $("#first-number").text();

    firstNumber = parseInt(firstNumber);
    secondNumber = $("#second-number").text();

    secondNumber = parseInt(secondNumber);
    finalOperator = $("#operator").text();

    //Calculate

    if(finalOperator === "+"){

        answer = firstNumber + secondNumber;
    } else if(finalOperator === "-"){

        answer = firstNumber - secondNumber;
    } else if(finalOperator === "*"){

        answer = firstNumber + secondNumber;
    } else if(finalOperator === "+"){

        answer = firstNumber + secondNumber;
    }

    $("#result").text(answer);

});

///Clear
$(".btn-dark").on("click",function(){
    indicator = 0;
    $("#first-number").empty();
    $("#second-number").empty();
    $("#operator").empty();
});