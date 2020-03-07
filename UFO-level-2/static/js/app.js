// from data.js
var tableData = data;

// create variables to hold arrays for unique table values
var dateValues = ["date"];
var cityValues = ["city"];
var stateValues = ["state"];
var countryValues = ["country"];
var shapeValues = ["shape"];

function getUniqueTableValues(dataTable) {
  dataTable.forEach(function(sighting) {
    if (!dateValues.includes(sighting.datetime)){
      dateValues.push(sighting.datetime);
    };
    if (!cityValues.includes(sighting.city)){
      cityValues.push(sighting.city);
    };
    if (!stateValues.includes(sighting.state)){
      stateValues.push(sighting.state);
    };
    if (!countryValues.includes(sighting.country)){
      countryValues.push(sighting.country);
    };
    if (!shapeValues.includes(sighting.shape)){
      shapeValues.push(sighting.shape);
    };
  });
}

function populateSelectOptions() {
  // date
  var selectDate = document.getElementById("selectDate");
  dateValues.forEach(function(date) {
    var myOption = document.createElement("option");
    myOption.text = date;
    myOption.value = date;
    selectDate.add(myOption);
  });

  // city
  var selectCity = document.getElementById("selectCity");
  cityValues.forEach(function(city) {
    var myOption = document.createElement("option");
    myOption.text = city;
    myOption.value = city;
    selectCity.add(myOption);
  });

  // state
  var selectState = document.getElementById("selectState");
  stateValues.forEach(function(state) {
    var myOption = document.createElement("option");
    myOption.text = state;
    myOption.value = state;
    selectState.add(myOption);
  });

  // country
  var selectCountry = document.getElementById("selectCountry");
  countryValues.forEach(function(country) {
    var myOption = document.createElement("option");
    myOption.text = country;
    myOption.value = country;
    selectCountry.add(myOption);
  });

  // shape
  var selectShape = document.getElementById("selectShape");
  shapeValues.forEach(function(shape) {
    var myOption = document.createElement("option");
    myOption.text = shape;
    myOption.value = shape;
    selectShape.add(myOption);
  });

}

// create table for display
function populateTable(filteredTable) {

  // get variables for ufo table and body
  var outputTable = document.getElementById("ufo-table");
  var outputBody = document.getElementById("ufo-body");
  outputBody.innerHTML = '';

  // iterate through filtered rows
  filteredTable.forEach(function(sighting) {
    // store table data in temp fields
    var col0 = sighting.datetime;
    var col1 = sighting.city;
    var col2 = sighting.state;
    var col3 = sighting.country;
    var col4 = sighting.shape;
    var col5 = sighting.durationMinutes;
    var col6 = sighting.comments;

    var newRow = outputBody.insertRow();
    // Insert row and cells for each table item
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
getUniqueTableValues(tableData);
// console.log(dateValues);
// console.log(cityValues);
// console.log(stateValues);
// console.log(countryValues);
// console.log(shapeValues);

populateSelectOptions();

// on click of filter table button call filter function
filterButton.on("click", function() {
  const ufo_date = d3.select('#selectDate option:checked').text();
  const ufo_city = d3.select('#selectCity option:checked').text();
  const ufo_state = d3.select('#selectState option:checked').text();
  const ufo_country = d3.select('#selectCountry option:checked').text();
  const ufo_shape = d3.select('#selectShape option:checked').text();

  console.log(ufo_date, ufo_city, ufo_state, ufo_country, ufo_shape);

  // create filter for table
  var ufo_array = []
  var ufo_filter = "";     
  if (ufo_date != "date") {
    ufo_array.push(`sighting.datetime == ${ufo_date}`);
  };
  if (ufo_city != "city") {
    ufo_array.push(`sighting.city == ${ufo_city}`);
  };
  if (ufo_state != "state") {
    ufo_array.push(`sighting.state == ${ufo_state}`);
  };
  if (ufo_country != "country") {
    ufo_array.push(`sighting.country == ${ufo_country}`);
  };
  if (ufo_shape != "shape") {
    ufo_array.push(`sighting.shape == ${ufo_shape}`);
  };

  ufo_filter = ufo_array.join(" & ");
  console.log(ufo_filter);

  var filteredTable = tableData.filter(function(sighting) { return ufo_filter});

  populateTable(filteredTable);
});