//created an array that holds the images for the slideshow
let images = [];
images[0] = "images/imageSlider1.jpeg";
images[1] = "images/imageSlider2.jpeg";
images[2] = "images/imageSlider3.jpeg";
images[3] = "images/imageSlider4.jpeg";
images[4] = "images/imageSlider5.jpeg";
images[5] = "images/imageSlider6.jpeg";
images[6] = "images/imageSlider7.jpeg";
images[7] = "images/imageSlider8.avif";

let i = 0;//variable to start image display.
const time = 3000;//time set to 3000 ms or 3 s.

//Function for slide show.
function imageSlider() {
    document.slide.src = images[i];

    if(i < images.length - 1 ) 
        i++;//increments i to preform the slideshow

    else //resets to 0 after the last image display
        i = 0;

    setTimeout("imageSlider()", time);
}
//runs the function when page loads as requested in the lab sheet.
window.onload = imageSlider;




