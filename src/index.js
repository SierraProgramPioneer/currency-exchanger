import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import ExchangeService from "./js/exchange-service";


// Busines Logic

function calculateExchangeAmount(dollarAmount, selectedCurrency) {
    // Return a promise (defining conditions of promise) from ExchangeService.getCurrencyData
    let exchangePromise = ExchangeService.getCurrencyData();

    // Determine what to do if promise returns resolved
    exchangePromise.then(function (currencyData) {
        for (let key in currencyData) {
            if (key === selectedCurrency) {
                const exchangeRate = currencyData[key];
                const exchangedAmount = dollarAmount * exchangeRate;
                printResult(dollarAmount, selectedCurrency, exchangedAmount);
            }
        }
    })
        // If not resolved, catch error
        .catch(function (error) {
            printError(error);
        });
}


// UI Logic

// Logic to Populate currency options with current codes

function printResult(dollarAmount, selectedCurrency, exchangedAmount) {
    document.getElementById("results").innerText = `$${dollarAmount} USD is ${exchangedAmount} ${selectedCurrency}`;
}


function printError(errorStatus) {
    document.getElementById("results").innerText = `${errorStatus}: There was an error with your request`;
}


function clearPastResults() {
    document.getElementById("results").innerText = null;
}


function populateCurrencyOptions() {
    // Return a promise (defining conditions of promise) from ExchangeService.getCurrencyData
    let promise = ExchangeService.getCurrencyData();

    // Determine what to do if promise returns resolved
    promise.then(function (currencyData) {
        for (let key in currencyData.conversion_rates) {
            if (key !== "USD") {
                const option = document.createElement("option");
                option.innerText = key;
                option.value = key;
                document.getElementById("currencyOptions").append(option);
            }
        }
    })
        // If not resolved, catch error
        .catch(function (errorStatus) {
            printError(errorStatus);
        });
}


function handleFormSubmission(event) {
    event.preventDefault();
    const dollarAmount = document.getElementById("usdAmount").value;
    const currencyOptions = document.getElementById("currencyOptions");
    const selectedCurrency = currencyOptions.value;
    calculateExchangeAmount(dollarAmount, selectedCurrency);
    document.getElementById("usdAmount").value = null;
    currencyOptions.selectedIndex = 0;
}


window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", handleFormSubmission);
    document.getElementById("usdAmount").addEventListener("input", clearPastResults);
    document.getElementById("currencyOptions").addEventListener("click", clearPastResults);
    populateCurrencyOptions();
});

