//Initialize all needed variables
var indicator = 0;

//Number button Clicked
$(".btn-primary").on("click",function(){

    //get the id of the corresponding button
    var attribute = this.id;

    //Get the ID value which is the number
    var number = $("#"+attribute).val();

        if(indicator === 0){

        //Append number to the first display
        $("#first-number").append(number);

        }

        if(indicator != 0){

        //Append number to the second display
        $("#second-number").append(number);

        }

});
    


//Operator Button Clicked
$(".btn-danger").on("click",function(){

    indicator = 1; 

    //get the id of the corresponding button
    var attribute = this.id;
    
    //Get the ID value which is the operator
    var operator = $("#"+attribute).val();

        if(operator === "times"){

            $("#operator").text("x");

        }
    
        if(operator === "plus"){

            $("#operator").text("+");
            
        }
    
        if(operator === "minus"){

            $("#operator").text("-");
            
        }
    
        if(operator === "power"){

            $("#operator").text("^");
            
        }

        if(operator === "divide"){

            $("#operator").text("/");  
            
        }
});

