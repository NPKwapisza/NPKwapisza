const countries = ["Russia", "Kaliningrad","Turkey","Germany", "GreatBritain", "France", "Italy", "Spain", "Ukraine", "Poland", "Romania", "Netherlands", "Belgium", "CzechRepublic","Greece", "Portugal", "Sweden", "Hungary", "Belarus", "Austria", "Switzerland", "Bulgaria", "Denmark", "Greenland", "Finland", "Slovakia", "Norway", "Ireland", "Croatia", "Georgia", "Cyprus", "Armenia", "Serbia", "Montenegro", "Kazakhstan", "Azerbaijan", "Moldova", "Bosnia", "Albania", "Lithuania", "FYROM", "Slovenia", "Latvia", "Estonia", "Luxembourg","Malta", "Iceland", "Andorra", "Monaco", "Liechtenstein", "SanMarino"];

const colorsArray = ["red", "red", "lime", "yellow", "orange", "yellow", "red", "green", "lime", "yellow", "orange", "red", "green", "lime", "yellow", "orange", "red", "green", "lime", "yellow", "orange", "red", "green", "lime", "yellow", "orange", "red", "green", "lime", "yellow", "orange", "red", "green", "lime", "yellow", "orange", "red", "green", "lime", "yellow", "orange", "red", "green", "lime", "yellow", "orange", "red", "green", "lime", "yellow", "orange"];

console.log(countries.length, colorsArray.length);
let selectedCountry = "Poland";


for (let i = 0; i < countries.length; i++) {
    document.getElementById(countries[i]).onmouseover = function() {color(countries[i])};
};

function shuffle(array) { //final version won't shuffle but insert values proper for relations between countries
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function color(country){
  selectedCountry = country;
    for (let i = 0; i < countries.length; i++) {
      var basicColors = ["red", "green", "lime", "yellow", "orange"]; //used to shuffle, may be changed later
      for (let i = 0; i < colorsArray.length; i++) {
        shuffle(basicColors);
        colorsArray.fill(basicColors[0], i);
      }
      document.getElementById(countries[i]).style.fill = colorsArray[i];
    }
    document.getElementById(selectedCountry).style.fill = "blue";
    document.getElementById("subtitle").innerHTML = selectedCountry;
};
