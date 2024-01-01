// ==============  Nav-bar Hide Section ==============

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector("#navbarNav");

navBar.forEach(function(a){
    // console.log(navCollapse)
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// ==============  Offer Date Section ==============

let dayItem = document.querySelector("#days");
let hourseItem = document.querySelector("#hours");
let minsItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = ()=>{
    let futureDate = new Date("26 march 2024");

    let curDate = new Date();
    let myDate = futureDate - curDate;

    let days = Math.floor(myDate/1000/60/60/24);
    let hours = Math.floor(myDate/1000/60/60) % 24;
    let min = Math.floor(myDate/1000/60) % 60;
    let sec = Math.floor(myDate/1000) % 60;

    dayItem.innerHTML = days;
    hourseItem.innerHTML = hours;
    minsItem.innerHTML = min;
    secItem.innerHTML = sec;

}
 
countDown();

setInterval(countDown,1000);

// ==============  Scroll- Top Section ==============

    const scrollBtn = document.querySelector("#scrollUp");

    window.addEventListener("scroll", ()=>{
        
        if(window.scrollY > 300){
            scrollBtn.style.display = "block";
        }else{
            scrollBtn.style.display = "none";
        }
    })