# Web Programming lab 3.

Created a slideshow using JavaScript in the home page (index.html).

Added a form that is validated using JavaScript.

Brief explaination on the implementation of the slideshow using JavaScript in the index.html page:

First of started by create an array of images to be stored with their path provided. Each element in the array corresponds to an image. Declared a variable i to 0 to be used to keep track of the current image displayed. The time variable is set to 3000 milliseconds (3 seconds), specifying the time interval between each image transition. For the imageSlider(); function. This function is responsible for changing the displayed image. It updates the src attribute of an HTML img element with the next image in the images array. The if statement is used to check if there are more images to display. If there are, i is incremented by 1 to show the next image. If it reaches the end of the array, it resets i to 0 to loop back to the beginning. Then the setTimeOut(); method was used to ensure a time interval to be set for the image slider function. Lastly, The window.onload function is used to start the slideshow when the page loads.
