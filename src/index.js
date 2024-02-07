import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";




// UI Logic


function printResult(dollarAmount, selectedCurrency) {

    document.getElementById("results").innerText = `Amount in selected currency is ${dollarAmount} ${selectedCurrency}`;
}

function clearPastResults() {
    document.getElementById("results").innerText = null;
}


function handleFormSubmission(event) {
    event.preventDefault();
    const dollarAmount = document.getElementById("usdAmount").value;
    const currencyOptions = document.getElementById("currencyOptions");
    const selectedCurrency = currencyOptions.value;
    printResult(dollarAmount, selectedCurrency);
    document.getElementById("usdAmount").value = null;
    currencyOptions.selectedIndex = 0;
}


window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", handleFormSubmission);
    document.getElementById("usdAmount").addEventListener("input", clearPastResults);
    document.getElementById("currencyOptions").addEventListener("click", clearPastResults);
});

