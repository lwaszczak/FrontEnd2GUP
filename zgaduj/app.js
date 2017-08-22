// 1. Losujemy liczbę z zakresu <0, 100>
// 2. Dodajemy event listener na naciśniećei przycisku
//      a. pobieramy wartosc z inputa
//        b. sprawdzamy, czy wartosc jest taka sama jak wylosowana liczba
//                | TAK               \ NIE
//              ALERT O WYGRANEJ       \    
//                                      zgadujemy dalej
//
//      dodaj podpowiedzi, czy wpisana liczba jest za duża czy za mała



var wpisana_liczba = document.getElementById('wpisana_liczba');
var liczba = 0;

$("#section_two").hide();

var btn_dalej = document.getElementById('dalej');
var btn = document.getElementById('guess');

btn_dalej.addEventListener('click', function() {
   
    $("#section_two").show();
    $("#section_one").hide();
    
    var res = document.getElementById('result');
    res.innerHTML = "Podaj liczbę z zakresu: < " + start.value + ", " + end.value + " >";
    
    function rand( min, max ){
        min = parseInt( start.value, 10 );
        max = parseInt( end.value, 10 );

        if ( min > max ){
            var tmp = min;
            min = max;
            max = tmp;
        }

        return liczba = Math.floor( Math.random() * ( max - min + 1 ) + min );
    }
    rand();
    //liczba = Math.floor(Math.random() * 100);
    
    
    console.log(start.value);
    console.log(end.value);
    
    console.log(liczba);
    
});



btn.addEventListener('click', function() {
    
    if (parseFloat(wpisana_liczba.value) < start.value ) {
        alert("Za mała liczba");
        wpisana_liczba.value = null;      
    }
    
    else if (parseFloat(wpisana_liczba.value) > end.value){
        alert("Za duża liczba");
        wpisana_liczba.value = null;
    }
    
    else if (parseFloat(wpisana_liczba.value) === liczba) {
        
        alert("Wygrałeś!");
        wpisana_liczba.value = null;
        return;  
    }
    
    else {
        alert("Spróbuj jeszcze raz.");
        wpisana_liczba.value = null;     
    }
    
    
});