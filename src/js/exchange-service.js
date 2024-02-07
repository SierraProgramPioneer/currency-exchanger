export default class ExchangeService {
    static exchangeDollars(dollarAmount, selectedCurrency) {
        return new Promise(function (resolve, reject) {
            let currencyRequest = new XMLHttpRequest();
            const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
            request.addEventListener("loadend", function () {

            });
            request.open("GET", url, true);
            request.send();
        })
    }
}