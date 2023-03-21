var valid = true;
var inputs;

var numDays = 0;
var totCost = 0;

var valCal = true;


var toast = document.getElementById("snackbar");

inputs = Array.prototype.slice.call(document.getElementsByName("formInput"));

function submitForm () {

    console.log(inputs.length);
    console.log(inputs[8].value);
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].value == "" || ((i == 6) && (inputs[6].value == 0))){
            $(inputs[i]).css( "border-color", "red" );
            valid = false;
        }
        else{
            $(inputs[i]).css( "border-color", "lightgray" );
        }
    }


    var toast = document.getElementById("snackbar");

    calculateCost();
    
    if(!valid){
        toast.style.backgroundColor = "red";
        toast.innerHTML = "Please fill out the required fields highlighted in red";
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3500);
        return false;
    }

    if(valCal){
        toast.style.backgroundColor = "green";
        toast.innerHTML = "The form has been successsfully submitted!";
        toast.className = "show";
        setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3500);
    }
    
    valid = true;

}

function calculateCost(){
    var checkIn = new Date(document.getElementById("checkInDate").value);
    var checkOut = new Date(document.getElementById("checkOutDate").value);
    var timeDiff = checkOut.getTime() - checkIn.getTime();
    var dayDiff = (timeDiff / (1000 * 3600 * 24)) + 1;
    var numAdults = document.getElementById("numAdults").value;
    numDays=dayDiff;
    totCost = dayDiff * numAdults * 150
    if(dayDiff > 0){
        document.getElementById("cost").value = totCost;
        document.getElementById("numDays").value = dayDiff;
        toast.className = "";
        valCal = true;
    }
    else{
        invalidDate();
        document.getElementById("cost").value = 0;
        document.getElementById("numDays").value = 0;
        valCal = false;
    }
}

function invalidDate(){
    toast.style.backgroundColor = "red";
    toast.innerHTML = "You have selected invalid dates!";
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3500);
}

document.getElementById("reset").onclick = function(){
    toast.style.backgroundColor = "blue";
    toast.innerHTML = "you have successfully cleared the form!";
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3500);
    $(inputs).css( "border-color", "lightgray" );
}


function f(){
    var checkIn = new Date(document.getElementById("checkInDate").value);
    var checkOut = new Date(document.getElementById("checkOutDate").value);
    var timeDiff = checkIn.getTime() - checkOut.getTime();
    var dayDiff = timeDiff / (1000 * 3600 * 24);
    document.getElementById(numDays).innerHTML = dayDiff;

    console.log("this is in fact printing");
    var checkIn = document.getElementById("checkInDate").value;
    var checkOut = document.getElementById("checkOutDate").value;
    console.log(checkIn);
    console.log(checkOut);

    // create an if statement for if adult is not selected
    // create an if statement error thing if the days is negative
}

