const BASE_URL = "https://demo.omegasys.eu/ps/ssw/datafeed/transactions?brandId=1&brandPassword=OMEGA&lastTransactionId=6945157&flatMode=true"
// alternate URL: 
// const BASE_URL = "https://jsonplaceholder.typicode.com/photos"

export const jsonFeed = {
  all() {
    return fetch(
      `${BASE_URL}`,
      { credentials: "include" }
    ).then(res => res.json());
  }
};