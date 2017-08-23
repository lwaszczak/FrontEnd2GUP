
var app = angular.module('webapp', ['ngRoute']);
var baseAJAXUrl = 'http://localhost:3000/';

app.controller('mainController', function ($scope, $http) {
   // kod ktory sie wykona od razu po uruchomeniu kontrolera:


   $http({
       url: baseAJAXUrl + 'subject',
       method: 'GET'
   }).then(function (success) {
       $scope.subjects = success.data;
   }, function (error) {
       console.error(error);
   });

   // kod, ktory sie wykona po wywolaniu funkcji edit
   $scope.actualEditId = null;

   $scope.edit = function (subject) {
       //  alert(subject.id);  
       if ($scope.actualEditId != subject.id) { // ta zmienna przetrzymuje id aktualnie edytowawnego elementu. jesli actualeditid jest rowne nullowi, to przypisuje mu to id.
           $scope.actualEditId = subject.id;


       } else {
           // alert("Ten element już jest edytowany!");  // przy drugim naciśnięciu wyskakuje taki komunikat
           $http({
               url: baseAJAXUrl + 'subject/' + subject.id,
               method: 'PUT', // metoda która nadpisuje
               data: subject

           }).then(function (success) {
               console.log(success.data);
               $scope.actualEditId = null;

           }, function (error) {
               console.error(success.error);

           });
       }

   }
   $scope.tryEdit = function (keyCode, subject) {
       if (keyCode === 13) {
           $scope.edit(subject);
       } 
       // if(toJestEnter) {
       //   $scope.edit(subject);
   }

});


