const billInput = document.getElementById('bill-input')
const customInput = document.querySelector('.custom')
const numPeopleInput = document.querySelector('#num-people-input')

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


resetBtn.addEventListener('click', resetForm)

percentFiveBtn.addEventListener('click', calcFivePercent)
function calcFivePercent(){
    let fivePercentTip = billInput.value * .05
    let fivePercentTipPerPerson = fivePercentTip / numPeopleInput.value
    tipAmountPerPerson.innerHTML = `$${fivePercentTipPerPerson.toFixed(2)}`
    calcTotalPerPerson(fivePercentTipPerPerson.toFixed(2))
}

percentTenBtn.addEventListener('click', calcTenPercent)
function calcTenPercent(){
    let tenPercentTip = billInput.value * .10
    let tenPercentTipPerPerson = tenPercentTip / numPeopleInput.value
    tipAmountPerPerson.innerHTML = `$${tenPercentTipPerPerson.toFixed(2)}`
    calcTotalPerPerson(tenPercentTipPerPerson.toFixed(2))
}

percentFifteenBtn.addEventListener('click', calcFifteenPercent)
function calcFifteenPercent(){
    let fifteenPercentTip = billInput.value * .15
    let fifteenPercentTipPerPerson = fifteenPercentTip / numPeopleInput.value
    tipAmountPerPerson.innerHTML = `$${fifteenPercentTipPerPerson.toFixed(2)}`
    calcTotalPerPerson(fifteenPercentTipPerPerson.toFixed(2))
}

percentTwentyFiveBtn.addEventListener('click', calcTwentyFivePercent)
function calcTwentyFivePercent(){
    let twentyFivePercentTip = billInput.value * .25
    let twentyFivePercentTipPerPerson = twentyFivePercentTip / numPeopleInput.value
    tipAmountPerPerson.innerHTML = `$${twentyFivePercentTipPerPerson.toFixed(2)}`
    calcTotalPerPerson(twentyFivePercentTipPerPerson.toFixed(2))
}

percentFiftyBtn.addEventListener('click', calcFiftyPercent)
function calcFiftyPercent(){
    let fiftyPercentTip = billInput.value * .50
    let fiftyPercentTipPerPerson = fiftyPercentTip / numPeopleInput.value
    tipAmountPerPerson.innerHTML = `$${fiftyPercentTipPerPerson.toFixed(2)}`
    calcTotalPerPerson(fiftyPercentTipPerPerson.toFixed(2))
}

customInput.addEventListener('input', calcCustomPercent)
function calcCustomPercent(){
    let customePercentTip = billInput.value * (customInput.value / 100)
    let customPercentTipPerPerson = customePercentTip / numPeopleInput.value
    tipAmountPerPerson.innerHTML = `$${customPercentTipPerPerson.toFixed(2)}`
    calcTotalPerPerson(customPercentTipPerPerson.toFixed(2))
}

function calcTotalPerPerson(tip){
    let totalAmount = (billInput.value/numPeopleInput.value) + Number(tip)
    tipTotal.innerHTML = `$${totalAmount.toFixed(2)}`
}

function resetForm(){
    billInput.value = ''
    customInput.value = ''
    numPeopleInput.value = ''
    tipAmountPerPerson.innerHTML = `$0.00`
    tipTotal.innerHTML = `$0.00`
}
