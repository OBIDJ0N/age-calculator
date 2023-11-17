"use strict";
const dayInput = document.querySelectorAll("#Day"),
    monthInput = document.querySelectorAll("#Month"),
    yearInput = document.querySelectorAll("#Year"),
    formEl = document.querySelector("#form"),
    yearResult = document.querySelector("#yearResult"),
    monthResult = document.querySelector("#monthResult"),
    dayResult = document.querySelector("#dayResult"),
    submitBtn = document.querySelector("#submitBtn"),
    errorText = document.querySelector(".errorText");

function check(element,num1,num2){
    element.forEach((e) => {
        e.addEventListener("input", () =>{
            e.value = e.value.slice(num1, num2);
        })
    });
}
check(dayInput,0,2);
check(monthInput,0,2);
check(yearInput,0,4);


submitBtn.addEventListener('click', (data) => {
    data.preventDefault();
    let obtainedYears = new Date().getFullYear() - yearInput[0].value;
    let obtainedMonths = obtainedYears*12;
    let obtainedDays = obtainedYears*365;
    if(dayInput[0].value === ""){
        dayInput[0].classList.toggle("error");
        errorText.innerHTML = "This field is required";
    } else{
        yearResult.innerHTML = obtainedYears;
        monthResult.innerHTML = obtainedMonths;
        dayResult.innerHTML = obtainedDays;
    }
});

