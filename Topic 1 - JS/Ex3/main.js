function callApi(){

  let promise = makePromise(chuckApi);
  promise.then(function(response){
    let joke = response.value.joke;
    let para = document.createElement("P");
    let joketext = document.createTextNode(joke);
    para.appendChild(joketext);
    document.querySelector("#main").appendChild(para);
  });

  promise.catch(function(){
    let section = document.querySelector("#main");
    section.style.background = "red";
  });
}

const chuckApi = {
  method: "GET",
  url: "http://api.icndb.com/jokes/random",
  async: true
}

function makePromise(config){
	return new Promise(function(resolve,reject){
		let xhr = new XMLHttpRequest();
		xhr.responseType = "json";
		xhr.open(config.method, config.url, config.async);
		xhr.onload = function(){
			if (xhr.status === 200){
				resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
		};
		xhr.onerror = function(){
			reject(xhr.statusText);
		};
		xhr.send();
	});
}
