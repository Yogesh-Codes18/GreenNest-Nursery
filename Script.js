const orderMsgEl = document.querySelector('.order-msg')
const formEl = document.querySelector('form')
const cartEl = document.querySelectorAll('.add-to-cart')

formEl.addEventListener('submit', message)

function message (event) {
    event.preventDefault()
    orderMsgEl.textContent = 'Your order has been placed. Thank you for your purchase.'
}

cartEl.forEach(function (cart){
    cart.addEventListener('click', () => {
        alert("Added to cart")
    })
})