# F28WP-lab
All Lab work on this repository. 

Lab 1: https://hbf2001.github.io/Hosam-Lab.github.io/week1/

Lab 2: https://hbf2001.github.io/Hosam-Lab.github.io/week2/

Lab 3: https://hbf2001.github.io/Hosam-Lab.github.io/week3/

Lab 3:

Brief Explaination on the implementation of the slide show using JavaScript:

First of started by create an array of images to be stored with their path provided. Each element in the array corresponds to an image. Declared a variable i to 0 to be used to keep track of the current image displayed. The time variable is set to 3000 milliseconds (3 seconds), specifying the time interval between each image transition. For the imageSlider(); function. This function is responsible for changing the displayed image. It updates the src attribute of an HTML img element with the next image in the images array. The if statement is used to check if there are more images to display. If there are, i is incremented by 1 to show the next image. If it reaches the end of the array, it resets i to 0 to loop back to the beginning. Then the setTimeOut(); method was used to ensure a time interval to be set for the image slider function. Lastly, The window.onload function is used to start the slideshow when the page loads.

Brief explaination on the implementation of the form validation using JavaScript in the form.html page:

First started off by getting the input fields and error fields and saving them in a variable via the DOM and defined a regular expression "emailFormat" to validate email addresses. Then created a function validateInput() that takes a field, error element, error message, and a condition to check. It updates the styling and error messages of the input elements based on the condition. Then added an event listener to the form submit button that triggers the validation process. Then checked each input field and applied the validateInput function to validate the input data. Maintained a variable isValid to keep track of the overall form validation status. Added the event.preventDefault() at the end to prevent page reload as requested in the lab sheet.

Lab 4 part 1 (Understanding JSON and AJAX): https://hbf2001.github.io/Hosam-Lab.github.io/week4/Understanding%20JSON%20and%20AJAX%20(Part%201)/
Lab 4 part 2 (Exercise - Fetching Weather Data): https://hbf2001.github.io/Hosam-Lab.github.io/week4/Exersice-Fetching%20Weather%20Data%20(Part%202)/

