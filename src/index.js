import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import ExchangeService from "./js/exchange-service";


// Busines Logic

function calculateExchangeAmount(dollarAmount, selectedCurrency) {
    let exchangePromise = ExchangeService.getCurrencyData();
    exchangePromise.then(function (currencyData) {

        for (let key in currencyData) {
            if (key === selectedCurrency) {
                const exchangeRate = currencyData[key];
                const exchangedAmount = dollarAmount * exchangeRate;
                printResult(dollarAmount, selectedCurrency, exchangedAmount);
            }
        }

    }).catch(function (error) {
        printError(error);
    });
}


// UI Logic

// Logic to Populate currency options with current codes

function printResult(dollarAmount, selectedCurrency, exchangedAmount) {
    document.getElementById("results").innerText = `$${dollarAmount} USD is ${exchangedAmount} ${selectedCurrency}`;
}


function printError(error) {
    document.getElementById("results").innerText = error;
}


function clearPastResults() {
    document.getElementById("results").innerText = null;
}


function populateCurrencyOptions() {
    let promise = ExchangeService.getCurrencyData();
    promise.then(function (currencyData) {

        let currencyCodes = [];
        for (let key in currencyData) {
            if (key !== "USD") {
                currencyCodes.push(key);
            }
        }
        currencyCodes.forEach(function (currency) {
            const option = document.createElement("option");
            option.innerText = currency;
            option.value = currency;
            document.getElementById("currencyOptions").append(option);

        });
    }, function (error) {
        printError(error);
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

