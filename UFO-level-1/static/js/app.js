// from data.js
var tableData = data;

// create table for display
function populateTable(filteredTable) {
  // iterate through filtered rows
  var outputTable = document.getElementById("ufo-table");

  //var x = outputTable.rows.length;
  //if (x > 0) {
    document.getElementsByTagName("tbody")[0].innerHTML = outputTable.rows[0].innerHTML;
  //};


  filteredTable.forEach(function(sighting) {
    // store table data in temp fields
    var col0 = sighting.datetime;
    var col1 = sighting.city;
    var col2 = sighting.state;
    var col3 = sighting.country;
    var col4 = sighting.shape;
    var col5 = sighting.duration;
    var col6 = sighting.comments;

    var newRow = outputTable.insertRow(-1);
    // Insert row and cells for each table item
    // var row = outputTable.insertRow(0);
    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    var cell3 = newRow.insertCell(3);
    var cell4 = newRow.insertCell(4);
    var cell5 = newRow.insertCell(5);
    var cell6 = newRow.insertCell(6);

    // Populate cells with data
    cell0.innerHTML = col0;
    cell1.innerHTML = col1;
    cell2.innerHTML = col2;		
    cell3.innerHTML = col3;
    cell4.innerHTML = col4;
    cell5.innerHTML = col5;		
    cell6.innerHTML = col6;		
    
	});
 
  return;
}

var filterButton = d3.select("#filter-btn");

// on click of filter table button call filter function
filterButton.on("click", function() {
  var ufo_date_input = d3.select("#datetime");
  var ufo_date = ufo_date_input.property("value");
  console.log(ufo_date);
  var filteredTable = tableData.filter(function(sighting) { return sighting.datetime == ufo_date });
  console.log(filteredTable);
  console.log(filteredTable.length);
  populateTable(filteredTable);
});