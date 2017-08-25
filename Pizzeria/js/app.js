$('#zalogujButton').on('click', function(event) {
 	alert('Zalogowano');
});

$('#zaloguj').on('click', function(event) {
  	$(this).hide();
});

var pizza = [
    { id: 1, name: 'Margarita', points: 1, image: 'margarita.png', costs: 0 }
];

//id - identyfikator pizzy
//name - nazwa pizzy
//points - ilość punktów przyznawanych za kliknięcie
//image - obrazek reprezentujący wygląd naszej pizzy
//costs - koszt pizzy

var img = new Image();
var div = document.getElementById('imageDiv');

img.onload = function() {
  	div.appendChild(img);
};

img.src = './images/margarita.png';