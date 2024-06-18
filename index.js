// import { todayDeal } from "./todayDeal";


var sliderleft = document.querySelector(".btn-left");
var sliderright = document.querySelector(".btn-right");
var imgitem = document.querySelectorAll(".image-item");

// console.log(imgitem.length - 1);


var startslider = 0
var endslider = (imgitem.length - 1) * 100


sliderleft.addEventListener("click", handleLeftBtn)

function handleLeftBtn(){
    if(startslider < 0){
        startslider = startslider + 100;
    }

   imgitem.forEach(ele =>{
    ele.style.transform = `translateX(${startslider}%)`;
   })
}

sliderright.addEventListener("click", handleRightBtn)

function handleRightBtn(){
    if(startslider >= -endslider + 100){
        startslider = startslider - 100;
    }
    // console.log(startslider)

   imgitem.forEach(ele =>{
    ele.style.transform = `translateX(${startslider}%)`;
   })
}

//render automatic

function renderSlideAuto(){
    if(startslider >= -endslider + 100){
        handleRightBtn();
    }
    else{
        startslider = 0;
    }
}
setInterval(renderSlideAuto, 3000);
//    sidebar nevigation

var sidebarNavigation = document.getElementById("sidebar-container-open");
var sidebarOpen = document.getElementById("open-nav-sidebar");

var sidebarClose = document.getElementById("sidebar-close");


sidebarOpen.addEventListener("click", ()=>{
    sidebarNavigation.classList.toggle("slidebar-show");
})

sidebarClose.addEventListener("click", ()=>{
    sidebarNavigation.classList.toggle("slidebar-show");
})



            // Footer
var backtop = document.querySelector(".backtop");

backtop.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
})



                // <!-- signin-tag  -->

var sign = document.querySelector(".account-container");
var tri = document.querySelector(".triangle");
var signin = document.querySelector(".hdn-sign");

sign.addEventListener("click", ()=> {
    sidebarOpen.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
})

    //    <!-- Customers who viewed items in your browsing history also viewed -->

document.querySelector(".viewed-btn-right").addEventListener("click",function (event) {
        document.querySelector(".viewed-products").scrollLeft += 1100;
        event.preventDefault();
});

document.querySelector(".viewed-btn-left").addEventListener("click",function (event) {
    document.querySelector(".viewed-products").scrollLeft -= 1100;
    event.preventDefault();
});