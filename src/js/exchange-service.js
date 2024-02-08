export default class ExchangeService {

    // static exchangeDollars(dollarAmount, selectedCurrency) {
    //     return new Promise(function (resolve, reject) {
    //         let currencyRequest = new XMLHttpRequest();
    //         const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    //         request.addEventListener("loadend", function () {

    //         });
    //         request.open("GET", url, true);
    //         request.send();
    //     })
    // }

    static getCurrencyCodes() {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
            request.addEventListener("loadend", function () {
                const response = JSON.parse(this.responseText);
                if (this.status === 200) {
                    let currencyCodes = [];
                    for (let key in response.conversion_rates) {
                        currencyCodes.push(key);
                    }
                    resolve(currencyCodes);
                } else {
                    reject("error");
                }
            });
            request.open("GET", url, true);
            request.send();
        });
    }
}

