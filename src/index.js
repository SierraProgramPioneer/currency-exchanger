import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import ExchangeService from "./js/exchange-service";


// Busines Logic

function getCodes() {
    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

    request.addEventListener("loadend", function () {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
            populateCurrencyOptions(response);
        } else {
            printError("errorArray");
        }
    });

    request.open("GET", url, true);
    request.send();
}


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
function populateCurrencyOptions(codes) {

    codes.forEach(function (currency) {
        if (currency !== "USD") {
            const option = document.createElement("option");
            option.innerText = currency;
            option.value = currency;
            currencyOptionsDisplay.append(option);
            document.getElementById("currencyOptions").append(option);
        }
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
    getCodes();
});

