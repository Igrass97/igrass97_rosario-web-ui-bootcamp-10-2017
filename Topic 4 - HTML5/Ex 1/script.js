let db;

function start(){
  let request = indexedDB.open("DB");

  request.onsuccess = obj => {
   db = obj.target.result;
  }

  request.onupgradeneeded = obj => {
    db = obj.target.result; 
    db.createObjectStore("comments", {keyPath: "comment"});
  }

}


window.addEventListener("load", start, false);

function submitComment(){
  //LocalStorage
  let textArea = document.getElementById("textarea1");
  localStorage.setItem("comment", textArea.value);

  //IndexedDB
  let transaction = db.transaction(["comments"], "readwrite");
  let comments = transaction.objectStore("comments");
  let add = comments.add({comment: textArea.value});
}

function eraseComments(){
  //LocalStorage
  localStorage.clear();

  //IndexedDB
  let transaction = db.transaction(["comments"], "readwrite");
  var objectStore = transaction.objectStore("comments");
  var objectStoreRequest = objectStore.clear();
}