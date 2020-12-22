const stripe = Stripe('pk_test_51I13ubFsT7oHHUTkkULBRhpwm3W42bEBVZeO6SBCFtAomUKfQWXFiZGwdBLNJZTlbzf3lQ4LUnkZT1i3HW45aXWM00G3CaW0n7');

const checkoutButtons = document.getElementsByClassName('stripe-checkout-button');

Array.prototype.forEach.call(checkoutButtons, checkoutButton => {
    const priceId = checkoutButton.getAttribute("stripe-price-id");
    if(null === priceId) {
        console.log("ERROR: Missing expected Stripe product price ID in stripe-price-id attribute of stripe-checkout-button", checkoutButton);
    } else {
        console.log("Enabling Stripe product price ID:", priceId);
        checkoutButton.addEventListener('click', function () {
            /*
             * When the customer clicks on the button, redirect
             * them to Checkout.
             */
            stripe.redirectToCheckout({
                lineItems: [{price: priceId, quantity: 1}],
                mode: 'subscription',
                /*
                 * Do not rely on the redirect to the successUrl for fulfilling
                 * purchases, customers may not always reach the success_url after
                 * a successful payment.
                 * Instead use one of the strategies described in
                 * https://stripe.com/docs/payments/checkout/fulfill-orders
                 */
                // TODO: Create a page for successUrl
                successUrl: 'https://endowl.com/success',
                cancelUrl: window.location.href,
            })
                .then(function (result) {
                    if (result.error) {
                        /*
                         * If `redirectToCheckout` fails due to a browser or network
                         * error, display the localized error message to your customer.
                         */
                        const displayError = document.getElementById('error-message');
                        displayError.textContent = result.error.message;
                    }
                });
        });

    }

})
