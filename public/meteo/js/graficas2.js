

// Grafica Anual
function inicializarGrafica2(datos) {

    var temperaturaMedia = [];
    var precipitacion = [];

    // Extraer valores
    for(var i=0;i<12;i++) {
        temperaturaMedia.push(parseFloat(datos[i].tm_mes));
        precipitacion.push(parseFloat(datos[i].p_mes));
    }


    meteo.grafica = Highcharts.chart('grafica', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'DATOS'
        },
        subtitle: {
            text: 'Subtitulo'
        },
        xAxis: [{
            categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Temperatura',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Lluvia',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0.25)'
        },
        series: [{
            name: 'Lluvia',
            type: 'column',
            yAxis: 1,
            data: precipitacion,
            tooltip: {
                valueSuffix: ' mm'
            }
        
        }, {
            name: 'Temperatura',
            type: 'spline',
            data: temperaturaMedia,
            tooltip: {
                valueSuffix: '°C'
            }
        }]
    });
}




// Grafica Anual
function inicializarGrafica1(datos) {

    var temperaturaMedia = [];
    var precipitacion = [];
    var dias = [];
    var cantidad = Object.keys(datos).length;


    // Extraer valores
    for(var i=0;i<cantidad;i++) {
        temperaturaMedia.push(parseFloat(datos[i].tmed));
        precipitacion.push(parseFloat(datos[i].prec));
        dias.push(i+1); 
    }

    meteo.grafica = Highcharts.chart('grafica', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'DATOS'
        },
        subtitle: {
            text: 'gfrsujhgfdjfgjdfgj'
        },
        xAxis: [{
            categories: dias,
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Temperatura',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Lluvia',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0.25)'
        },
        series: [{
            name: 'Lluvia',
            type: 'column',
            yAxis: 1,
            data: precipitacion,
            tooltip: {
                valueSuffix: ' mm'
            }
        
        }, {
            name: 'Temperatura',
            type: 'spline',
            data: temperaturaMedia,
            tooltip: {
                valueSuffix: '°C'
            }
        }]
    });
}


