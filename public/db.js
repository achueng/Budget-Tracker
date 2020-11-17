const request = window.indexedDB.open("budget", 1);

request.onupgradeneeded = function (event) {
    //
};

request.onsuccess = function (event) {
    // if the user is online, connect with the database to update data
    if (navigator.onLine) {
      checkDatabase();
    }
};
  
request.onerror = function (event) {
    // log error
    console.log(event.target.errorCode);
};

function saveRecord() {
    // code here
}

function checkDatabase() {
    // code here
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);