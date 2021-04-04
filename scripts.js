// 1-Header that has the current date under the current heading
    // *Set time interval with moment.js
    // *Should be in format: Thursday, September 5th
 var currentDay = $("#currentDay");
 var today = moment().format("dddd, MMMM Do")
 currentDay.text(today);

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
