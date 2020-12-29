var stripeElements = function(publicKey, setupIntent) {
    var stripe = Stripe(publicKey);
    var elements = stripe.elements();

    // Element styles
    var style = {
        base: {
            fontSize: "16px",
            color: "#32325d",
            fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
            fontSmoothing: "antialiased",
            "::placeholder": {
                color: "rgba(0,0,0,0.4)"
            }
        }
    };

    var card = elements.create("card", { style: style });

    card.mount("#card-element");

    // Element focus ring
    card.on("focus", function() {
        var el = document.getElementById("card-element");
        el.classList.add("focused");
    });

    card.on("blur", function() {
        var el = document.getElementById("card-element");
        el.classList.remove("focused");
    });

    // Handle payment submission when user clicks the pay button.
    var button = document.getElementById("submit");
    button.addEventListener("click", function(event) {
        event.preventDefault();
        changeLoadingState(true);
        var email = document.getElementById("email").value;

        console.log("DEBUG: setupIntent:", setupIntent);
        console.log("DEBUG: email:", email);

        stripe
            .confirmCardSetup(setupIntent.createdPresale.client_secret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: email
                    }
                }
            })
            .then(function(result) {
                if (result.error) {
                    changeLoadingState(false);
                    var displayError = document.getElementById("card-errors");
                    displayError.textContent = result.error.message;
                } else {
                    // The PaymentMethod was successfully set up
                    orderComplete(stripe, setupIntent.createdPresale.client_secret);
                }
            });
    });
};

var getSetupIntent = function(publicKey, setupIntentUrl) {
    // TODO: Remove 'amount' and 'currency' parameters used for testing, replace with pre-sale plan details
    // return fetch("/create-setup-intent", {
    return fetch(setupIntentUrl, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            amount: "24",
            currency: "USD"
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(setupIntent) {
            stripeElements(publicKey, setupIntent);
        });
};

var getPublicKey = function() {
    return fetch("/public-key", {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            getSetupIntent(response.publicKey);
        });
};

// Show a spinner on payment submission
var changeLoadingState = function(isLoading) {
    if (isLoading) {
        document.querySelector("button").disabled = true;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add("hidden");
    } else {
        document.querySelector("button").disabled = false;
        document.querySelector("#spinner").classList.add("hidden");
        document.querySelector("#button-text").classList.remove("hidden");
    }
};

/* Shows a success / error message when the payment is complete */
var orderComplete = function(stripe, clientSecret) {
    console.log("Stripe setupIntent successful!")
    stripe.retrieveSetupIntent(clientSecret).then(function(result) {
        var setupIntent = result.setupIntent;
        var setupIntentJson = JSON.stringify(setupIntent, null, 2);

        document.querySelector(".sr-payment-form").classList.add("hidden");
        document.querySelector(".sr-result").classList.remove("hidden");
        // TODO: Display success message instead of JSON after successful testing
        // document.querySelector("pre").textContent = setupIntentJson;
        // setTimeout(function() {
        //     document.querySelector(".sr-result").classList.add("expand");
        // }, 200);

        $("#presaleModal").modal().hide();
        $("#successModal").modal().show();

        changeLoadingState(false);
    });
};

// getPublicKey();

publicKey = "pk_test_51I13ubFsT7oHHUTkkULBRhpwm3W42bEBVZeO6SBCFtAomUKfQWXFiZGwdBLNJZTlbzf3lQ4LUnkZT1i3HW45aXWM00G3CaW0n7"
// setupIntentUrl = "http://127.0.0.1:3000/"
// setupIntentUrl = "https://pe6pl9xfw0.execute-api.us-east-1.amazonaws.com/prod/charge"  // TODO: Change this, still testing
setupIntentUrl = "https://pe6pl9xfw0.execute-api.us-east-1.amazonaws.com/prod/presale"
getSetupIntent(publicKey, setupIntentUrl)