'use strict';

var operatingHours=['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

var locationDetailsArray=[];

function LocationDetails(locationName, minCustomersHourly, avgPerCustHourly, maxCustomersHourly, cookiesSalesHourly, randomCustomersHourly, totalSalesDaily){
  this.locationName=locationName;
  this.minCustomersHourly=minCustomersHourly;
  this.maxCustomersHourly=maxCustomersHourly;
  this.avgPerCustHourly=avgPerCustHourly;
  this.cookiesSalesHourly=cookiesSalesHourly;
  this.randomCustomersHourly=randomCustomersHourly;
  this.totalSalesDaily=totalSalesDaily;
}

//With help from Saurav Kadaria
var location1= new LocationDetails('First and Pike', 23, 6.3, 65, [], [], 0);
locationDetailsArray.push(location1);
var location2= new LocationDetails('SeaTac Airport', 3, 1.2, 24, [], [], 0);
locationDetailsArray.push(location2);
var location3= new LocationDetails('Seattle Center',	11,	3.7, 38, [], [], 0);
locationDetailsArray.push(location3);
var location4= new LocationDetails('Capitol Hill',	20,	2.3, 38, [], [], 0);
locationDetailsArray.push(location4);
var location5= new LocationDetails('Alki',	2, 4.6,	16, [], [], 0);
locationDetailsArray.push(location5);


//Following codes have been referenced from Sam's class lectures
LocationDetails.prototype.calculateRandomCustomersHourly= function(){
  for (var i=0; i<operatingHours.length; i++){
    this.randomCustomersHourly.push(randomNumberGenerator(this.minCustomersHourly, this.maxCustomersHourly));
  }
};

LocationDetails.prototype.calculateCookiesSalesHourly= function(){
  for (var i=0; i<operatingHours.length; i++){
    var hourlySales= Math.ceil(this.randomCustomersHourly[i]*this.avgPerCustHourly);
    this.cookiesSalesHourly.push(hourlySales);
    this.totalSalesDaily += hourlySales;
  }
};

//This function generates random number between a min and max
function randomNumberGenerator(min, max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

var eachHourstotal=0;

//The following calculates the total sales done at each stores combined per hour and put it in an array
var totalSalesHourly=[];
var salesTotalHourly = 0;
function calculateAllStoresHourly(){
  for(var i=0; i<operatingHours.length; i++){
    for (var j=0; j<locationDetailsArray.length; j++){
      eachHourstotal+=locationDetailsArray[j].cookiesSalesHourly[i];
    }
    totalSalesHourly.push(eachHourstotal);
    salesTotalHourly = salesTotalHourly + eachHourstotal;
    eachHourstotal=0;
  }
  totalSalesHourly.push(salesTotalHourly);
}

//Create Handlers for all parameteres:

function handleInputs(event){
  event.preventDefault();
  var newStore =event.target.where.value;
  var minimumHourly=parseInt(event.target.min_sale.value);
  var maximumHourly=parseInt(event.target.max_sale.value);
  var averageHourly=parseInt(event.target.avg_sale.value);
  if(maximumHourly<minimumHourly){
    alert('Maximum number of cookies cannot be smaller than minimum number of cookies');
  }
  else{

    var newData= new LocationDetails(newStore, minimumHourly, averageHourly, maximumHourly, [], [], 0);
    locationDetailsArray.push(newData);

    report.innerHTML='';
    totalSalesHourly=[];
    salesTotalHourly = 0;
    newData.calculateRandomCustomersHourly();
    newData.calculateCookiesSalesHourly();
    calculateAllStoresHourly();
    timeHeader();
    fillWithCookies();
    console.log('total sales hourly ' + totalSalesHourly);
  }
}
var newStore=document.getElementById('new-store');
newStore.addEventListener('submit', handleInputs);



//With assistance from Dana
function timeHeader(){
  var trEl = document.createElement('tr');
  var thLocation= document.createElement('th');
  thLocation.textContent='Location';
  trEl.appendChild(thLocation);
  for (var i=0; i<operatingHours.length; i++){
    var thEl=document.createElement('th');
    thEl.textContent = operatingHours[i];
    trEl.appendChild(thEl);
  }
  var totalEachLocation=document.createElement('th');
  totalEachLocation.textContent='Total';
  trEl.appendChild(totalEachLocation);
  report.appendChild(trEl);
}


function fillWithCookies(){
  for (var i=0;i<locationDetailsArray.length;i++){
    var trEl= document.createElement('tr');
    var thLocation= document.createElement('th');
    thLocation.textContent=locationDetailsArray[i].locationName;
    trEl.appendChild(thLocation);
    for (var j=0;j<operatingHours.length;j++)
    {
      var tdEl= document.createElement('td');
      tdEl.textContent=locationDetailsArray[i].cookiesSalesHourly[j];
      trEl.appendChild(tdEl);
    }
    var totalCookies=document.createElement('td');
    totalCookies.textContent=locationDetailsArray[i].totalSalesDaily;
    trEl.appendChild(totalCookies);
    report.appendChild(trEl);
  }
  var trTotal = document.createElement('tr');
  var thTotal= document.createElement('th');
  thTotal.textContent='Total per hour';
  trTotal.appendChild(thTotal);
  report.appendChild(trTotal);
  for (var k=0;k<operatingHours.length+1;k++)
  {
    var tdTotalAcross= document.createElement('td');
    tdTotalAcross.textContent=totalSalesHourly[k];
    trTotal.appendChild(tdTotalAcross);
  }
}

var report= document.getElementById('displayLocations');


console.log('this is cookies total array', totalSalesHourly);

for (var i=0; i<locationDetailsArray.length; i++){
  locationDetailsArray[i].calculateRandomCustomersHourly();
  locationDetailsArray[i].calculateCookiesSalesHourly();
}
calculateAllStoresHourly();
timeHeader();
fillWithCookies();

