var result = {
    tip: document.getElementById('tip-count'),
    total: document.getElementById('total-count')
},
    bill = document.getElementById('bill'),
    people = document.getElementById('people'),
    tipCheck = document.querySelectorAll('.check'),
    checkedTip = tipCheck[0],
    reset = document.getElementById('reset');

// loop to change tip value
for(var i = 0; i< tipCheck.length; i++){
    tipCheck[i].nextElementSibling.addEventListener('click', e=> {
        var checkbox = e.target.previousElementSibling;
        tipCheck.forEach(me => {me.checked = false})
        checkbox.checked = true
        checkedTip = checkbox;
        calc();
    });
}

// calculating the value
function calc() {
    var billValue = parseFloat(bill.value),
        peopleValue = parseFloat(people.value) || 1;
    if(billValue > 0){
        reset.disabled = false;
    } else{
        reset.disabled = true;
    }
    if(isNaN(billValue)){
        billvalue = bill.value
    }
    if(isNaN(peopleValue)){
        peopleValue = people.value
    }
    var tipValue = parseInt(checkedTip.getAttribute('tip-value')),
    tip,last;
    if(peopleValue >= 0){
        tip = (billValue * tipValue / 100) / peopleValue;
        last = billValue / peopleValue + tip;
    } else{
        tip = 0;
        last = billValue;
    }
    if(isNaN(billValue)){
        last = 0;
        tip = 0;
    }
    if(last < 0){
        last = '0.' + last
    }
    if(tip < 0){
        tip = '0.' + tip;
    }
    result.tip.textContent = '$' + tip.toFixed(2);
    result.total.textContent = '$' + last.toFixed(2);
}
bill.oninput = calc;
people.oninput = calc;

// reset everything 
function resetFunc() {
    result.tip.textContent = '$0.0';
    result.total.textContent = '$0.0';
    bill.value = '';
    people.value = '';

}
reset.onclick = () => {
    resetFunc();
    reset.disabled = true;
}

// how much i took to finish it
console.log('4hours / not responsive')