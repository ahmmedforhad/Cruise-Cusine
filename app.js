const firstClassIncreaseButton = document.getElementById('first-class-increase-btn');
const firstClassDecreaseButton = document.getElementById('first-class-decrease-btn');
const secondClassIncreaseButton = document.getElementById('second-class-increase-btn');
const secondClassDecreaseButton = document.getElementById('second-class-decrease-btn');
firstClassIncreaseButton.addEventListener('click', function () {
    const firstClassInputArea = document.getElementById('first-class-input-area');
    const inputValue = parseInt(firstClassInputArea.value);
    const firstCount = inputValue + 1;
    firstClassInputArea.value = firstCount;
    const secondClassInputArea = document.getElementById('second-class-input-area');
    const secondCount = parseInt(secondClassInputArea.value);
    secondClassInputArea.value = secondCount;
    const subTotal = document.getElementById('sub-total');
    const newSubTotal = firstCount * 150 + secondCount * 100;
    subTotal.innerText = newSubTotal;
    const vat = document.getElementById('vat');
    const totalVat = newSubTotal * .10;
    vat.innerText = totalVat;
    const total = document.getElementById('total');
    const newTotal = newSubTotal + totalVat;
    total.innerText = newTotal;
})
firstClassDecreaseButton.addEventListener('click', function () {
    const firstClassInputArea = document.getElementById('first-class-input-area');
    if (firstClassInputArea.value > 0) {
        const inputValue = parseInt(firstClassInputArea.value);
        const firstCount = inputValue - 1;
        firstClassInputArea.value = firstCount;
        const secondClassInputArea = document.getElementById('second-class-input-area');
        const secondCount = parseInt(secondClassInputArea.value);
        secondClassInputArea.value = secondCount;
        const subTotal = document.getElementById('sub-total');
        const newSubTotal = firstCount * 150 + secondCount * 100;
        subTotal.innerText = newSubTotal;
        const vat = document.getElementById('vat');
        const totalVat = newSubTotal * .10;
        vat.innerText = totalVat;
        const total = document.getElementById('total');
        const newTotal = newSubTotal + totalVat;
        total.innerText = newTotal;
    }
    else {
        alert('At first, You Have to Buy a Ticket');
    }
})
secondClassIncreaseButton.addEventListener('click', function () {
    const secondClassInputArea = document.getElementById('second-class-input-area');
    const inputValue = parseInt(secondClassInputArea.value);
    const secondCount = inputValue + 1;
    secondClassInputArea.value = secondCount;
    const firstClassInputArea = document.getElementById('first-class-input-area');
    const firstCount = parseInt(firstClassInputArea.value);
    firstClassInputArea.value = firstCount;
    const subTotal = document.getElementById('sub-total');
    const newSubTotal = firstCount * 150 + secondCount * 100;
    subTotal.innerText = newSubTotal;
    const vat = document.getElementById('vat');
    const totalVat = newSubTotal * .10;
    vat.innerText = totalVat;
    const total = document.getElementById('total');
    const newTotal = newSubTotal + totalVat;
    total.innerText = newTotal;
})
secondClassDecreaseButton.addEventListener('click', function () {
    const secondClassInputArea = document.getElementById('second-class-input-area');
    if (secondClassInputArea.value > 0) {
        const inputValue = parseInt(secondClassInputArea.value);
        const secondCount = inputValue - 1;
        secondClassInputArea.value = secondCount;
        const firstClassInputArea = document.getElementById('first-class-input-area');
        const firstCount = parseInt(firstClassInputArea.value);
        firstClassInputArea.value = firstCount;
        const subTotal = document.getElementById('sub-total');
        const newSubTotal = firstCount * 150 + secondCount * 100;
        subTotal.innerText = newSubTotal;
        const vat = document.getElementById('vat');
        const totalVat = newSubTotal * .10;
        vat.innerText = totalVat;
        const total = document.getElementById('total');
        const newTotal = newSubTotal + totalVat;
        total.innerText = newTotal;
    }
    else {
        alert('At first, You Have to Buy a Ticket');
    }
})
document.getElementById('book-now').addEventListener('click',function(){
    
    const firstClassInputArea = document.getElementById('first-class-input-area');
    const secondClassInputArea = document.getElementById('second-class-input-area');
    if (firstClassInputArea.value == 0 && secondClassInputArea.value == 0) {
        alert("You Have to Buy Minimum One Ticket.");        
    }
    else{
    document.getElementById('hide').style.display = 'none';
    const buyFirstClassTicket = document.getElementById('buy-first');
    buyFirstClassTicket.innerText = firstClassInputArea.value
    const buySecondClassTicket = document.getElementById('buy-second');
    buySecondClassTicket.innerText = secondClassInputArea.value;
    const finalAmount = document.getElementById('final-amount');
    const total = document.getElementById('total');
    finalAmount.innerText = total.innerText;
    document.getElementById('show').style.display = 'block'}
    
})

