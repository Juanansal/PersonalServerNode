app.controller('DatosGuild', function($scope, $http) 
{
	

// VARIABLES GLOBALES
	
	// Inicializar datos de la tabla
	$scope.datos = new Array();
	$scope.datosTodos = null;
	var nomGuild = '';
	var servidor= '';
	
   // campos del formulario
   $scope.guildForm1 = 'Exødar';
   $scope.guildForm2 = '';
   $scope.serverForm2 = '';
   $scope.mostrarFiltros = false;
	
   $scope.numDatos = 0;
   $scope.porcentaje = 0;
   $scope.numDatosAnalizados = 0;
	/*
	MODO 1 Hermandades configuradas por defecto
	MODO 2 Hermandades escritas por el usuario
	
	*/
	
	$scope.cargarDatosGuild = function(modo, hermandad, server)
	{
		// Incializar Datos y seleccionar datos segun parametros
		
		$scope.datos = new Array();
		$scope.datosTodos = null;
		$scope.numDatos = 0;
		$scope.porcentaje = 0;
		$scope.numDatosAnalizados = 0;
		
		if(modo==1)
		{
			if(hermandad == exodar.nomGuild)
			  {
				  nomGuild = exodar.nomGuild;
				  servidor = exodar.servidor;
				  rangos = exodar.rangos;
			  }
			  
			if(hermandad == singularity.nomGuild)
			  {
				  nomGuild = singularity.nomGuild;
				  servidor = singularity.servidor;
				  rangos = singularity.rangos;
			  }
		}

		if(modo==2)
			{
				nomGuild = hermandad;
				servidor = server;
			}


	// https://eu.api.battle.net/wow/guild/exodar/Exødar?fields=members%2Citems&locale=es_ES&apikey=3ew5vae26b945jrgxeteupsnrhgzgsyy

        $http({
            method: 'GET', 
			url: 'https://eu.api.battle.net/wow/guild/'+servidor+'/'+nomGuild,
			params: {
						fields: 'members', 
						locale: 'es', 
						apikey: keyBattleNet
					}
        }).
        success(function(data) 
		{		 	  
			// Guardar aqui los datos GENERALES de la guild si fueran necesarios
			//
			
			var datos = data.members
			//console.log(datos);
			
			for(var i=0; i<datos.length; i++)
			  {
				 var aux = true;
				 // Comprobacion para filtrar los rangos que queremos obtener la informacion						 
				 if(modo == 1)
				 {	 
					 aux = false;
					 for(var j=0; j<rangos.length;j++)
					 {
						 if(rangos[j] == datos[i].rank)
						   {
							  aux = true;
						   }
					 }
				 }	 

				if(aux == true)
				{					  
					var meter = {};
				  
					meter.nombre = datos[i].character.name;
					meter.servidor = datos[i].character.realm;
					meter.rango = datos[i].rank;
					meter.imagen = 'http://eu.battle.net/static-render/eu/'+datos[i].character.thumbnail;
					
					if(datos[i].character.spec)
					{
						meter.role = datos[i].character.spec.role;
					}	
					else
					{
						meter.role = 'NONE';
					}	
					meter.fallos = 0;
				  
					$scope.datos.push(meter);
				}
			  }
			
			
			$scope.numDatos = $scope.datos.length;
			
			// Analisis del equipo por personaje encontrado
			$scope.mostrarFiltros = true;
			
			for(var i=0; i<$scope.datos.length; i++)
			  {
				  $scope.analizarEquipo($scope.datos[i]);
			  }				
	
        }).
        error(function() {
            console.log('Error al intentar realizar la peticion al servidor');
        });
    };

	
	$scope.analizarEquipo = function(datos)
	  {	  
		  
		  // https://eu.api.battle.net/wow/character/exodar/juanansal?fields=items&locale=es_ES&apikey=3ew5vae26b945jrgxeteupsnrhgzgsyy
		  
			$http({
				method: 'GET', 
				url: 'https://eu.api.battle.net/wow/character/'+datos.servidor+'/'+datos.nombre,
				params: {
							fields: 'items', 
							locale: 'es', 
							apikey: keyBattleNet
						}
			}).
			success(function(data) 
			{		 	  
			
			
	
				// En equipo estan los datos de todo el equipo del pj
				equipo = data.items;			
				datos.itlv = equipo.averageItemLevelEquipped;	
				
				// CABEZA				
				if(equipo.head)
				  {	
					datos.cabeza =  
						{	
							id: equipo.head.id,
							nombre: equipo.head.name,
							itlv: equipo.head.itemLevel,
							calidad: 'q'+equipo.head.quality,
							error: 'e0'				
						}
						
						// errores
							if(datos.cabeza.itlv<limLv1)
							  {
								  datos.cabeza.error = 'e1';
								  datos.fallos = datos.fallos + 1;
							  }
							else if(datos.cabeza.itlv<limLv2)
							  {
								  datos.cabeza.error = 'e2';
							  }							 				
				  }
				
				// CUELLO			
				if(equipo.neck)
				  {	
					datos.cuello =  
						{
							id: equipo.neck.id,
							nombre: equipo.neck.name,
							itlv: equipo.neck.itemLevel,
							calidad: 'q'+equipo.neck.quality							
						}
						
					// errores
							if(datos.cuello.itlv<limLv1)
							  {
								  datos.cuello.error = 'e1';
							  }
							else if(datos.cuello.itlv<limLv2)
							  {
								  datos.cuello.error = 'e2';
							  }
				  }
						
				// HOMBROS			
				if(equipo.shoulder)
				  {					
					datos.hombro = 
						{
							id: equipo.shoulder.id,
							nombre: equipo.shoulder.name,
							itlv: equipo.shoulder.itemLevel,
							calidad: 'q'+equipo.shoulder.quality
						}
						
						// errores
							if(datos.hombro.itlv<limLv1)
							  {
								  datos.hombro.error = 'e1';
							  }
							else if(datos.hombro.itlv<limLv2)
							  {
								  datos.hombro.error = 'e2';
							  }
				  }
								
				// CAPA				
				if(equipo.back)
				  {					
					datos.capa =    
						{
							id: equipo.back.id,
							nombre: equipo.back.name,
							itlv: equipo.back.itemLevel,
							calidad: 'q'+equipo.back.quality
						}
						
					// errores
						if(datos.capa.itlv<limLv1)
						  {
							 datos.capa.error = 'e1';
						  }
						else if(datos.capa.itlv<limLv2)
						  {
							 datos.capa.error = 'e2';
						  }
				  }
				
				// PECHO				
				if(equipo.chest)
				  {	
					datos.pecho =   
						{
							id: equipo.chest.id,
							nombre: equipo.chest.name,
							itlv: equipo.chest.itemLevel,
							calidad: 'q'+equipo.chest.quality
						}
						
					// errores
						if(datos.pecho.itlv<limLv1)
						  {
							 datos.pecho.error = 'e1';
						  }
						else if(datos.pecho.itlv<limLv2)
						  {
							 datos.pecho.error = 'e2';
						  }	
				  }
								
				// MUÑECA				
				if(equipo.wrist)
				  {					
					datos.muneca =  
						{
							id: equipo.wrist.id,
							nombre: equipo.wrist.name,
							itlv: equipo.wrist.itemLevel,
							calidad: 'q'+equipo.wrist.quality
						}
						
					// errores
						if(datos.muneca.itlv<limLv1)
						  {
							 datos.muneca.error = 'e1';
						  }
						else if(datos.muneca.itlv<limLv2)
						  {
							 datos.muneca.error = 'e2';
						  }							
				  }
				  
				// MANOS				
				if(equipo.hands)
				  {								
					datos.manos =  
						{
							id: equipo.hands.id,
							nombre: equipo.hands.name,
							itlv: equipo.hands.itemLevel,
							calidad: 'q'+equipo.hands.quality
						}
						
					// errores
						if(datos.manos.itlv<limLv1)
						  {
							 datos.manos.error = 'e1';
						  }
						else if(datos.manos.itlv<limLv2)
						  {
							 datos.manos.error = 'e2';
						  }		
				  }
						
				// CINTURA				
				if(equipo.waist)
				  {				
					datos.cintura = 
						{
							id: equipo.waist.id,
							nombre: equipo.waist.name,
							itlv: equipo.waist.itemLevel,
							calidad: 'q'+equipo.waist.quality
						}
						
					// errores
						if(datos.cintura.itlv<limLv1)
						  {
							 datos.cintura.error = 'e1';
						  }
						else if(datos.cintura.itlv<limLv2)
						  {
							 datos.cintura.error = 'e2';
						  }						
				  }
					
				// PIERNAS				
				if(equipo.legs)
				  {
					datos.piernas = 
						{
							id: equipo.legs.id,
							nombre: equipo.legs.name,
							itlv: equipo.legs.itemLevel,
							calidad: 'q'+equipo.legs.quality
						}
						
					// errores
						if(datos.piernas.itlv<limLv1)
						  {
							 datos.piernas.error = 'e1';
						  }
						else if(datos.piernas.itlv<limLv2)
						  {
							 datos.piernas.error = 'e2';
						  }		
					}
				
				// PIES				
				if(equipo.feet)
				  {
					datos.pies =   
						{
							id: equipo.feet.id,
							nombre: equipo.feet.name,
							itlv: equipo.feet.itemLevel,
							calidad: 'q'+equipo.feet.quality
						}
					// errores
						if(datos.pies.itlv<limLv1)
						  {
							 datos.pies.error = 'e1';
						  }
						else if(datos.pies.itlv<limLv2)
						  {
							 datos.pies.error = 'e2';
						  }				
				  }
				
				// ANILLO 1				
				if(equipo.finger1)
				  {	
					datos.anillo1 =
						{
							id: equipo.finger1.id,
							nombre: equipo.finger1.name,
							itlv: equipo.finger1.itemLevel,
							calidad: 'q'+equipo.finger1.quality
						}
						
					// errores
						if(datos.anillo1.itlv<limLv1)
						  {
							 datos.anillo1.error = 'e1';
						  }
						else if(datos.anillo1.itlv<limLv2)
						  {
							 datos.anillo1.error = 'e2';
						  }		
				  }
				
				// ANILLO 2				
				if(equipo.finger2)
				  {	
					datos.anillo2 = 
						{
							id: equipo.finger2.id,
							nombre: equipo.finger2.name,
							itlv: equipo.finger2.itemLevel,
							calidad: 'q'+equipo.finger2.quality
						}
						
					// errores
						if(datos.anillo2.itlv<limLv1)
						  {
							 datos.anillo2.error = 'e1';
						  }
						else if(datos.anillo2.itlv<limLv2)
						  {
							 datos.anillo2.error = 'e2';
						  }		
				  }
						
				// TRINKET 1			
				if(equipo.trinket1)
				  {			
					datos.trinket1= 
						{
							id: equipo.trinket1.id,
							nombre: equipo.trinket1.name,
							itlv: equipo.trinket1.itemLevel,
							calidad: 'q'+equipo.trinket1.quality
						}
						
					// errores
						if(datos.trinket1.itlv<limLv1)
						  {
							 datos.trinket1.error = 'e1';
						  }
						else if(datos.trinket1.itlv<limLv2)
						  {
							 datos.trinket1.error = 'e2';
						  }		
				  }
				
				// TRINKET 2		
				if(equipo.trinket2)
				  {					
					datos.trinket2= 
						{
							id: equipo.trinket2.id,
							nombre: equipo.trinket2.name,
							itlv: equipo.trinket2.itemLevel,
							calidad: 'q'+equipo.trinket2.quality
						}
						
					// errores
						if(datos.trinket2.itlv<limLv1)
						  {
							 datos.trinket2.error = 'e1';
						  }
						else if(datos.trinket2.itlv<limLv2)
						  {
							 datos.trinket2.error = 'e2';
						  }		
				  }
				
				// ARMA		
				if(equipo.mainHand)
				  {	
					datos.arma1 =   
						{
							id: equipo.mainHand.id,
							nombre: equipo.mainHand.name,
							itlv: equipo.mainHand.itemLevel,
							calidad: 'q'+equipo.mainHand.quality
						}
						
					// errores
						if(datos.arma1.itlv<limLv1)
						  {
							 datos.arma1.error = 'e1';
						  }
						else if(datos.arma1.itlv<limLv2)
						  {
							 datos.arma1.error = 'e2';
						  }

					// artefacto
					
					if(equipo.mainHand.artifactTraits)
					  {
						var lvArtefacto = 0;					
						var artefacto = equipo.mainHand.artifactTraits
						
						for(var i=0; i<artefacto.length; i++)
						  {
							  var aux = parseInt(artefacto[i].rank);
							  lvArtefacto = lvArtefacto + aux;
						  }				
						  lvArtefacto = lvArtefacto - 1;
						  
						  if(lvArtefacto<0) 
							  lvArtefacto = 0;
						  
						  datos.lvArtefacto = lvArtefacto;
						  console.log(datos.lvArtefacto);
					  }
					
					
						  
				  }
				  
				 // OFF HAND				
				if(equipo.offHand)
				  {	 
					datos.arma2 =  
						{
							id: equipo.offHand.id,
							nombre: equipo.offHand.name,
							itlv: equipo.offHand.itemLevel,
							calidad: 'q'+equipo.offHand.quality
						}
						
					// errores
						if(datos.arma2.itlv<limLv1)
						  {
							 datos.arma2.error = 'e1';
						  }
						else if(datos.arma2.itlv<limLv2)
						  {
							 datos.arma2.error = 'e2';
						  }		
				  }
				  
				  // artefacto
				  
				  if(equipo.offHand && !datos.lvArtefacto)
				  {
					var lvArtefacto = 0;					
					var artefacto = equipo.offHand.artifactTraits
					
					for(var i=0; i<artefacto.length; i++)
					  {
						  var aux = parseInt(artefacto[i].rank);
						  lvArtefacto = lvArtefacto + aux;
					  }				
					  lvArtefacto = lvArtefacto - 1;
					  
					  if(lvArtefacto<0) 
						  lvArtefacto = 0;
					  
					  datos.lvArtefacto = lvArtefacto;
					  console.log(datos.lvArtefacto);
				  }
				  
				// Personaje analizado
				
				//console.log($scope.numDatosAnalizados+' / '+$scope.numDatos)
				$scope.numDatosAnalizados = $scope.numDatosAnalizados + 1;
				$scope.porcentaje = ($scope.numDatosAnalizados / $scope.numDatos)*100;
				
				
			}).
			error(function() {
				console.log('Error al intentar realizar la peticion al servidor');
			});		  
		  
	  };
	
	
	$scope.cargarTodo = function()
	{		
		// $scope.cargarDatosGuild(1,'Exødar','exodar');
		// $scope.cargarDatosGuild(1,'Singularity','dun-modr');
		
	};
	
	$scope.ordenar = function()
	{
		$scope.datos.sort(function(a,b) {return (a.itlv > b.itlv) ? 1 : ((b.itlv > a.itlv) ? -1 : 0);} ); 
	};
	
	
	
	$scope.filtrar = function(spec)
	{
		console.log($scope.datosTodos);
		
		if($scope.datosTodos != null)
		  {
			  $scope.datos = $scope.datosTodos.slice();
		  }
		
		$scope.datosTodos = $scope.datos.slice();
		
		for(var i=0; i<$scope.datos.length; i++)
		{
			
			if($scope.datos[i].role != spec)
			{
				$scope.datos.splice(i,1);
				i = i-1;
			}		
		}
	};
	
	
	
	$scope.mostrarTodo = function()
	{
		if($scope.datosTodos != null)
		  {
			  $scope.datos = $scope.datosTodos.slice();
		  }
	}

	
});