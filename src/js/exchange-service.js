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
        // request.addEventListener("loadend", function () {
        //     const response = JSON.parse(this.responseText);
        //     if (this.status === 200) {
        //         return currenciesArray;
        //     } else {
        //         printError("errorArray");
        //     }
        // });

        // request.open("GET", url, true);
        // request.send();



        return new Promise(function (resolve, reject) {
            let dog = 1;
            if (dog === 1) {
                resolve(["Sample currency 1", "Sample Currency 2", "Dog kisses"]);
            } else {
                reject("error");
            }
        });

    }

}