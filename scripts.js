// 1-Header that has the current date under the current heading
    // *Set time interval with moment.js
    // *Should be in format: Thursday, September 5th
// 2-Create a list to act as hour blocks for 9 hours(9am-6pm)
    // *List should have what hour block it is on the right, center for text and button on the right for saving
    // *Time cell should not be able to be clicked or renamed
    // *Center text input should be kept unless changed
    //     -Should be highlighted gray if the hour has past
    //     -Should be highlighted red if it is in the current hour
    //     -Should be highlighted green if it is an hour in the future
    // *Left save button should:
    //     -Save the text to local storage when clicked
    //     -Be able to refresh and show again on the page

//Displays the current date in the header
var currentDay = $("#currentDay");
var today = moment().format("dddd, MMMM Do")
currentDay.text(today);

// // Selected variables
// var textArea = $("#text");
// var startOfDay = moment("9", "h").format("hA");
// var endOfDay = moment("17", "h").format("hA");
// var now = moment().format("hA");
// var save = $(".saveBtn");

// // Function that turns the color of each timeblock by hour(Past,Present,Future)
// // function checkTimeblock(){

// //     for(var i=0;timeNum;i++){
// //         var span = $("span");
// //         var dataNum = span.attr("data-number");
// //         var timeNum = moment(dataNum, "h").format("hA");

// //         if(moment().isBetween(timeNum, now)){
// //         textArea.addClass("past");
// //         } else if(now){
// //         textArea.addClass("present");
// //         } else {
// //         textArea.addClass("future");
// //         }
        
// //         dataNum++;
// //         break;
// //     } 
// // };

// // checkTimeblock()
// // console.log(timeNum);
// // console.log(moment().isBetween(timeNum, now));

// // Event to listen for the save button
// save.on("click", saveEvent);
// // Function that takes the value of the textArea and puts it in the local storage
// function saveEvent(event){
//     var event=$("#text").val();
//     textArea.text(localStorage.getItem("event"));
//     localStorage.setItem("event", (JSON.stringify(event)));

// }



$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // Get item from local storage if any
    $("#hour9 .description").val(localStorage.getItem("hour8"));
    $("#hour10 .description").val(localStorage.getItem("hour9"));
    $("#hour11 .description").val(localStorage.getItem("hour10"));
    $("#hour12 .description").val(localStorage.getItem("hour11"));
    $("#hour13 .description").val(localStorage.getItem("hour12"));
    $("#hour14 .description").val(localStorage.getItem("hour13"));
    $("#hour15 .description").val(localStorage.getItem("hour14"));
    $("#hour16 .description").val(localStorage.getItem("hour15"));
    $("#hour17 .description").val(localStorage.getItem("hour16"));

    timeTracker();
})