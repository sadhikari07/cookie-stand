'use strict';

var operatingHours=['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', 'total'];

var location1={
  min:23,
  max:65,
  avgPerCust:6.3,
  startingNumbers: [this.min, this.max, this.avgPerCust],
  cookiesSalesRecord:[],
  totalSales: 0,
  cookiesSales: function() {
    for (var i=0; i<operatingHours.length;i++){
      //Source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      //with assistance from Dana
      var outputRandom=  Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.cookiesSalesRecord[i] = Math.floor(this.avgPerCust*outputRandom);
      this.totalSales=this.totalSales+this.cookiesSalesRecord[i];
      console.log(this.totalSales);
    }this.cookiesSalesRecord.push(this.totalSales);
    console.log(this.cookiesSalesRecord);
  },
};
location1.cookiesSales();
//With assistance from Sam
//A variable to hold all <ul> elements
var ulEl= document.getElementById('salesList1');
for (var i=0; i<operatingHours.length;i++){
  //create a <li> element
  var liEl= document.createElement('li');
  //give it content
  liEl.textContent=operatingHours[i] + ' : ' + location1.cookiesSalesRecord[i+1];
  //put it in the DOM
  ulEl.appendChild(liEl);
}



var location2={
  min:3,
  max:24,
  avgPerCust:1.2,
  startingNumbers: [this.min, this.max, this.avgPerCust],
  cookiesSalesRecord:[],
  totalSales: 0,
  cookiesSales: function() {
    for (var j=0; j<operatingHours.length;j++){
      //Source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      //with assistance from Dana
      var outputRandom=  Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.cookiesSalesRecord[j] = Math.floor(this.avgPerCust*outputRandom);
      this.totalSales+= this.cookiesSalesRecord[j];
    }this.cookiesSalesRecord.push(this.totalSales);
  },
};
location2.cookiesSales();
//With assistance from Sam
//A variable to hold all <ul> elements
var ulEl2= document.getElementById('salesList2');
for (var j=0; j<operatingHours.length;j++){
  //create a <li> element
  var liEl2= document.createElement('li');
  //give it content
  liEl2.textContent=operatingHours[j] + ' : ' + location2.cookiesSalesRecord[j+1];
  //put it in the DOM
  ulEl2.appendChild(liEl2);
}




var location3={
  min:11,
  max:38,
  avgPerCust:3.7,
  startingNumbers: [this.min, this.max, this.avgPerCust],
  cookiesSalesRecord:[],
  totalSales: 0,
  cookiesSales: function() {
    for (var k=0; k<operatingHours.length;k++){
      //Source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      //with assistance from Dana
      var outputRandom=  Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.cookiesSalesRecord[k] = Math.floor(this.avgPerCust*outputRandom);
      this.totalSales+= this.cookiesSalesRecord[k];
    }this.cookiesSalesRecord.push(this.totalSales);
  },
};
location3.cookiesSales();
//With assistance from Sam
//A variable to hold all <ul> elements
var ulEl3= document.getElementById('salesList3');
for (var k=0; k<operatingHours.length;k++){
  //create a <li> element
  var liEl3= document.createElement('li');
  //give it content
  liEl3.textContent=operatingHours[k] + ' : ' + location3.cookiesSalesRecord[k+1];
  //put it in the DOM
  ulEl3.appendChild(liEl3);
}



var location4={
  min:20,
  max:38,
  avgPerCust:2.3,
  startingNumbers: [this.min, this.max, this.avgPerCust],
  cookiesSalesRecord:[],
  totalSales: 0,
  cookiesSales: function() {
    for (var m=0; m<operatingHours.length;m++){
      //Source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      //with assistance from Dana
      var outputRandom=  Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.cookiesSalesRecord[m] = Math.floor(this.avgPerCust*outputRandom);
      this.totalSales+= this.cookiesSalesRecord[m];
    }this.cookiesSalesRecord.push(this.totalSales);
  },
};
location4.cookiesSales();
//With assistance from Sam
//A variable to hold all <ul> elements
var ulEl4= document.getElementById('salesList4');
for (var m=0; m<operatingHours.length;m++){
  //create a <li> element
  var liEl4= document.createElement('li');
  //give it content
  liEl4.textContent=operatingHours[m] + ' : ' + location4.cookiesSalesRecord[m+1];
  //put it in the DOM
  ulEl4.appendChild(liEl4);
}


var location5={
  min:2,
  max:operatingHours.length,
  avgPerCust:4.6,
  startingNumbers: [this.min, this.max, this.avgPerCust],
  cookiesSalesRecord:[],
  totalSales: 0,
  cookiesSales: function() {
    for (var n=0; n<operatingHours.length;n++){
      //Source:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      //with assistance from Dana
      var outputRandom=  Math.floor(Math.random() * (this.max - this.min)) + this.min;
      this.cookiesSalesRecord[n] = Math.floor(this.avgPerCust*outputRandom);
      this.totalSales+= this.cookiesSalesRecord[n];
    }this.cookiesSalesRecord.push(this.totalSales);
  },
};
location5.cookiesSales();
//With assistance from Sam
//A variable to hold all <ul> elements
var ulEl5= document.getElementById('salesList5');
for (var n=0; n<operatingHours.length;n++){
  //create a <li> element
  var liEl5= document.createElement('li');
  //give it content
  liEl5.textContent=operatingHours[n] + ' : ' + location5.cookiesSalesRecord[n+1];
  //put it in the DOM
  ulEl5.appendChild(liEl5);
}
