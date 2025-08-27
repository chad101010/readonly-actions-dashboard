var table = document.getElementById("sortable-table");
var tbody = table.getElementsByTagName("tbody")[0];
var cells = tbody.getElementsByTagName("div");

for (var i = 0, len = cells.length; i < len; i++) {
  if (cells[i].innerHTML == "Incomplete") {
    cells[i].style.borderLeft = "solid #D34848";
  }
  if (cells[i].innerHTML == "Complete") {
    cells[i].style.borderLeft = "solid #26B659";
  }
  if (cells[i].innerHTML == "In Progress") {
    cells[i].style.borderLeft = "solid #E29E5A";
  }
  if (cells[i].innerHTML == "Validating WO") {
    cells[i].style.borderLeft = "solid #D34848";
  }
  if (cells[i].innerHTML == "Validated") {
    cells[i].style.borderLeft = "solid #26B659";
  }
  if (cells[i].innerHTML == "Inoperable") {
    cells[i].style.borderLeft = "solid #D34848";
  }
  if (cells[i].innerHTML == "Operable") {
    cells[i].style.borderLeft = "solid #26B659";
  }
}

var data = document.getElementsByClassName("Status");
for (var i = 0, len = data.length; i < len; i++) {
  if (data[i].innerHTML == "Complete") {
    data[i].style.borderLeft = "solid #26B659";
  }
  if (data[i].innerHTML == "Incomplete") {
    data[i].style.borderLeft = "solid #D34848";
  }
  if (data[i].innerHTML == "In Progress") {
    data[i].style.borderLeft = "solid #E29E5A";
  }
  if (data[i].innerHTML == "Inoperable") {
    data[i].style.borderLeft = "solid #D34848";
  }
  if (data[i].innerHTML == "Operable") {
    data[i].style.borderLeft = "solid #26B659";
  }
}

var data = document.getElementsByClassName("Status");
for (var i = 0, len = data.length; i < len; i++) {
  if (data[i].innerHTML == "Open") {
    data[i].style.borderLeft = "solid #D34848";
  }
  if (data[i].innerHTML == "Closed") {
    data[i].style.borderLeft = "solid #26B659";
  }
  if (data[i].innerHTML == "Validating WO") {
    data[i].style.borderLeft = "solid #E29E5A";
  }
  if (data[i].innerHTML == "Inoperable") {
    data[i].style.borderLeft = "solid #D34848";
  }
  if (data[i].innerHTML == "Operable") {
    data[i].style.borderLeft = "solid #26B659";
  }
}

var table = document.getElementById("sortable-table");
var tbody = table.getElementsByTagName("tbody")[0];
var cells = tbody.getElementsByTagName("div");

for (var i = 0, len = cells.length; i < len; i++) {
  if (cells[i].innerHTML == "Incomplete") {
    cells[i].style.borderLeft = "solid #D34848";
  }
  if (cells[i].innerHTML == "Complete") {
    cells[i].style.borderLeft = "solid #26B659";
  }
  if (cells[i].innerHTML == "In Progress") {
    cells[i].style.borderLeft = "solid #E29E5A";
  }
  if (cells[i].innerHTML == "Validating WO") {
    cells[i].style.borderLeft = "solid #D34848";
  }
  if (cells[i].innerHTML == "Validated") {
    cells[i].style.borderLeft = "solid #26B659";
  }
  if (cells[i].innerHTML == "Inoperable") {
    cells[i].style.borderLeft = "solid #D34848";
  }
  if (cells[i].innerHTML == "Operable") {
    cells[i].style.borderLeft = "solid #26B659";
  }
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openTabMenu(evt, tabName, lco) {
  var i;
  var tabcontent;
  var tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById("System").style.display = "block";
  $("div.dropdown select").val(lco).change();
}

$(document).on("change", ".div-toggle", function () {
  var target = $(this).data("target");
  var show = $("option:selected", this).data("show");
  $(target).children().addClass("hide");
  $(show).removeClass("hide");
});
$(document).ready(function () {
  $(".div-toggle").trigger("change");
});

