"use strict";


//sideBar
let sideBarDiv = $(".sideBarDiv");
let divWidthHide=$(".sideBarDiv p").offset().left;
sideBarDiv.css({"left":-divWidthHide});
$(".sideBarDiv button").click(function(){
        sideBarDiv.animate({left:-divWidthHide},500);
})

$(".sideBarDiv p").click(function(){
    sideBarDiv.animate({left:"0px"},500);
})


//
$("#duration h2").click(function(eventInfo){
    let selectedElement = $(eventInfo.target).next(".toggleP");
    selectedElement.slideToggle();
    selectedElement.siblings(".toggleP").slideUp();
})

//counting down

let countDownDate = new Date("Aug 21, 2024 21:26:25").getTime();


let x = setInterval(function(){
    let now = new Date().getTime();

    let difference = countDownDate - now;
    let days = Math.floor(difference / (1000*60*60*24));
    let hours = Math.floor(difference % (1000*60*60*24) /(1000*60*60));
    let minutes = Math.floor(difference % (1000*60*60)/ (1000*60));
    let seconds = Math.floor(difference % (1000*60) / (1000));
    $(".timeDay").html(days + " D");
    $(".timeHour").html(hours + " H");
    $(".timeMinute").html(minutes + " M");
    $(".timeSecond").html(seconds + " S");
    if (difference<=0)
    {
        $(".timeDay").html(0 + " D");
        $(".timeHour").html(0 + " H");
        $(".timeMinute").html(0 + " M");
        $(".timeSecond").html(0 + " S");
        clearInterval(x);
    }
},1000);

//text area

$(".countingText").keyup(function () { 
    $(".countingCharacters").html(100 - this.value.length + " Character Remaining");
    if (this.value.length>100)
    {
        $(".countingCharacters").html("your available character finished")
    }
});
