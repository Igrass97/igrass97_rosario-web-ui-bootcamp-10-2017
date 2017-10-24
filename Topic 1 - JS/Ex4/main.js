//Request Config Object
const gitHubApi = {
	method: "GET",
	url: "https://api.github.com/search/repositories",
	boolean: true
};

function makePromise(config){
	return new Promise(function(resolve,reject){
		let xhr = new XMLHttpRequest();
		xhr.responseType = "json";
		let param = "?q=" + document.getElementById("searchfield").value;
		console.log(param);
		xhr.open(config.method, config.url + param, config.boolean);
		xhr.onload = function(){
			if (xhr.status === 200){
				resolve(xhr.response);
			} else {reject(xhr.statusText);}
		};
		xhr.onerror = function(){
			reject(xhr.statusText);
		};
		xhr.send();
	});
}

function search(){
	let promise = makePromise(gitHubApi);
	let list = document.getElementById("repolist");

	//Removing older search (if exists)
		while (list.hasChildNodes()) {
  			list.removeChild(list.lastChild);
		}
	
	//Promise fullfiled
	promise.then((response) => {
		response.items.forEach((repo) => {
			console.log(repo);
			let item = document.createElement("LI");
			let link = document.createElement("A");
			link.setAttribute("href", repo.html_url);
			let text = document.createTextNode(repo.full_name);
			link.appendChild(text);
			item.appendChild(link);
			list.appendChild(item);
		});
	})
	//Error handling
	.catch((err) => {
		console.log(err);
	});
}