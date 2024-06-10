var siteName = document.getElementById("basic-name");
var siteUrl = document.getElementById("basic-url");
var allData;
if (localStorage.getItem("allData") != null) {
  allData = JSON.parse(localStorage.getItem("allData"));
  displayData();
} else {
  allData = [];
}

function getDate() {
  if (validName() == true && validUrl() == true) {
    var web = {
      name: siteName.value,
      url: siteUrl.value,
    };
    allData.push(web);
    localStorage.setItem("allData", JSON.stringify(allData));
    displayData();
    clearData();
  }else{
    alert("Please Make Sure That Name Starts With Capital Char \nAnd URL Is Valid")
  }
}

function clearData() {
  siteName.value = "";
  siteUrl.value = "";
}
function displayData() {
  var cartoona = "";
  for (var i = 0; i < allData.length; i++) {
    cartoona += `
        <tr>
          <td>${i}</td>
          <td>${allData[i].name}</td>
          <td><a href="${allData[i].url}" class="btn btn-outline-success"> <i class="fa-solid fa-eye pe-2"></i>
          visit</a></td>
          <td><button onclick="deletData(${i})" class="btn btn-outline-danger"> <i class="fa-solid fa-trash-can"></i>
          Delete</button></td>
        </tr>`;
  }
  document.getElementById("demo").innerHTML = cartoona;
}
function deletData(index) {
  allData.splice(index, 1);
  localStorage.setItem("allData", JSON.stringify(allData));
  displayData();
}
function validName() {
  var regex = /^[A-Z][a-z]*$/g;
  if (regex.test(siteName.value) == true) {
    return true;
  }
  return false;
}
function validUrl() {
  var regex =
    /^((http(s?)?):\/\/)?([wW]{3}\.)?[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/g;
  if (regex.test(siteUrl.value) == true) {
    return true;
  }
  return false;
}
