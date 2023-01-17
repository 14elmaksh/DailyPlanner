
timecheck(); 
getPlans();


var currentDay = moment().format('MMMM Do YYYY');

$("#currentDay").text(currentDay);

function timecheck(){
    var currentHour =  moment().format('H');
    console.log("the current hour" + currentHour);
    $(".input-group-text").each(function(){
        let blockTime = $(this).siblings("input").attr("id");
        console.log(blockTime)
        if (currentHour > blockTime){
            $(this).attr("class",'input-group-text past');
        } else if (currentHour === blockTime) {
            $(this).attr("class", "input-group-text present");
        }    
    })
    
}

function getPlans(){
    $(".form-control").each(function(){
        let id = $(this).attr("id");

        if(localStorage.getItem(id)){
            $(this).val(localStorage.getItem(id))
            // Set Textbox of "this" to local storage value
    };
})}
// onclick function to store retrieved form input
$(".saveBtn").on("click", function(){
    let message = $(this).parent().prev().val();
    let time = $(this).parent().prev().attr("id");
    localStorage.setItem(time, message);




    // Targeting different parent, child, etc..(query cheatsheet)
    // console.log($(this).parent().prev().val());
    // Targeting the "id" in the value. When savebutton is cliced-targets that timeslot
    // console.log($(this).parent().prev().attr("id"));

 

    
})




// localStorage.setItem("time", nine)

// var saveB = document.querySelector(".saveBtn");




// var inputDis = document.querySelector(".notesD");


// // get input values from form
// inputBox.value = localStorage.getItem("notesT");






//Get input textarea elements:
 // var elementName = document.getElementById("");
 // var elementName = document.getElementByClassName("");
// var elementName = document.querySelector("");
// var elementName = document.querySelectorAll("");
 
// var currentDay = document.querySelector("#currentDay");
// currentDay.textContent = moment().format("dddd, MMMM Do, YYYY");