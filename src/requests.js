const BASE_URL = "https://demo.omegasys.eu/ps/ssw/datafeed/transactions?brandId=1&brandPassword=OMEGA&lastTransactionId=6945157&flatMode=true"
// alternate URL: 
// const BASE_URL = "https://jsonplaceholder.typicode.com/comments"

export const jsonFeed = {
  all() {
    return fetch(
      `${BASE_URL}`,
      { credentials: "include" }
    ).then(res => res.json());
    // add feed manually due to internet connection
    // const feed = [
    //   {
    //     id: 6945158,
    //     partyId: 100121053,
    //     userId: "billwalker",
    //     gameInfoId: null,
    //     gameTranId: null,
    //     platformCode: "NA",
    //     platformTranId: null,
    //     gameId: null,
    //     tranType: "MACHIN_LOY",
    //     dateTime: "2019-02-05 03:44:16.477",
    //     amount: 0.0,
    //     currency: "GBP",
    //     balance: 0.0,
    //     rollbackTranId: null,
    //     rollbackTranType: null
    //   },
    //   {
    //     id: 6945159,
    //     partyId: 100120478,
    //     userId: "0835F880",
    //     gameInfoId: 5897,
    //     gameTranId: "1986205509",
    //     platformCode: "QFIRE_CAS",
    //     platformTranId: "DEMO_1210276551",
    //     gameId: "MGS_HTML5_108Heroes",
    //     tranType: "GAME_WIN",
    //     dateTime: "2019-02-05 03:47:29.833",
    //     amount: 17.9,
    //     currency: "GBP",
    //     balance: 1010073.04,
    //     rollbackTranId: null,
    //     rollbackTranType: null
    //   },
    //   {
    //     id: 6945160,
    //     partyId: 100120478,
    //     userId: "0835F880",
    //     gameInfoId: null,
    //     gameTranId: null,
    //     platformCode: "NETENT_CAS",
    //     platformTranId: "DEMO_2078923122",
    //     gameId: null,
    //     tranType: "PLTFRM_BON",
    //     dateTime: "2019-02-05 03:47:30.32",
    //     amount: 15.11,
    //     currency: "GBP",
    //     balance: 1010088.15,
    //     rollbackTranId: null,
    //     rollbackTranType: null
    //   },
    //   {
    //     id: 6945161,
    //     partyId: 100120416,
    //     userId: "D88D60FB",
    //     gameInfoId: 6044,
    //     gameTranId: "1215016677",
    //     platformCode: "GDFSI",
    //     platformTranId: "DEMO_1453823827",
    //     gameId: "demo",
    //     tranType: "GAME_WIN",
    //     dateTime: "2019-02-05 03:47:31.32",
    //     amount: 67.14,
    //     currency: "GBP",
    //     balance: 1008492.52,
    //     rollbackTranId: null,
    //     rollbackTranType: null
    //   },
    //   {
    //     id: 6945162,
    //     partyId: 100106735,
    //     userId: "test_password",
    //     gameInfoId: 5897,
    //     gameTranId: "1390079691",
    //     platformCode: "QFIRE_CAS",
    //     platformTranId: "DEMO_304675571",
    //     gameId: "MGS_HTML5_108Heroes",
    //     tranType: "GAME_WIN",
    //     dateTime: "2019-02-05 03:47:32.32",
    //     amount: 94.56,
    //     currency: "GBP",
    //     balance: 1019596.11,
    //     rollbackTranId: null,
    //     rollbackTranType: null
    //   }
    // ];
    // this.setState({ feed: feed });
  },

  one(){
    return fetch(
      `${BASE_URL}`,
      { credentials: "include" }
    ).then(res => res.json());
  }
};