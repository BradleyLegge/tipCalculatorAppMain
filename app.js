const billInput = document.getElementById('bill-input')
let customInput = document.querySelector('.custom')
let numPeopleInput = document.querySelector('#num-people-input')

const percentFiveBtn = document.getElementById('five')
const percentTenBtn = document.querySelector('#ten')
const percentFifteenBtn = document.querySelector('#fifteen')
const percentTwentyFiveBtn = document.querySelector('#twenty-five')
const percentFiftyBtn = document.querySelector('#fifty')
const resetBtn = document.querySelector('.reset-btn')

const tipAmountPerPerson = document.querySelector('#tip-amount-per-person')
const tipTotal = document.querySelector('#tip-total')

function validateBillInput(){}

function validatePeopleInput(){}

function validateNumOfPeople(){}

percentFiveBtn.addEventListener('click', calcFivePercent)
resetBtn.addEventListener('click', resetForm)

function calcFivePercent(){
    let fivePercentTip = billInput.value * .05
    console.log(fivePercentTip)
    calcTotalTip(fivePercentTip)
}

percentFifteenBtn.addEventListener('click', calcFifteenPercent)

function calcFifteenPercent(){
    let fifteenPercentTip = billInput.value * .15
    console.log(fifteenPercentTip)
    let fifteenPercentTipPerPerson = fifteenPercentTip / numPeopleInput.value
    tipAmountPerPerson.innerHTML = `$${fifteenPercentTipPerPerson.toFixed(2)}`
    console.log(fifteenPercentTipPerPerson)
    calcTotalPerPerson(fifteenPercentTipPerPerson.toFixed(2))
}

function calcTotalPerPerson(tip){
    let totalAmount = (billInput.value/numPeopleInput.value) + Number(tip)
    tipTotal.innerHTML = `$${totalAmount}`
}

function resetForm(){
    billInput = ''
    customInput = ''
    numPeopleInput = ''
}
