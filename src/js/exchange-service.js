export default class ExchangeService {

    static getCurrencyData() {
        // Will Return a Promise to with resolve or rejected to the Function that calls this function
        return new Promise(function (resolve, reject) {
            // Create a new request and URL variable 
            let request = new XMLHttpRequest();
            const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

            // Add Event Listener to Request Object to resolve after loadend
            request.addEventListener("loadend", function () {
                const response = JSON.parse(this.responseText);
                // Condition upon which promise is resolved and values passed
                if (this.status === 200) {
                    resolve(response);
                }
                // Condition upon which promise is rejected and values passed
                else {
                    reject(this.status);
                }
            });

            // Open and Send Request
            request.open("GET", url, true);
            request.send();
        });
    }
}
