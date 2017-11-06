if (window.File && window.FileReader && window.FileList && window.Blob) {
  console.log("supported");
} else {
  alert('The File APIs are not fully supported in this browser.');
}

function fileSelect(event) {
  event.stopPropagation();
  event.preventDefault();

  let files = event.dataTransfer.files;

  for (let i=0; i < files.length; i++){
    alert(`Uploaded ${files[i].name}`);
  }

}

function dragOver(event) {
  event.stopPropagation();
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

var drop = document.getElementById('drop-zone');
drop.addEventListener('dragover', dragOver, false);
drop.addEventListener('drop', fileSelect, false);