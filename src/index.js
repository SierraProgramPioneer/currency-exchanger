import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";




// UI Logic


function printResult(dollarAmount, selectedCurrency) {
    console.log(dollarAmount);
    console.log(selectedCurrency);
}


function handleFormSubmission(event) {
    event.preventDefault();
    const dollarAmount = document.getElementById("usdAmount").value;
    const currencyOptions = document.getElementById("currencyOptions");
    const selectedCurrency = currencyOptions.value;
    printResult(dollarAmount, selectedCurrency);
}


window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", handleFormSubmission);
});

