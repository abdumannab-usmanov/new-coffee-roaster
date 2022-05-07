var elButton = document.querySelector(".service__btn");
var elBtnType = document.querySelector(".type__btn");
var elBtnPrice = document.querySelector(".price__btn");
var elBtnGrind = document.querySelector(".grind__btn");
var elBtnDeliver = document.querySelector(".deliver__btn");
var elBoxContent = document.querySelector(".service__inner");
var elBoxType = document.querySelector(".type__inner");
var elBoxPrice = document.querySelector(".price__inner");
var elBoxGrind = document.querySelector(".grind__inner");
var elBoxDeliver = document.querySelector(".deliver__inner");


elButton.addEventListener("click", function(evt){
    evt.preventDefault()
    elBoxContent.classList.toggle("service__inner--open")
})


elBtnType.addEventListener("click", function(evt){
    evt.preventDefault()
    elBoxType.classList.toggle("type__inner--open")
})


elBtnPrice.addEventListener("click", function(evt){
    evt.preventDefault()
    elBoxPrice.classList.toggle("price__inner--open")
})

elBtnGrind.addEventListener("click", function(evt){
    evt.preventDefault()
    elBoxGrind.classList.toggle("grind__inner--open")
})


elBtnDeliver.addEventListener("click", function(evt){
    evt.preventDefault()
    elBoxDeliver.classList.toggle("deliver__inner--open")
})