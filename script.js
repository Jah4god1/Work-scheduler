// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function() {
  const generateDateButton = document.getElementById('generateDate');
  const dateElement = document.getElementById('date');

  generateDateButton.addEventListener('click', function() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString(); // Format the date as per your requirements
    dateElement.textContent = formattedDate;
  });
});
  
$(document).ready(function() {
  // Get the current hour using Day.js library
  var currentHour = dayjs().hour();

  // Loop through each time block
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Compare the block hour with the current hour
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
});

var userInput = document.getElementById('inputElement').value; // Get the user input from an input field
var storageKey = 'userInput'; // Choose a storage key
localStorage.setItem(storageKey, userInput); 

var storageKey = 'userInput'; // The same storage key used to save the user input
var savedUserInput = localStorage.getItem(storageKey); // Retrieve the user input from local storage
// 

$(document).ready(function() {
  // Retrieve schedule data from local storage if it exists
  var scheduleData = localStorage.getItem("scheduleData");
  if (scheduleData) {
    // Parse the stored data from a string to an object
    scheduleData = JSON.parse(scheduleData);

    // Update the textarea values based on the stored data
    for (var hour in scheduleData) {
      var textarea = $("#" + hour).find(".description");
      textarea.val(scheduleData[hour]);
    }
  }

  // Save button click event handler
  $(".saveBtn").on("click", function() {
    var hour = $(this).parent().attr("id");
    var textarea = $(this).siblings(".description");
    var scheduleText = textarea.val();

    // Store the schedule data in an object
    var scheduleData = localStorage.getItem("scheduleData");
    if (scheduleData) {
      scheduleData = JSON.parse(scheduleData);
    } else {
      scheduleData = {};
    }
    scheduleData[hour] = scheduleText;

    // Convert the schedule data object to a string and store it in local storage
    localStorage.setItem("scheduleData", JSON.stringify(scheduleData));
  });
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

