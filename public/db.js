let db;

const request = window.indexedDB.open("budget", 1);

request.onupgradeneeded = function (event) {
    // creates an object store in indexedDB
    const db = event.target.result;
    db.createObjectStore("pending",{autoIncrement: true});
};

request.onsuccess = function (event) {
    // if the user is online, connect with the database to update data
    db = event.target.result;
    if (navigator.onLine) {
      checkDatabase();
    }
};
  
request.onerror = function (event) {
    // log error
    console.log(event.target.errorCode);
};

function saveRecord(record) {
    // create transaction on pending object store
    const transaction = db.transaction(["pending"], "readwrite");
    // access pending object store
    const budgetStore = transaction.objectStore("pending");
    // add record
    budgetStore.add(record);
}

function checkDatabase() {
    // code here
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);