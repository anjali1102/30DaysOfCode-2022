let table = document.getElementById("table");

for (let i = 0; i < 8; i++) {
  let tr = document.createElement("tr");
  let white = i % 2 == 0 ? true : false;

  for (let j = 0; j < 8; j++) {
    let td = document.createElement("td");
    if (white) {
      td.setAttribute("class", "box white");
    } else {
      td.setAttribute("class", "box black");
    }
    white = !white;
    tr.appendChild(td);
  }

  table.appendChild(tr);
}
