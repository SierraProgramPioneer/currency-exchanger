import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import ExchangeService from "./js/exchange-service";


// Busines Logic

function calculateExchange(dollarAmount, selectedCurrency) {
    let exchangePromise = ExchangeService.exchangeDollars(dollarAmount, selectedCurrency);
    exchangePromise.then(function (exchangeDataArray) {
        printResult(exchangeDataArray);
    }).catch(function (errorArray) {
        printError(errorArray);
    });
}


// UI Logic

// Logic to Populate currency options with current codes
function populateCurrencyOptions() {
    const codes = ["USD", "AED", "CAN"];
    let currencyOptionsDisplay = document.getElementById("currencyOptions");
    codes.forEach(function (currency) {
        const option = document.createElement("option");
        option.innerText = currency;
        option.value = currency;
        currencyOptionsDisplay.append(option);
    });
}



function printResult(exchangeDataArray) {
    console.log(exchangeDataArray);
    document.getElementById("results").innerText = "result";
}

function printError(errorArray) {
    console.log(errorArray);
    document.getElementById("results").innerText = "error";
}


function clearPastResults() {
    document.getElementById("results").innerText = null;
}


function handleFormSubmission(event) {
    event.preventDefault();
    const dollarAmount = document.getElementById("usdAmount").value;
    const currencyOptions = document.getElementById("currencyOptions");
    const selectedCurrency = currencyOptions.value;
    calculateExchange(dollarAmount, selectedCurrency);
    document.getElementById("usdAmount").value = null;
    currencyOptions.selectedIndex = 0;
}


window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", handleFormSubmission);
    document.getElementById("usdAmount").addEventListener("input", clearPastResults);
    document.getElementById("currencyOptions").addEventListener("click", clearPastResults);
    populateCurrencyOptions();
});

