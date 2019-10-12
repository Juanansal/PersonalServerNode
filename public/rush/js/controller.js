var app = angular.module('RushHelper', []);
var fechaa;
var host = 'https://juanansal.herokuapp.com'

app.controller('Orooo', function($scope, $http) {
    $scope._id = null;
	$scope.pj = '';
	$scope.rush = '';
    $scope.precio = '';
	$scope.fecha = new Date();
    $scope.listado = [];
	$scope.resultado = "";
	

    $scope.cargarRushes = function(){
        $http({
            method: 'GET', url: host+'/rush/listar'
        }).
        success(function(data) {
            if(typeof(data) == 'object'){
                $scope.listado = data;
				$scope.listado.sort()
            }else{
                console.log('Error al intentar recuperar los rushes.');
            }
        }).
        error(function() {
            console.log('Error al intentar realizar la peticion al servidor');
        });
    };
	
    $scope.guardarRush = function() {			
				
		if($scope.pj !='' && $scope.rush != '' && $scope.precio != '' && $scope.fecha!=null)
		{		
			$http({
				method: 'POST',
				url: host+'/rush/guardar',
				params: {
					pj: $scope.pj,
					rush: $scope.rush,
					precio: $scope.precio,				
					fecha: $scope.fecha,
					_id: $scope._id
				}
			}).
			success(function(data) {
				if(data == '0'){
					$scope.limpiarDatos();
					$scope.cargarRushes();
					$scope.resultado = "Rush guardado con exito";
				}else{
					console.log('Error numero '+data+' al intentar guardar el rush');
					$scope.resultado = "ERROR";
				}
			}).
			error(function() {
				console.log('Error al intentar realizar la peticion al servidor');
				$scope.resultado = "ERROR";
			});		
	    }
		else
		{
			$scope.resultado = "Rellena todos los campos";
		}
    };
	
	
    $scope.recuperarRush = function(indice) {
        $http({
            method: 'GET',
            url: host+'/rush/recuperar_rush_por_id',
            params: {
                _id: indice
            }
        }).
        success(function(data) {
            if(typeof(data) == 'object'){
                $scope._id = data._id;
				$scope.pj = data.pj;
				$scope.rush = data.rush;				
                $scope.precio = data.precio;
				
				fechaa = new Date (data.fecha);
				$scope.fecha = fechaa;
            }else{
                console.log('Error numero '+data+' al intentar recuperar el rush');
				$scope.resultado = "ERROR";
            }            
        }).
        error(function() {
            console.log('Error al intentar realizar la peticion al servidor');
			$scope.resultado = "ERROR";
        });
    };
	
    $scope.eliminarRush = function(indice) {
        $http({
            method: 'POST',
            url: host+'/rush/eliminar',
            params: {
                _id: indice
            }
        }).
        success(function(data) {
            if(data == '0'){
                $scope.limpiarDatos();
                $scope.cargarRushes();
            }else{
                console.log('Error numero '+data+' al intentar eliminar el rush');
				$scope.resultado = "ERROR";
            }            
        }).
        error(function() {
            console.log('Error al intentar realizar la peticion al servidor');
			$scope.resultado = "ERROR";
        });
    };
	
	
    $scope.limpiarDatos = function() {
            $scope._id = null;
			$scope.pj = '';
			$scope.rush = '';
			$scope.precio = '';
			$scope.fecha = new Date();
    };
	
});