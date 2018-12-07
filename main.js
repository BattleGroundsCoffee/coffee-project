"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee-box col-6">';
    // html += '<span class="id">' + coffee.id + '</span>';
    html += '<span class="name">' + coffee.name + '</span>';
    html += '<span class="roast">' + coffee.roast + '</span>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    document.getElementById('coffee-search').value="";
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var searchString = document.getElementById('coffee-search').value;
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        results.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
var coffees=coffees.reverse();

var results = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

results.innerHTML = renderCoffees(coffees);

var searchBox = document.getElementById('coffee-search');
    searchBox.addEventListener('keyup', refineList);


function refineList(){
    var searchString = document.getElementById('coffee-search').value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
           console.log(searchString);

        if (coffee.name.toLowerCase().includes(searchString.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    results.innerHTML = renderCoffees(filteredCoffees);
}
submitButton.addEventListener('click', updateCoffees);
var submit2 = document.getElementById('submit2');
submit2.addEventListener('click', createCustom);
var clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', clear2);


function createCustom(e){
    e.preventDefault(); // don't submit the form, we just want to update the data
    var newName = document.getElementById('custom-name').value;
    var newRoast = document.getElementById('roast-selection2').value;
    var newId = coffees.length+1;
    var customCoffee = {};
    customCoffee.id= newId;
    customCoffee.name = newName;
    customCoffee.roast= newRoast;
    console.log(customCoffee);
    coffees.push(customCoffee);
    results.innerHTML = renderCoffees(coffees);
}
document.getElementById('altTextButton').addEventListener('click', altText);
document.getElementById('plainTextButton').addEventListener('click', plainText);

function altText(){
    document.getElementById('rfLabel').innerText = "Choose Your Alignment";
    document.getElementById('nfLabel').innerText = "Find Your Champion";
    document.getElementById('customLabel').innerText = "Create a Warrior";

    // CHANGING ALT TEXT FOR SELECTOR 2
    var selector = document.querySelector("#roast-selection2");
    console.log(selector);
    selector.options[0].innerText="Good";
    selector.options[1].innerText="Neutral";
    selector.options[2].innerText="Evil";

    //CHANGING ALT TEXT FOR SELECTOR 1
    var selector1 = document.querySelector("#roast-selection");
    selector1.options[0].innerText="Good";
    selector1.options[1].innerText="Neutral";
    selector1.options[2].innerText="Evil";
}
function plainText(){
    document.getElementById('rfLabel').innerText = "Filter by Roast";
    document.getElementById('nfLabel').innerText = "Filter by Name";
    document.getElementById('customLabel').innerText = "Add a Coffee";
    // CHANGING ALT TEXT FOR SELECTOR 2
    var selector = document.querySelector("#roast-selection2");
    console.log(selector);
    selector.options[0].innerText="Light";
    selector.options[1].innerText="Medium";
    selector.options[2].innerText="Dark";

    //CHANGING ALT TEXT FOR SELECTOR 1
    var selector1 = document.querySelector("#roast-selection");
    selector1.options[0].innerText="Light";
    selector1.options[1].innerText="Medium";
    selector1.options[2].innerText="Dark";
}
function clear2(){
    results.innerHTML = renderCoffees(coffees);
}