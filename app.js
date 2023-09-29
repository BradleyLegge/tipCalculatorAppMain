const billInput = document.getElementById('bill-input')
const customInput = document.querySelector('.custom')
const numPeopleInput = document.querySelector('#num-people-input')

const percentFiveBtn = document.getElementById('five')
const percentTenBtn = document.querySelector('#ten')
const percentFifteenBtn = document.querySelector('#fifteen')
const percentTwentyFiveBtn = document.querySelector('#twenty-five')
const percentFiftyBtn = document.querySelector('#fifty')
const resetBtn = document.querySelector('.resetBtn')

const tipAmountPerPerson = document.querySelector('#tip-amount-per-person')
const tipTotal = document.querySelector('#tip-total')

function validateBillInput(){}

function validatePeopleInput(){}

percentFiveBtn.addEventListener('click', calcFivePercent)

function calcFivePercent(){
    let fivePercentTip = billInput.value * .05
    calcTotalTip(fivePercentTip)
}

percentFifteenBtn.addEventListener('click', calcFifteenPercent)

function calcFifteenPercent(){
    let fifteenPercentTip = billInput.value * .15
    console.log(fifteenPercentTip)
}


