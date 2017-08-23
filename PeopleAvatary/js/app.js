var app = angular.module('webapp', ['ngRoute']);

app.controller('mainController', function($scope, $http) {
	var baseAJAXUrl = 'http://localhost:3000/db';
	

		$scope.makeUser = function(id, name, lastname) {
			return { id: id, name: name, lastname: lastname }
		}
	
		
		/*
1. Pobierzmy wszystkie zasoby z bazy danych - /db
    - zasoby, ktore zostaną zwrócone, przypiszmy do $scope.resources
2. Przy generowaniu losowego użytkownika  (w forze wypełniającym $scope.users) wylosujmy dane (imię i nazwisko).
    - najpierw ustalmy płeć użytkownika, którego chcemy wypełnić
        > losujemy liczbe <0, 1>
        > następnie przypisujemy do zmiennej var sex; wartość 'male' w przypadku 0, 'female' w przypadku 1
        > gdy chciałbym wylosować imiona i nazwiska żeńskie:
            - sex + '_name', sex + '_lastname'

*/
		$http({
            url: baseAJAXUrl,
            method: 'GET'
        }).then(function(success) {
            $scope.resources = success.data;
            $scope.loadData('');
            console.log($scope.resources);
        }, function(error) {
            console.error(error);
        });

    
        $scope.loadData = function(sex) {
            if(['male', 'female'].indexOf(sex.toLowerCase()) == -1) {
                var r = Math.round(Math.random()); // <0, 1>
                sex = (r === 0) ? 'male' : 'female';
                
                // pobierz losowe imie
                $scope.users = [];
                
                $scope.getRandomValueFromArray = function(obj) {
                  // 1. Losuje liczbe od 0 do dlugosci tablicy
                  var r = Math.floor(Math.random() * obj.length);
                  // 2. Zwracam obiekt z tablicy znajdujacy sie pod wylosowanym indeksem.
                  return obj[r];
                }
                
                // pobierz losowe imie
                var countNames = $scope.resources[sex + '_name'].length;
                for(var i = 0; i < 10; i++) {
                    var name = $scope.getRandomValueFromArray($scope.resources[sex + '_name']);
                    var lastname = $scope.getRandomValueFromArray($scope.resources[sex + '_lastname']);
					$scope.users.push($scope.makeUser( i + 1, name, lastname));
                }
            }
        }
		
});