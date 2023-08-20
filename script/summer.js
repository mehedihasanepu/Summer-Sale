let totalPrice = 0;
function cardClickBtn(prices) {
    const priceText = prices.childNodes[3].childNodes[5].childNodes[0].innerText;
    const price = parseFloat(priceText)
    console.log(price);


    // total price section 

    totalPrice = parseFloat(totalPrice) + price;
    const totalPriceFloat = totalPrice.toFixed(2);
    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.innerText = totalPriceFloat;


    // apply coupon btn enable section 

    const applyButton = document.getElementById("btn-apply");
    if (totalPrice >= 200) {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true);
    }


    // productName section 


    const productName = prices.childNodes[3].childNodes[3].innerText;
    console.log(productName);
    const productEntry = document.getElementById('product-name');

    const count = productEntry.childElementCount;

    const p = document.createElement('p');
    p.innerHTML = `
        ${count + 1}. ${productName}
        `
    productEntry.appendChild(p);


    // Make Purchase

    const purchaseButton = document.getElementById('btn-purchase')
    if (totalPrice >= 0) {
        purchaseButton.removeAttribute('disabled');
    }
    else {
        purchaseButton.setAttribute('disabled', true);
    }
}



// apply coupon section
document.getElementById('btn-apply').addEventListener('click', function () {
    const couponInput = document.getElementById("coupon-input");
    if (couponInput.value === 'SELL200') {
        // discount section 

        discount = (20 * totalPrice) / 100;
        const discountFloat = discount.toFixed(2);
        const discountElement = document.getElementById("discount-price");
        discountElement.innerText = discountFloat;

        // total section 
        total = totalPrice - discountFloat;
        const totalFloat = total.toFixed(2);
        const totalElement = document.getElementById("total");
        totalElement.innerText = totalFloat;
    }
    else {
        alert('please enter valid coupon');
    }
})



// go home section

document.getElementById('go-home').addEventListener('click', function () {
    window.location.href = 'index.html';

})