function callApi(){
  const xhr = new XMLHttpRequest();
  const url = "http://api.icndb.com/jokes/random";
  xhr.responseType = "json";
  xhr.onload = function(){
    if (xhr.readyState === XMLHttpRequest.DONE){
      console.log(xhr.response);
      let joke = xhr.response.value.joke;
      let newNode = document.createElement("P");
      let textNode = document.createTextNode(joke);
      newNode.appendChild(textNode);
      document.body.querySelector("section").appendChild(newNode);
    }
  }
  xhr.open('GET', url);
  xhr.send();
}
