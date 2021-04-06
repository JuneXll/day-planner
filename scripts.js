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

$(document).ready(function () {
    // Listen to the save button 
    $(".saveBtn").on("click", function () {
        // Get values of description 
        var text = $(this).siblings(".description").val();
        //Get the block time
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //Gets the current hour
        var now = moment().hour();

        // Loops over the time block
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            // Checks the current time and replaces background with past, present and future classes
            if (timeBlock < now) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === now) {
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

    // Get the descriptions from the local storage.
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})

