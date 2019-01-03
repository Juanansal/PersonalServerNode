
var app = angular.module('ControlDeGuild', ['ngRoute']);


app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'index.html',
            controller  : 'DatosGuild'
        })
        .when('/resumen', {
            templateUrl : 'detalles.html',
            controller  : 'DatosGuild'
        })
        .otherwise({
            redirectTo: '/'
        });
});



 // MIERDAS GLOBALES
 
 var keyBattleNet = '3ew5vae26b945jrgxeteupsnrhgzgsyy';
 
 var exodar = 
   { 
     nomGuild: 'Exødar',
	 servidor: 'exodar',
	 region: 'EU',
	 rangos: ['0','1','3','5']
   };
			  
 var singularity = 
   { 
     nomGuild: 'Singularity',
	 servidor: 'dun-modr',
	 region: 'EU',
	 rangos: ['0','2','5','6']
   };
				




 
 
 // VALORES DE ITLV PARA CALCULAR EL ERROR
 
 var limLv1 = 829;
 var limLv2 = 839;
	
	

	
