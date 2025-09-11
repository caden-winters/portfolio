
//sticky navs
// const myNavBar = document.querySelector('#myNavBar'); //find the element (use either getElementbyID '' or querySelector '#')

// const navOffset = myNavBar.offsetTop; //find how far from the top this is
// console.log(myNavBar); // Should log the <ul> element

// //everytime the user scrolls check the offsetTop position
// window.addEventListener('scroll', () => {
//     if (window.pageYOffset >= navOffset) {
//         myNavBar.classList.add('sticky');
//     }
//     else {
//         myNavBar.classList.remove('sticky');
//     }
// })

//scroll to top button
const scrollBtn = document.querySelector(".scrollToTop"); //setting a variable to our unique button ID
console.log(scrollBtn); //output log to check for null returns

//function to store our button visability checks
const refreshButtonVisibility = () => {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop <= 150) { //if scroll has below a certian distance then
        console.log("hide");
        scrollBtn.style.display = "none"; //hide the button
    }
    else {
        console.log("block");
        scrollBtn.style.display = "block"; //if above the distance show the button
    }
}
refreshButtonVisibility(); //refresh visabilitiy when page loads


//when the button is clicked, scrolltotop
scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//when you scroll on the page check for button visability
document.addEventListener("scroll", (e) => {
    refreshButtonVisibility();
})

