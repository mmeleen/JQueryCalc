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
    var answer = 0;
    var firstNumber = $("#first-number").text();

    firstNumber = parseInt(firstNumber);
    var secondNumber = $("#second-number").text();

    secondNumber = parseInt(secondNumber);
    var finalOperator = $("#operator").text();

    //Calculate

    //Addition
    if(finalOperator === "+"){

        answer = firstNumber + secondNumber;
    }

    //Subtraction
    if(finalOperator === "-"){

        answer = firstNumber - secondNumber;
    }


    //Multiplication
    if(finalOperator === "x"){

        answer = firstNumber*secondNumber;
    }

    if(finalOperator === "÷"){

        answer = firstNumber/secondNumber;
    }
    

    $("#result").text(answer);

});
