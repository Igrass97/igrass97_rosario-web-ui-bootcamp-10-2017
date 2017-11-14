let ws = new WebSocket('ws://demos.kaazing.com/echo');

ws.onopen = function () {
  ws.send("Connected");
};


ws.onerror = function (error) {
  console.log('Error: ' + error);
};


ws.onmessage = function (e) {
  let box = document.getElementById('msgView');
  let msgNode = document.createTextNode(e.data);
  let paragraph = document.createElement('p');
  paragraph.appendChild(msgNode);
  box.appendChild(paragraph);
};

function sendMsg(){
  let msg = document.getElementById('msgBox').value;
  ws.send(msg);
}