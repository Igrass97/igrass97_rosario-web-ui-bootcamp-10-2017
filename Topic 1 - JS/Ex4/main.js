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

let gitHubApi = {
	method: "GET",
	url: "https://api.github.com/search/repositories",
	boolean: true
};


function search(){
	let promise = makePromise(gitHubApi);
	let list = document.getElementById("repolist");
		while (list.hasChildNodes()) {
  			list.removeChild(list.lastChild);
		}
	promise.then(function(response){
		response.items.forEach(function(repo){
			let repourl = repo.html_url;
			console.log(repourl);
			let fullname = repo.full_name;
			let item = document.createElement("LI");
			let link = document.createElement("A");
			link.setAttribute("href", repourl);
			let text = document.createTextNode(fullname);
			link.appendChild(text);
			item.appendChild(link);
			list.appendChild(item);
		});
	});
}