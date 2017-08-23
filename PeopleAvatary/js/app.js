var app = angular.module('webapp', []);

app.controller('mainController', function($scope) {
		$scope.makeUser = function(id, name, lastname) {
			return { id: id, name: name, lastname: lastname }
		}
	
		
		//1. Pobierzmy wszystkie zasoby z bazy danych -/db
		//  - zasoby, które zostaną zwrócone, przypiszmy do $scope.resources
		//2. Przy generowaniu losowego użytkownika ( w forze wypełniającym $scope.users) wylosujmy 
		

		$scope.users = [];
		for (var i = 0; i < 10; i++) {
			$scope.users.push($scope.makeUser(i+1, "Tester", "Testowy") );
		}
});

//===========================================================

//var sex = Math.round(Math.random()); //<0,1>
//
//var resources= {
//    "male_name": [
//            "Piotr",
//            "Paweł",
//            "Gaweł"
//        ],
//    "male_lastname": [
//            "Testowy",
//            "Kowalski",
//            "Nowak",
//            "Środa"
//    ],
//    
//    "female_name": [
//            "Ania",
//            "Asia",
//            "Alicja"
//    ],
//        
//    "female_lastname": [
//            "Testowa",
//            "Przykładowa",
//            "Działająca",
//            "Algorytmiczna"
//    ]
//};
//
//var sex = (r === 0) ? 'male' : 'female';
//
////pobierz losowe imię
//
//var countNames = resources[sex + '_name'].length;
//
//for(var i = 0; i < 10; i++) {
//  var name = resources[sex + '_name'][Math.ceil(Math.random() * countNames) - 1];
//  console.log(name);
//}