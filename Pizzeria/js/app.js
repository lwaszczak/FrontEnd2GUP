$(document).ready(function() {
	
	var $counter = $('.counter');
    $counter.html(0);

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
	
	
	//=====================================
	//var img = new Image();
	//var div = document.getElementById('imageDiv');
	//
	//img.onload = function() {
	//  	div.appendChild(img);
	//};
	//
	//img.src = './images/margarita.png';

	$('<img/>', { class: 'pizza' })
        .attr('src', './images/margarita.png')
        .appendTo('.pizza-container');
    
    var $pizza = $('.pizza');
    
    $pizza.on('mouseover', function(e) {
        $pizza.attr('height', 0.9 * $pizza.height());
        
    });
        
    $pizza.on('mouseleave', function(e) {
        $pizza.attr('height', 1.11 * $pizza.height()); 
    });
    
	var clicks = 0;
    $pizza.on('click', function(e) {
//        alert('Kliknięto na pizze!');
		
		clicks += pizza[0].points;
        document.getElementById("clicks").innerHTML = clicks;
    });
	
	var boosters = [
        { id: 1, name: 'Włoska czapka kucharska', points: 10, per: 1000, image: 'cookhat.png', value: 2 },
        { id: 2, name: 'Mąka pszenna', points: 15, per: 500, image: 'maka.jpg', value: 1 }
    ];

    $('<ul/>', { class: 'boosters' }).appendTo('.boostList');
    
    for(var b of boosters) {
        $('<li/>', { id: 'b_' + b.id } )
			.css('background-image', 'url(images/' + b.image + ')')
			.addClass('boostItem')
            .html(b.name)
            .appendTo('.boosters');
    }
    
    $('ul.boosters > li').on('click', function(e) {
        // 1. $(this) - reprezentuje aktualny moj booster na ktory kliknalem
        // 2. pobieram id z boostera i sprawdzam jaki ma faktyczny id (tj. b_{id})
        // 3. Wybieramy obiekt z tablicy boosterow po ID
        // 4. Sprawdzamy czy stac nas na booster
        //          | TAK
        //  odejmujemy koszt boostera od naszych punktow
        //  ustawiamy setInterval z prametrami boostera
        var elementId = $(this).attr('id');
        var id = parseInt(elementId.replace('b_', ''));
        var currentB;
        
        for(var b of boosters) {
            if(b.id == id) {
                currentB = b;
                break;
            }
        }
        alert(currentB.id);
        var userPoints = parseInt($counter.html());
        if(userPoints > currentB.points) {
            // mozemy go kupic
            userPoints -= currentB.points;
            $counter.html(userPoints);
            setInterval(function() {
                var points = parseInt($counter.html());
                points += currentB.value;
                $counter.html(points);
            }, currentB.per);
        }
    });
});