let currentSlide = document.getElementsByClassName("numberText").textContent;
let slidesDiv = document.querySelectorAll(".mySlides");
let images = slidesDiv.getElementsByName("img");

const nextButton = document.querySelectorAll(".next");
const prevButton = document.querySelectorAll(".prev")
//add
nextButton.addEventListener("click", function() {

    if(currentSlide === 8)
        nextButton.disabled = true;
    else
        nextButton.disabled = false;


    //Display mySlides that has number text that respective number
    //increment current slide
    images.style.display = "block";
    currentSlide++;

});

prevButton.addEventListener("click", function(){

    if(currentSlide === 1)
        prevButton.disabled = true;
    else
        prevButton.diabled = false;
});



