let matrix = [
  [01, "Ignacio Grassini", "igrass97@gmail.com"],
  [02, "Pepito Gloria", "pepito@gloria.com"],
  [03, "Lucia Jinete", "lucia@jinete.com"],
  [04, "Elvis Presley", "elvis@presley.com"],
  [05, "Ned Stark", "starkisthebest@winterfell.com"],
  [06, "Ricardo Fort", "maiameee@felfort.com"],
];

function createTable(matrix){
  let table = document.createElement("TABLE");
  table.appendChild(createTableHead());
  table.appendChild(createTableBody(matrix));
  document.getElementById("main-body").appendChild(table);
}


function createTableHead(){
  let tablehead = document.createElement("THEAD");
  let head1 = document.createElement("TH");
  let head2 = document.createElement("TH");
  let head3 = document.createElement("TH");
  head1.innerHTML = "ID";
  head2.innerHTML = "Full Name";
  head3.innerHTML = "E-mail";
  tablehead.appendChild(head1);
  tablehead.appendChild(head2);
  tablehead.appendChild(head3);
  tablehead.setAttribute("class","tablerow");
  return tablehead;
}

function createTableBody(matrix){
  let tablebody = document.createElement("TBODY");
  matrix.forEach(function(row){
    let tablerow = document.createElement("TR");
    row.forEach(function(cell){
      let tablecell = document.createElement("TD");
      tablecell.innerHTML = cell;
      tablerow.appendChild(tablecell);
    });
    tablerow.setAttribute("class","tablerow");
    tablebody.appendChild(tablerow);
  });
  return tablebody;
}

createTable(matrix);