// Info para la ventana de propiedades


// Propiedades al seleccionar Edicion (aun no hay nada seleccionado)

/*
    <div id="datos_propiedades">
                
              <h4 id="titulo-derecha"> Edicion: Pulsa en las figuras para seleccionar </h4>               
     </div>  
*/

data.propiedades.edicion = '<div id="datos_propiedades"><h4 id="titulo-derecha"> Edicion: Pulsa en las figuras para seleccionar </h4>   </div>';








// Propiedades para la edicion del circulo, Estado 1
    
    /*
    <div id="datos_propiedades">

             <h4 id="titulo-derecha"> Modificar Círculo </h4>
             
             
             <!-------------------- TAMAÑO BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Tamaño Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam" data-slider-id="tamBordeCirculoEdicionSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">3</span>
                    </div>
            </div>
             
             
             <!-------------------- COLOR FONDO ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Fondo </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorfondo" class="jscolor {valueElement:&#39;value-color-fondo&#39;, onFineChange:&#39;editor.cambiarColorFondoElipse(this)&#39;,  value:&#39;22DD44&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#</span><input type="text" id="value-color-fondo" class="infoColor"></input>    
                    </div>     
              </div>
              
              
              <!-------------------- TRANSPARENCIA FONDO ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Fondo </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam2" data-slider-id="transFondoCirculoEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">3</span>
                    </div>
            </div>
             
             
             
             <!-------------------- COLOR BORDE ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Borde </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;2255EE&#39;, width:243, onFineChange:&#39;editor.cambiarColorBordeElipse(this)&#39;, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#</span><input type="text" id="value-color-borde" class="infoColor"></input>    
                    </div>     
              </div>
              
              
              <!-------------------- TRANSPARENCIA BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam3" data-slider-id="transBordeCirculoEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam3" class="infoSlider">3</span>
                    </div>
            </div>      
   
    </div>             
    */    
data.propiedades.edicionCirculo = '<div id="datos_propiedades"><h4 id="titulo-derecha">Modificar Círculo</h4><!-------------------- TAMAÑO BORDE ------------------------><div class="opcion_derecha"><h4>Tamaño Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam" data-slider-id="tamBordeCirculoEdicionSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">3</span></div></div><!-------------------- COLOR FONDO ------------------------><div class="opcion_derecha"><h4>Color Fondo</h4><div class="opcion_derecha_form"><button id="colorfondo" class="jscolor {valueElement:&#39;value-color-fondo&#39;, onFineChange:&#39;editor.cambiarColorFondoElipse(this)&#39;, value:&#39;22DD44&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#</span><input type="text" id="value-color-fondo" class="infoColor"></div></div><!-------------------- TRANSPARENCIA FONDO ------------------------><div class="opcion_derecha"><h4>Transparencia Fondo</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam2" data-slider-id="transFondoCirculoEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">3</span></div></div><!-------------------- COLOR BORDE ------------------------><div class="opcion_derecha"><h4>Color Borde</h4><div class="opcion_derecha_form"><button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;2255EE&#39;, width:243, onFineChange:&#39;editor.cambiarColorBordeElipse(this)&#39;, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#</span><input type="text" id="value-color-borde" class="infoColor"></div></div><!-------------------- TRANSPARENCIA BORDE ------------------------><div class="opcion_derecha"><h4>Transparencia Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam3" data-slider-id="transBordeCirculoEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam3" class="infoSlider">3</span></div></div></div>';











// Propiedades para la edicion del rectangulo, Estado 1
    
    /*
    <div id="datos_propiedades">

             <h4 id="titulo-derecha"> Modificar Rectangulo </h4>
             
             
             <!-------------------- TAMAÑO BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Tamaño Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam" data-slider-id="tamBordeRectanguloEdicionSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">3</span>
                    </div>
            </div>
            
            
            <!-------------------- COLOR FONDO ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Fondo </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorfondo" class="jscolor {valueElement:&#39;value-color-fondo&#39;, value:&#39;22DD44&#39;, onFineChange:&#39;editor.cambiarColorFondoRectangulo(this)&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#</span><input type="text" id="value-color-fondo" class="infoColor"></input>    
                    </div>     
              </div>
            
            <!-------------------- TRANSPARENCIA FONDO ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Fondo </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam2" data-slider-id="transFondoRectanguloEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">3</span>
                    </div>
            </div>
            
            
            <!-------------------- COLOR BORDE ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Borde </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, onFineChange:&#39;editor.cambiarColorBordeRectangulo(this)&#39;, value:&#39;2255EE&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#</span><input type="text" id="value-color-borde" class="infoColor"></input>    
                    </div>     
              </div>
            
            <!-------------------- TRANSPARENCIA BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam3" data-slider-id="transBordeRectanguloEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam3" class="infoSlider">3</span>
                    </div>
            </div>
            
    </div>
            
             
                                       
    */    
data.propiedades.edicionRectangulo = '<div id="datos_propiedades"><h4 id="titulo-derecha">Modificar Rectangulo</h4><!-------------------- TAMAÑO BORDE ------------------------><div class="opcion_derecha"><h4>Tamaño Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam" data-slider-id="tamBordeRectanguloEdicionSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">3</span></div></div><!-------------------- COLOR FONDO ------------------------><div class="opcion_derecha"><h4>Color Fondo</h4><div class="opcion_derecha_form"><button id="colorfondo" class="jscolor {valueElement:&#39;value-color-fondo&#39;, value:&#39;22DD44&#39;, onFineChange:&#39;editor.cambiarColorFondoRectangulo(this)&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#</span><input type="text" id="value-color-fondo" class="infoColor"></div></div><!-------------------- TRANSPARENCIA FONDO ------------------------><div class="opcion_derecha"><h4>Transparencia Fondo</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam2" data-slider-id="transFondoRectanguloEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">3</span></div></div><!-------------------- COLOR BORDE ------------------------><div class="opcion_derecha"><h4>Color Borde</h4><div class="opcion_derecha_form"><button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, onFineChange:&#39;editor.cambiarColorBordeRectangulo(this)&#39;, value:&#39;2255EE&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#</span><input type="text" id="value-color-borde" class="infoColor"></div></div><!-------------------- TRANSPARENCIA BORDE ------------------------><div class="opcion_derecha"><h4>Transparencia Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam3" data-slider-id="transBordeRectanguloEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam3" class="infoSlider">3</span></div></div></div>';










// Propiedades para la edicion de la recta, Estado 1
    
    /*
    <div id="datos_propiedades">

             <h4 id="titulo-derecha"> Crear Recta </h4>
             <!-------------------- GROSOR RECTA ------------------------>
             <div class="opcion_derecha">
                    <h4> Tamaño Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="grosor" data-slider-id="tamBordeLineaEdicionSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">3</span>
                    </div>
            </div>
             
             
             <!-------------------- COLOR RECTA ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Borde </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;371BFF&#39;, onFineChange:&#39;editor.cambiarColorLinea(this)&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></input></span>
                    </div>     
              </div>
              
              
              <!-------------------- TRANSPARENCIA RECTA ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam2" data-slider-id="transRectaEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">3</span>
                    </div>
            </div>
              
    </div>              
    */    
data.propiedades.edicionLinea = '<div id="datos_propiedades"><h4 id="titulo-derecha">Crear Recta</h4><!-------------------- GROSOR RECTA ------------------------><div class="opcion_derecha"><h4>Tamaño Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="grosor" data-slider-id="tamBordeLineaEdicionSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">3</span></div></div><!-------------------- COLOR RECTA ------------------------><div class="opcion_derecha"><h4>Color Borde</h4><div class="opcion_derecha_form"><button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;371BFF&#39;, onFineChange:&#39;editor.cambiarColorLinea(this)&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA RECTA ------------------------><div class="opcion_derecha"><h4>Transparencia Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam2" data-slider-id="transRectaEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">3</span></div></div></div>';






// Propiedades para la edicion de la forma personalizada 1, Estado 1
    
    /*
    <div id="datos_propiedades">

             <h4 id="titulo-derecha"> Modificar Forma 1 </h4>
             
             <!-------------------- TAMAÑO LINEA ------------------------>
             <div class="opcion_derecha">
                    <h4> Tamaño Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam" data-slider-id="tamBordeForma1EdicionSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">3</span>
                    </div>
            </div>

            <!-------------------- COLOR BORDE ------------------------>
              <div class="opcion_derecha">
                    <h4> Color </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, onFineChange:&#39;editor.cambiarColorForma1(this)&#39;, value:&#39;2255EE&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#</span><input type="text" id="value-color-borde" class="infoColor"></input>    
                    </div>     
              </div>
            
            <!-------------------- TRANSPARENCIA BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam2" data-slider-id="transBordeForma1EdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">3</span>
                    </div>
            </div>
            
            <!-------------------- PUNTAS ------------------------>
             <div class="opcion_derecha">
                    <h4> Iteraciones </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam3" data-slider-id="puntasForma1EdicionSlider" type="text" data-slider-min="2" data-slider-max="10" data-slider-step="1" data-slider-value="4" data-slider-handle="triangle">
                          <span id="infotam3" class="infoSlider">3</span>
                    </div>
            </div>
            
    </div>              
    */    
data.propiedades.edicionForma1 = '<div id="datos_propiedades"><h4 id="titulo-derecha">Modificar Forma 1</h4><!-------------------- TAMAÑO LINEA ------------------------><div class="opcion_derecha"><h4>Tamaño Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam" data-slider-id="tamBordeForma1EdicionSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">3</span></div></div><!-------------------- COLOR BORDE ------------------------><div class="opcion_derecha"><h4>Color</h4><div class="opcion_derecha_form"><button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, onFineChange:&#39;editor.cambiarColorForma1(this)&#39;, value:&#39;2255EE&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#</span><input type="text" id="value-color-borde" class="infoColor"></div></div><!-------------------- TRANSPARENCIA BORDE ------------------------><div class="opcion_derecha"><h4>Transparencia</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam2" data-slider-id="transBordeForma1EdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">3</span></div></div><!-------------------- PUNTAS ------------------------><div class="opcion_derecha"><h4>Iteraciones</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam3" data-slider-id="puntasForma1EdicionSlider" type="text" data-slider-min="2" data-slider-max="10" data-slider-step="1" data-slider-value="4" data-slider-handle="triangle"> <span id="infotam3" class="infoSlider">3</span></div></div></div>'








// Propiedades para la edicion de la forma personalizada 2, Estado 1
    
    /*
    <div id="datos_propiedades">

             <h4 id="titulo-derecha"> Modificar Forma 2 </h4>
             
             <!-------------------- TAMAÑO LINEA ------------------------>
             <div class="opcion_derecha">
                    <h4> Tamaño Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam" data-slider-id="tamBordeForma1EdicionSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">3</span>
                    </div>
            </div>

            <!-------------------- COLOR BORDE ------------------------>
              <div class="opcion_derecha">
                    <h4> Color </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, onFineChange:&#39;editor.cambiarColorForma1(this)&#39;, value:&#39;2255EE&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#</span><input type="text" id="value-color-borde" class="infoColor"></input>    
                    </div>     
              </div>
            
            <!-------------------- TRANSPARENCIA BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam2" data-slider-id="transBordeForma1EdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">3</span>
                    </div>
            </div>
            
            <!-------------------- PUNTAS ------------------------>
             <div class="opcion_derecha">
                    <h4> Iteraciones </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam3" data-slider-id="puntasForma1EdicionSlider" type="text" data-slider-min="2" data-slider-max="10" data-slider-step="1" data-slider-value="4" data-slider-handle="triangle">
                          <span id="infotam3" class="infoSlider">3</span>
                    </div>
            </div>
            
            <!-------------------- COLOR FIGURAS ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Figuras </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorborde" class="jscolor {valueElement:&#39;value-color-figuras&#39;, onFineChange:&#39;editor.cambiarColorFigurasForma1(this)&#39;, value:&#39;2255EE&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#</span><input type="text" id="value-color-figuras" class="infoColor"></input>    
                    </div>     
              </div>
            
    </div>              
    */    
data.propiedades.edicionForma2 = '<div id="datos_propiedades"><h4 id="titulo-derecha">Modificar Forma 2</h4><!-------------------- TAMAÑO LINEA ------------------------><div class="opcion_derecha"><h4>Tamaño Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam" data-slider-id="tamBordeForma1EdicionSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">3</span></div></div><!-------------------- COLOR BORDE ------------------------><div class="opcion_derecha"><h4>Color</h4><div class="opcion_derecha_form"><button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, onFineChange:&#39;editor.cambiarColorForma1(this)&#39;, value:&#39;2255EE&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#</span><input type="text" id="value-color-borde" class="infoColor"></div></div><!-------------------- TRANSPARENCIA BORDE ------------------------><div class="opcion_derecha"><h4>Transparencia</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam2" data-slider-id="transBordeForma1EdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">3</span></div></div><!-------------------- PUNTAS ------------------------><div class="opcion_derecha"><h4>Iteraciones</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam3" data-slider-id="puntasForma1EdicionSlider" type="text" data-slider-min="2" data-slider-max="10" data-slider-step="1" data-slider-value="4" data-slider-handle="triangle"> <span id="infotam3" class="infoSlider">3</span></div></div><!-------------------- COLOR FIGURAS ------------------------><div class="opcion_derecha"><h4>Color Figuras</h4><div class="opcion_derecha_form"><button id="colorborde" class="jscolor {valueElement:&#39;value-color-figuras&#39;, onFineChange:&#39;editor.cambiarColorFigurasForma1(this)&#39;, value:&#39;2255EE&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#</span><input type="text" id="value-color-figuras" class="infoColor"></div></div></div>'












// Propiedades para la edicion de las imagenes, Estado 1

    /*
      <div id="datos_propiedades">
                
              <h4 id="titulo-derecha"> Editar Imagenes </h4>
        
        
                <!-------------------- IMAGEN ------------------------>
                <div class="opcion_derecha">
                    <h4> Cambiar Imagen </h4>
                    <div class="opcion_derecha_form" style="height: 50px;">
                        <label class="fileContainer">
                        Seleccionar imagen
                            <input type="file" class="form-control" id="imagen" value="descarga" onchange="editor.cargarImagen(event, this)">
                        </label>
                    </div>
                </div>
                
                 <!-------------------- BOTON DE ACEPTAR ------------------------>
                <div class="botones-menu-derecha">
                 
                    <input type="button" class="btn" value="Cambiar" onclick="editor.cambiarImagen(this)"></input>  
                </div>
    </div>            
    */    
data.propiedades.edicionImagen = '<div id="datos_propiedades"><h4 id="titulo-derecha">Editar Imagenes</h4><!-------------------- IMAGEN ------------------------><div class="opcion_derecha"><h4>Cambiar Imagen</h4><div class="opcion_derecha_form" style="height: 50px"><label class="fileContainer">Seleccionar imagen <input type="file" class="form-control" id="imagen" value="descarga" onchange="editor.cargarImagen(event, this)"></label></div></div><!-------------------- BOTON DE ACEPTAR ------------------------><div class="botones-menu-derecha"><input type="button" class="btn" value="Cambiar" onclick="editor.cambiarImagen(this)"></div></div>';








// Menu de edicion de un polilinea, Estado 1
    
    /*
  <div id="datos_propiedades">
                
              <h4 id="titulo-derecha"> Modificar Polilínea </h4>
        
        
            
            <!-------------------- GROSOR  ------------------------>
             <div class="opcion_derecha">
                    <h4> Grosor </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="grosor" data-slider-id="grosorPolylineEdicionSlider" type="text" data-slider-min="2" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">3</span>
                    </div>
            </div>
            
            <!-------------------- COLOR ------------------------>
              <div class="opcion_derecha">
                    <h4> Color </h4>
                    <div class="opcion_derecha_form">
                        <button id="color" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;371BFF&#39;, onFineChange:&#39;editor.cambiarColorLinea(this)&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></input></span>
                    </div>     
              </div>
              
           <!-------------------- TRANSPARENCIA------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="trans" data-slider-id="transPolilineaEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">3</span>
                    </div>
            </div>
            
 
    </div>            
    */    
data.propiedades.edicionPolyline = '<div id="datos_propiedades"><h4 id="titulo-derecha">Modificar Polilínea</h4><!-------------------- GROSOR  ------------------------><div class="opcion_derecha"><h4>Grosor</h4><div class="opcion_derecha_form"><input style="width: 70%" id="grosor" data-slider-id="grosorPolylineEdicionSlider" type="text" data-slider-min="2" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">3</span></div></div><!-------------------- COLOR ------------------------><div class="opcion_derecha"><h4>Color</h4><div class="opcion_derecha_form"><button id="color" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;371BFF&#39;, onFineChange:&#39;editor.cambiarColorLinea(this)&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA------------------------><div class="opcion_derecha"><h4>Transparencia Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="trans" data-slider-id="transPolilineaEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">3</span></div></div></div>';










// Menu de edicion de un poligono, Estado 1
    
    /*
  <div id="datos_propiedades">
                
              <h4 id="titulo-derecha"> Modificar Poligono </h4>
        
        
            
            <!-------------------- TAM BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Grosor </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tamborde" data-slider-id="tambordePoligonoEdicionSlider" type="text" data-slider-min="2" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">3</span>
                    </div>
            </div>
            
            <!-------------------- COLOR BORDE ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Borde </h4>
                    <div class="opcion_derecha_form">
                        <button id="color" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;371BFF&#39;, onFineChange:&#39;editor.cambiarColorBordePoligono(this)&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></input></span>
                    </div>     
              </div>
              
              
            <!-------------------- TRANSPARENCIA BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="trans" data-slider-id="transPoligonoEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">3</span>
                    </div>
            </div>                
              
              <!-------------------- COLOR FONDO ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Fondo </h4>
                    <div class="opcion_derecha_form">
                        <button id="color" class="jscolor {valueElement:&#39;value-color-fondo&#39;, value:&#39;371BFF&#39;, onFineChange:&#39;editor.cambiarColorFondoPoligono(this)&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-fondo" class="infoColor"></input></span>
                    </div>     
              </div>
              
               <!-------------------- TRANSPARENCIA FONDO ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Fondo </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="trans2" data-slider-id="trans2PoligonoEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam3" class="infoSlider">3</span>
                    </div>
            </div>   
              
            
 
    </div>            
    */    
data.propiedades.edicionPoligono = '<div id="datos_propiedades"><h4 id="titulo-derecha">Modificar Poligono</h4><!-------------------- TAM BORDE ------------------------><div class="opcion_derecha"><h4>Grosor</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tamborde" data-slider-id="tambordePoligonoEdicionSlider" type="text" data-slider-min="2" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">3</span></div></div><!-------------------- COLOR BORDE ------------------------><div class="opcion_derecha"><h4>Color Borde</h4><div class="opcion_derecha_form"><button id="color" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;371BFF&#39;, onFineChange:&#39;editor.cambiarColorBordePoligono(this)&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA BORDE ------------------------><div class="opcion_derecha"><h4>Transparencia Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="trans" data-slider-id="transPoligonoEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">3</span></div></div><!-------------------- COLOR FONDO ------------------------><div class="opcion_derecha"><h4>Color Fondo</h4><div class="opcion_derecha_form"><button id="color" class="jscolor {valueElement:&#39;value-color-fondo&#39;, value:&#39;371BFF&#39;, onFineChange:&#39;editor.cambiarColorFondoPoligono(this)&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-fondo" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA FONDO ------------------------><div class="opcion_derecha"><h4>Transparencia Fondo</h4><div class="opcion_derecha_form"><input style="width: 70%" id="trans2" data-slider-id="trans2PoligonoEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam3" class="infoSlider">3</span></div></div></div>';









// Menu de edicion de una estrella, Estado 1
    
    /*
  <div id="datos_propiedades">
                
              <h4 id="titulo-derecha"> Modificar Estrella </h4>
            
            <!-------------------- TAM BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Grosor </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tamborde" data-slider-id="tambordeEstrellaEdicionSlider" type="text" data-slider-min="2" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">3</span>
                    </div>
            </div>
            
            <!-------------------- COLOR BORDE ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Borde </h4>
                    <div class="opcion_derecha_form">
                        <button id="color" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;371BFF&#39;, onFineChange:&#39;editor.cambiarColorBordePoligono(this)&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></input></span>
                    </div>     
              </div>
              
              
            <!-------------------- TRANSPARENCIA BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="trans" data-slider-id="transEstrellaEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">3</span>
                    </div>
            </div>                
              
              <!-------------------- COLOR FONDO ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Fondo </h4>
                    <div class="opcion_derecha_form">
                        <button id="color" class="jscolor {valueElement:&#39;value-color-fondo&#39;, value:&#39;371BFF&#39;, onFineChange:&#39;editor.cambiarColorFondoPoligono(this)&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-fondo" class="infoColor"></input></span>
                    </div>     
              </div>
              
               <!-------------------- TRANSPARENCIA FONDO ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Fondo </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="trans2" data-slider-id="trans2EstrellaEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam3" class="infoSlider">3</span>
                    </div>
            </div>   
              
            
 
    </div>            
    */    
data.propiedades.edicionEstrella = '<div id="datos_propiedades"><h4 id="titulo-derecha">Modificar Estrella</h4><!-------------------- TAM BORDE ------------------------><div class="opcion_derecha"><h4>Grosor</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tamborde" data-slider-id="tambordeEstrellaEdicionSlider" type="text" data-slider-min="2" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">3</span></div></div><!-------------------- COLOR BORDE ------------------------><div class="opcion_derecha"><h4>Color Borde</h4><div class="opcion_derecha_form"><button id="color" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;371BFF&#39;, onFineChange:&#39;editor.cambiarColorBordePoligono(this)&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA BORDE ------------------------><div class="opcion_derecha"><h4>Transparencia Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="trans" data-slider-id="transEstrellaEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">3</span></div></div><!-------------------- COLOR FONDO ------------------------><div class="opcion_derecha"><h4>Color Fondo</h4><div class="opcion_derecha_form"><button id="color" class="jscolor {valueElement:&#39;value-color-fondo&#39;, value:&#39;371BFF&#39;, onFineChange:&#39;editor.cambiarColorFondoPoligono(this)&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-fondo" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA FONDO ------------------------><div class="opcion_derecha"><h4>Transparencia Fondo</h4><div class="opcion_derecha_form"><input style="width: 70%" id="trans2" data-slider-id="trans2EstrellaEdicionSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam3" class="infoSlider">3</span></div></div></div>';












// Propiedades para la creacion del circulo, Estado 2
    
    /*
    <div id="datos_propiedades">

             <h4 id="titulo-derecha"> Crear Circulo </h4>
             
             
             <!-------------------- TAMAÑO BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Tamaño Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam" data-slider-id="tamBordeSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">3</span>
                    </div>
            </div>
             
             <!-------------------- COLOR BORDE ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Borde </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;2255EE&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#</span><input type="text" id="value-color-borde" class="infoColor"></input>    
                    </div>     
              </div>
              
              <!-------------------- TRANSPARENCIA BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="transborde" data-slider-id="transBordeCirculoSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.5" data-slider-handle="triangle">
                          <span id="infotam3" class="infoSlider">0.5</span>
                    </div>
            </div>
         
             <!-------------------- COLOR FONDO ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Fondo </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorfondo" class="jscolor {valueElement:&#39;value-color-fondo&#39;, value:&#39;22DD44&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#</span><input type="text" id="value-color-fondo" class="infoColor"></input>    
                    </div>     
              </div>
              
              <!-------------------- TRANSPARENCIA FONDO ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Fondo </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="transfondo" data-slider-id="transFondoCirculoSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.5" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">0.5</span>
                    </div>
            </div>
   
    </div>             
    */    
data.propiedades.crearCirculo = '<div id="datos_propiedades"><h4 id="titulo-derecha">Crear Circulo</h4><!-------------------- TAMAÑO BORDE ------------------------><div class="opcion_derecha"><h4>Tamaño Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam" data-slider-id="tamBordeSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">3</span></div></div><!-------------------- COLOR BORDE ------------------------><div class="opcion_derecha"><h4>Color Borde</h4><div class="opcion_derecha_form"><button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;2255EE&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#</span><input type="text" id="value-color-borde" class="infoColor"></div></div><!-------------------- TRANSPARENCIA BORDE ------------------------><div class="opcion_derecha"><h4>Transparencia Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="transborde" data-slider-id="transBordeCirculoSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.5" data-slider-handle="triangle"> <span id="infotam3" class="infoSlider">0.5</span></div></div><!-------------------- COLOR FONDO ------------------------><div class="opcion_derecha"><h4>Color Fondo</h4><div class="opcion_derecha_form"><button id="colorfondo" class="jscolor {valueElement:&#39;value-color-fondo&#39;, value:&#39;22DD44&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#</span><input type="text" id="value-color-fondo" class="infoColor"></div></div><!-------------------- TRANSPARENCIA FONDO ------------------------><div class="opcion_derecha"><h4>Transparencia Fondo</h4><div class="opcion_derecha_form"><input style="width: 70%" id="transfondo" data-slider-id="transFondoCirculoSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.5" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">0.5</span></div></div></div>';






// Propiedades para la creacion del rectangulo, Estado 3
    
    /*
    <div id="datos_propiedades">

             <h4 id="titulo-derecha"> Crear Rectangulo </h4>
             
             
             <!-------------------- TAMAÑO BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Tamaño Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam" data-slider-id="tamBordeRectanguloSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">3</span>
                    </div>
            </div>
             
             <!-------------------- COLOR BORDE ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Borde </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;2255EE&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#</span><input type="text" id="value-color-borde" class="infoColor"></input>    
                    </div>     
              </div>
              
              <!-------------------- TRANSPARENCIA BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="transborde" data-slider-id="transBordeRectanguloSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.5" data-slider-handle="triangle">
                          <span id="infotam3" class="infoSlider">0.5</span>
                    </div>
            </div>
         
             <!-------------------- COLOR FONDO ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Fondo </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorfondo" class="jscolor {valueElement:&#39;value-color-fondo&#39;, value:&#39;22DD44&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#</span><input type="text" id="value-color-fondo" class="infoColor"></input>    
                    </div>     
              </div>
              
              <!-------------------- TRANSPARENCIA FONDO ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Fondo </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="transfondo" data-slider-id="transFondoRectanguloSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.5" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">0.5</span>
                    </div>
            </div>
    </div>              
    */    
data.propiedades.crearRectangulo = '<div id="datos_propiedades"><h4 id="titulo-derecha">Crear Rectangulo</h4><!-------------------- TAMAÑO BORDE ------------------------><div class="opcion_derecha"><h4>Tamaño Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam" data-slider-id="tamBordeRectanguloSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">3</span></div></div><!-------------------- COLOR BORDE ------------------------><div class="opcion_derecha"><h4>Color Borde</h4><div class="opcion_derecha_form"><button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;2255EE&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#</span><input type="text" id="value-color-borde" class="infoColor"></div></div><!-------------------- TRANSPARENCIA BORDE ------------------------><div class="opcion_derecha"><h4>Transparencia Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="transborde" data-slider-id="transBordeRectanguloSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.5" data-slider-handle="triangle"> <span id="infotam3" class="infoSlider">0.5</span></div></div><!-------------------- COLOR FONDO ------------------------><div class="opcion_derecha"><h4>Color Fondo</h4><div class="opcion_derecha_form"><button id="colorfondo" class="jscolor {valueElement:&#39;value-color-fondo&#39;, value:&#39;22DD44&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#</span><input type="text" id="value-color-fondo" class="infoColor"></div></div><!-------------------- TRANSPARENCIA FONDO ------------------------><div class="opcion_derecha"><h4>Transparencia Fondo</h4><div class="opcion_derecha_form"><input style="width: 70%" id="transfondo" data-slider-id="transFondoRectanguloSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.5" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">0.5</span></div></div></div>';







// Propiedades para la creacion de lineas, Estado 4
    
    /*       
    <div id="datos_propiedades">

             <h4 id="titulo-derecha"> Crear Recta </h4>
             <!-------------------- GROSOR RECTA ------------------------>
             <div class="opcion_derecha">
                    <h4> Tamaño Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam" data-slider-id="tamBordeLineaSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">3</span>
                    </div>
            </div>
             
             <!-------------------- COLOR RECTA ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Borde </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;371BFF&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></input></span>
                    </div>     
              </div>
              
              <!-------------------- TRANSPARENCIA BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="transborde" data-slider-id="transBordeRectaSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.5" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">0.5</span>
                    </div>
            </div>
    </div>
    
    */    
data.propiedades.crearLinea = '<div id="datos_propiedades"><h4 id="titulo-derecha">Crear Recta</h4><!-------------------- GROSOR RECTA ------------------------><div class="opcion_derecha"><h4>Tamaño Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam" data-slider-id="tamBordeLineaSlider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">3</span></div></div><!-------------------- COLOR RECTA ------------------------><div class="opcion_derecha"><h4>Color Borde</h4><div class="opcion_derecha_form"><button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;371BFF&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA BORDE ------------------------><div class="opcion_derecha"><h4>Transparencia</h4><div class="opcion_derecha_form"><input style="width: 70%" id="transborde" data-slider-id="transBordeRectaSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.5" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">0.5</span></div></div></div>';






// Propiedades para la creacion de la forma personalizada 1, Estado 5
    
    /*
    <div id="datos_propiedades">

             <h4 id="titulo-derecha"> Crear Forma 1 </h4>
             
             
             <!-------------------- GROSOR ------------------------>
             <div class="opcion_derecha">
                    <h4> Tamaño Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tamborde" data-slider-id="tamBordeForma1Slider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">3</span>
                    </div>
            </div>
             
             <!-------------------- COLOR ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Borde </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;371BFF&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></input></span>
                    </div>     
              </div>
              
              <!-------------------- TRANSPARENCIA BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="transborde" data-slider-id="transBordeForma1Slider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.5" data-slider-handle="triangle">
                          <span id="infotam3" class="infoSlider">0.5</span>
                    </div>
            </div>
         
          <!-------------------- ITERACIONES ------------------------>
             <div class="opcion_derecha">
                    <h4> Iteraciones </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="puntas" data-slider-id="puntasForma1Slider" type="text" data-slider-min="2" data-slider-max="10" data-slider-step="1" data-slider-value="5" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">5</span>
                    </div>
            </div>
    </div>              
    */    
data.propiedades.crearForma1 = '<div id="datos_propiedades"><h4 id="titulo-derecha">Crear Forma 1</h4><!-------------------- GROSOR ------------------------><div class="opcion_derecha"><h4>Tamaño Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tamborde" data-slider-id="tamBordeForma1Slider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">3</span></div></div><!-------------------- COLOR ------------------------><div class="opcion_derecha"><h4>Color Borde</h4><div class="opcion_derecha_form"><button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;371BFF&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA BORDE ------------------------><div class="opcion_derecha"><h4>Transparencia</h4><div class="opcion_derecha_form"><input style="width: 70%" id="transborde" data-slider-id="transBordeForma1Slider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.5" data-slider-handle="triangle"> <span id="infotam3" class="infoSlider">0.5</span></div></div><!-------------------- ITERACIONES ------------------------><div class="opcion_derecha"><h4>Iteraciones</h4><div class="opcion_derecha_form"><input style="width: 70%" id="puntas" data-slider-id="puntasForma1Slider" type="text" data-slider-min="2" data-slider-max="10" data-slider-step="1" data-slider-value="5" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">5</span></div></div></div>';








// Propiedades para la creacion de la forma personalizada 2, Estado 6
    
    /*
    <div id="datos_propiedades">

             <h4 id="titulo-derecha"> Crear Forma 2 </h4>
             
             
             <!-------------------- GROSOR ------------------------>
             <div class="opcion_derecha">
                    <h4> Tamaño Borde </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tamborde" data-slider-id="tamBordeForma1Slider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">3</span>
                    </div>
            </div>
             
             <!-------------------- COLOR ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Borde </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;371BFF&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></input></span>
                    </div>     
              </div>
              
              <!-------------------- TRANSPARENCIA BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="transborde" data-slider-id="transBordeForma1Slider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.5" data-slider-handle="triangle">
                          <span id="infotam3" class="infoSlider">0.5</span>
                    </div>
            </div>
         
          <!-------------------- ITERACIONES ------------------------>
             <div class="opcion_derecha">
                    <h4> Iteraciones </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="puntas" data-slider-id="puntasForma1Slider" type="text" data-slider-min="2" data-slider-max="10" data-slider-step="1" data-slider-value="5" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">5</span>
                    </div>
            </div>
            
            
            <!-------------------- COLOR FIGURAS INTERIORES ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Figuras </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorfiguras" class="jscolor {valueElement:&#39;value-color-figuras&#39;, value:&#39;FF0042&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-figuras" class="infoColor"></input></span>
                    </div>     
              </div>
            
            
    </div>             
    */    
data.propiedades.crearForma2 = '<div id="datos_propiedades"><h4 id="titulo-derecha">Crear Forma 2</h4><!-------------------- GROSOR ------------------------><div class="opcion_derecha"><h4>Tamaño Borde</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tamborde" data-slider-id="tamBordeForma1Slider" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="3" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">3</span></div></div><!-------------------- COLOR ------------------------><div class="opcion_derecha"><h4>Color Borde</h4><div class="opcion_derecha_form"><button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;371BFF&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA BORDE ------------------------><div class="opcion_derecha"><h4>Transparencia</h4><div class="opcion_derecha_form"><input style="width: 70%" id="transborde" data-slider-id="transBordeForma1Slider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.5" data-slider-handle="triangle"> <span id="infotam3" class="infoSlider">0.5</span></div></div><!-------------------- ITERACIONES ------------------------><div class="opcion_derecha"><h4>Iteraciones</h4><div class="opcion_derecha_form"><input style="width: 70%" id="puntas" data-slider-id="puntasForma1Slider" type="text" data-slider-min="2" data-slider-max="10" data-slider-step="1" data-slider-value="5" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">5</span></div></div><!-------------------- COLOR FIGURAS INTERIORES ------------------------><div class="opcion_derecha"><h4>Color Figuras</h4><div class="opcion_derecha_form"><button id="colorfiguras" class="jscolor {valueElement:&#39;value-color-figuras&#39;, value:&#39;FF0042&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-figuras" class="infoColor"></span></div></div></div>';







// Menu de pintar imagen, Estado 7
    
    /*
  <div id="datos_propiedades">
                
              <h4 id="titulo-derecha"> Dibujar Imagenes </h4>
        
        
                         <!-------------------- IMAGEN ------------------------>
                <div class="opcion_derecha">
                    <div class="opcion_derecha_form" style="height: 50px;">
                         <label class="fileContainer">
                             Seleccionar imagen
                             <input type="file" class="form-control" id="imagen" value="descarga" onchange="editor.cargarImagen(event, this)">
                         </label> 
                    </div>
                </div>
    </div>            
    */    
data.propiedades.crearImagen = '<div id="datos_propiedades"><h4 id="titulo-derecha">Dibujar Imagenes</h4><!-------------------- IMAGEN ------------------------><div class="opcion_derecha"><div class="opcion_derecha_form" style="height: 50px"><label class="fileContainer">Seleccionar imagen <input type="file" class="form-control" id="imagen" value="descarga" onchange="editor.cargarImagen(event, this)"></label></div></div></div>';







// Menu de pintar con lapiz, Estado 8
    
    /*
  <div id="datos_propiedades">
                
              <h4 id="titulo-derecha"> Lápiz </h4>
        
        
            <!-------------------- GROSOR RECTA ------------------------>
             <div class="opcion_derecha">
                    <h4> Grosor </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="grosor" data-slider-id="grosorLapizSlider" type="text" data-slider-min="2" data-slider-max="20" data-slider-step="1" data-slider-value="6" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">6</span>
                    </div>
            </div>
            
            <!-------------------- COLOR RECTA ------------------------>
              <div class="opcion_derecha">
                    <h4> Color </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorlapiz" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;000000&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></input></span>
                    </div>     
              </div>
                     
              <!-------------------- TRANSPARENCIA ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="translapiz" data-slider-id="transLapizSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.9" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">0.9</span>
                    </div>
            </div>
            
            
    </div>            
    */    
data.propiedades.crearLapiz = '<div id="datos_propiedades"><h4 id="titulo-derecha">Lápiz</h4><!-------------------- GROSOR RECTA ------------------------><div class="opcion_derecha"><h4>Grosor</h4><div class="opcion_derecha_form"><input style="width: 70%" id="grosor" data-slider-id="grosorLapizSlider" type="text" data-slider-min="2" data-slider-max="20" data-slider-step="1" data-slider-value="6" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">6</span></div></div><!-------------------- COLOR RECTA ------------------------><div class="opcion_derecha"><h4>Color</h4><div class="opcion_derecha_form"><button id="colorlapiz" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;000000&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA ------------------------><div class="opcion_derecha"><h4>Transparencia</h4><div class="opcion_derecha_form"><input style="width: 70%" id="translapiz" data-slider-id="transLapizSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.9" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">0.9</span></div></div></div>';









// Menu de pintar una polilinea, Estado 9
    
    /*
  <div id="datos_propiedades">
                
              <h4 id="titulo-derecha"> Crear Polilínea </h4>
        
        
            <!-------------------- GROSOR RECTA ------------------------>
             <div class="opcion_derecha">
                    <h4> Grosor </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="grosor" data-slider-id="grosorLapizSlider" type="text" data-slider-min="2" data-slider-max="20" data-slider-step="1" data-slider-value="6" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">6</span>
                    </div>
            </div>
            
            <!-------------------- COLOR RECTA ------------------------>
              <div class="opcion_derecha">
                    <h4> Color </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorlapiz" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;000000&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></input></span>
                    </div>     
              </div>
                     
              <!-------------------- TRANSPARENCIA ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="translapiz" data-slider-id="transLapizSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.9" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">0.9</span>
                    </div>
            </div>
            
             <!-------------------- BOTON DE TERMINO DE DIBUJADO ------------------------>
                <div class="botones-menu-derecha">
                    <input type="button" class="btn" value="Terminar" onclick="editor.dibujadoPolyline_Final()"></input> 
                </div>
            
            
    </div>            
    */    
data.propiedades.crearPolyline = '<div id="datos_propiedades"><h4 id="titulo-derecha"> Crear Polilínea</h4><!-------------------- GROSOR RECTA ------------------------><div class="opcion_derecha"><h4>Grosor</h4><div class="opcion_derecha_form"><input style="width: 70%" id="grosor" data-slider-id="grosorLapizSlider" type="text" data-slider-min="2" data-slider-max="20" data-slider-step="1" data-slider-value="6" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">6</span></div></div><!-------------------- COLOR RECTA ------------------------><div class="opcion_derecha"><h4>Color</h4><div class="opcion_derecha_form"><button id="colorlapiz" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;000000&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA ------------------------><div class="opcion_derecha"><h4>Transparencia</h4><div class="opcion_derecha_form"><input style="width: 70%" id="translapiz" data-slider-id="transLapizSlider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.9" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">0.9</span></div></div><!-------------------- BOTON DE TERMINO DE DIBUJADO ------------------------><div class="botones-menu-derecha"><input type="button" class="btn" value="Terminar" onclick="editor.dibujadoPolyline_Final()"></div></div>';









// Menu de exportar, Estado 10
    
    /*
   <div id="datos_propiedades">
                
              <h4 id="titulo-derecha"> Exportar </h4>
        
        
                         <!-------------------- NOMBRE DEL FICHERO ------------------------>
                <div class="opcion_derecha">
                    <h4> Nombre </h4>
                    <div class="opcion_derecha_form">
                        <input type="text" class="form-control" id="nombrefichero" value="descarga">
                    </div>
                </div>
        
                         <!-------------------- FORMATO DEL FICHERO ------------------------>
                 <div class="opcion_derecha">
                    <h4> Formato </h4>
                    <div class="opcion_derecha_form">
                       <select class="form-control" id="formatofichero">
                                <option value="svg" default="true"> SVG </option>
                                <option value="img"> IMG </option>
                            </select>
                    </div>
                </div>
        
                         <!-------------------- BOTON DE DESCARGA ------------------------>
                <div class="botones-menu-derecha">
                    <input type="button" class="btn" value="Descargar" onclick="editor.exportar()"></input> 
                </div>
    </div>                
    */    
data.propiedades.exportar = '<div id="datos_propiedades"><h4 id="titulo-derecha">Exportar</h4><!-------------------- NOMBRE DEL FICHERO ------------------------><div class="opcion_derecha"><h4>Nombre</h4><div class="opcion_derecha_form"><input type="text" class="form-control" id="nombrefichero" value="descarga"></div></div><!-------------------- FORMATO DEL FICHERO ------------------------><div class="opcion_derecha"><h4>Formato</h4><div class="opcion_derecha_form"><select class="form-control" id="formatofichero"><option value="svg" default="true">SVG</option><option value="img">IMG</option></select></div></div><!-------------------- BOTON DE DESCARGA ------------------------><div class="botones-menu-derecha"><input type="button" class="btn" value="Descargar" onclick="editor.exportar()"></div></div>';







// Menu de importar, Estado 11
    
    /*
       <div id="datos_propiedades">
                
              <h4 id="titulo-derecha"> Importar </h4>
        
        
                         <!-------------------- FICHERO ------------------------>
                <div class="opcion_derecha">
                    <h4> Fichero </h4>
                    <div class="opcion_derecha_form" style="height: 50px;">
                        <label class="fileContainer">
                            Seleccionar archivo
                            <input type="file" class="form-control" id="fichero" value="descarga">
                        </label>
                    </div>
                </div>
        
                         <!-------------------- BOTON DE DESCARGA ------------------------>
                <div class="botones-menu-derecha">
                    <input type="button" class="btn" value="Importar" onclick="editor.importar()"></input> 
                </div>
    </div>        
    */    
data.propiedades.importar = '<div id="datos_propiedades"><h4 id="titulo-derecha">Importar</h4><!-------------------- FICHERO ------------------------><div class="opcion_derecha"><h4>Fichero</h4><div class="opcion_derecha_form" style="height: 50px"><label class="fileContainer">Seleccionar archivo <input type="file" class="form-control" id="fichero" value="descarga"></label></div></div><!-------------------- BOTON DE DESCARGA ------------------------><div class="botones-menu-derecha"><input type="button" class="btn" value="Importar" onclick="editor.importar()"></div></div>';







// Menu de pintar un poligono, Estado 12
    
    /*
  <div id="datos_propiedades">
                
              <h4 id="titulo-derecha"> Crear Polígono </h4>
        
        
            <!-------------------- GROSOR BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Tamaño Borde: </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam-borde" data-slider-id="bordePoligonoSlider" type="text" data-slider-min="2" data-slider-max="20" data-slider-step="1" data-slider-value="6" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">6</span>
                    </div>
            </div>
            
            <!-------------------- COLOR BORDE ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Borde: </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;881122&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></input></span>
                    </div>     
              </div>
              
            <!-------------------- TRANSPARENCIA BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Borde: </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="transBorde" data-slider-id="transPoligono1Slider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.9" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">0.9</span>
                    </div>
            </div>
              
              <!-------------------- COLOR FONDO ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Fondo: </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorfondo" class="jscolor {valueElement:&#39;value-color-fondo&#39;, value:&#39;0033FF&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-fondo" class="infoColor"></input></span>
                    </div>     
              </div>
                     
            
            <!-------------------- TRANSPARENCIA FONDO ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Fondo: </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="transFondo" data-slider-id="transPoligono2Slider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.9" data-slider-handle="triangle">
                          <span id="infotam3" class="infoSlider">0.9</span>
                    </div>
            </div>
            
             <!-------------------- BOTON DE TERMINO DE DIBUJADO ------------------------>
                <div class="botones-menu-derecha">
                    <input type="button" class="btn" value="Terminar" onclick="editor.dibujadoPoligono_Final()"></input> 
                </div>
            
            
    </div>            
    */    
data.propiedades.crearPoligono = '<div id="datos_propiedades"><h4 id="titulo-derecha">Crear Polígono</h4><!-------------------- GROSOR BORDE ------------------------><div class="opcion_derecha"><h4>Tamaño Borde:</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam-borde" data-slider-id="bordePoligonoSlider" type="text" data-slider-min="2" data-slider-max="20" data-slider-step="1" data-slider-value="6" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">6</span></div></div><!-------------------- COLOR BORDE ------------------------><div class="opcion_derecha"><h4>Color Borde:</h4><div class="opcion_derecha_form"><button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;881122&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA BORDE ------------------------><div class="opcion_derecha"><h4>Transparencia Borde:</h4><div class="opcion_derecha_form"><input style="width: 70%" id="transBorde" data-slider-id="transPoligono1Slider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.9" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">0.9</span></div></div><!-------------------- COLOR FONDO ------------------------><div class="opcion_derecha"><h4>Color Fondo:</h4><div class="opcion_derecha_form"><button id="colorfondo" class="jscolor {valueElement:&#39;value-color-fondo&#39;, value:&#39;0033FF&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-fondo" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA FONDO ------------------------><div class="opcion_derecha"><h4>Transparencia Fondo:</h4><div class="opcion_derecha_form"><input style="width: 70%" id="transFondo" data-slider-id="transPoligono2Slider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.9" data-slider-handle="triangle"> <span id="infotam3" class="infoSlider">0.9</span></div></div><!-------------------- BOTON DE TERMINO DE DIBUJADO ------------------------><div class="botones-menu-derecha"><input type="button" class="btn" value="Terminar" onclick="editor.dibujadoPoligono_Final()"></div></div>';








// Menu de pintar una estrella, Estado 13
    
    /*
  <div id="datos_propiedades">
                
              <h4 id="titulo-derecha"> Crear Estrella </h4>
        
        
            <!-------------------- PUNTAS / ESQUINAS ------------------------>
             <div class="opcion_derecha">
                    <h4> Esquinas: </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="esquinas-estrella" data-slider-id="esquinasEstrellaSlider" type="text" data-slider-min="4" data-slider-max="20" data-slider-step="1" data-slider-value="5" data-slider-handle="triangle">
                          <span id="infotam4" class="infoSlider">5</span>
                    </div>
            </div>
        
        
        
        
            <!-------------------- TAMAÑO BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Tamaño Borde: </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="tam-borde" data-slider-id="bordePoligonoSlider" type="text" data-slider-min="2" data-slider-max="20" data-slider-step="1" data-slider-value="6" data-slider-handle="triangle">
                          <span id="infotam" class="infoSlider">6</span>
                    </div>
            </div>
            
            <!-------------------- COLOR BORDE ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Borde: </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;2239FF&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></input></span>
                    </div>     
              </div>
              
            <!-------------------- TRANSPARENCIA BORDE ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Borde: </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="transBorde" data-slider-id="transEstrella1Slider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.9" data-slider-handle="triangle">
                          <span id="infotam2" class="infoSlider">0.9</span>
                    </div>
            </div>
              
              <!-------------------- COLOR FONDO ------------------------>
              <div class="opcion_derecha">
                    <h4> Color Fondo: </h4>
                    <div class="opcion_derecha_form">
                        <button id="colorfondo" class="jscolor {valueElement:&#39;value-color-fondo&#39;, value:&#39;919FFF&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px;">
                        </button>
                            <span class="infoColor">#<input type="text" id="value-color-fondo" class="infoColor"></input></span>
                    </div>     
              </div>
                     
            
            <!-------------------- TRANSPARENCIA FONDO ------------------------>
             <div class="opcion_derecha">
                    <h4> Transparencia Fondo: </h4>
                    <div class="opcion_derecha_form">
                        <input style="width: 70%;" id="transFondo" data-slider-id="transEstrella2Slider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.9" data-slider-handle="triangle">
                          <span id="infotam3" class="infoSlider">0.9</span>
                    </div>
            </div>
            
            
    </div>            
    */    
data.propiedades.crearEstrella = '<div id="datos_propiedades"><h4 id="titulo-derecha">Crear Estrella</h4><!-------------------- PUNTAS / ESQUINAS ------------------------><div class="opcion_derecha"><h4>Esquinas:</h4><div class="opcion_derecha_form"><input style="width: 70%" id="esquinas-estrella" data-slider-id="esquinasEstrellaSlider" type="text" data-slider-min="4" data-slider-max="20" data-slider-step="1" data-slider-value="5" data-slider-handle="triangle"> <span id="infotam4" class="infoSlider">5</span></div></div><!-------------------- TAMAÑO BORDE ------------------------><div class="opcion_derecha"><h4>Tamaño Borde:</h4><div class="opcion_derecha_form"><input style="width: 70%" id="tam-borde" data-slider-id="bordePoligonoSlider" type="text" data-slider-min="2" data-slider-max="20" data-slider-step="1" data-slider-value="6" data-slider-handle="triangle"> <span id="infotam" class="infoSlider">6</span></div></div><!-------------------- COLOR BORDE ------------------------><div class="opcion_derecha"><h4>Color Borde:</h4><div class="opcion_derecha_form"><button id="colorborde" class="jscolor {valueElement:&#39;value-color-borde&#39;, value:&#39;2239FF&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-borde" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA BORDE ------------------------><div class="opcion_derecha"><h4>Transparencia Borde:</h4><div class="opcion_derecha_form"><input style="width: 70%" id="transBorde" data-slider-id="transEstrella1Slider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.9" data-slider-handle="triangle"> <span id="infotam2" class="infoSlider">0.9</span></div></div><!-------------------- COLOR FONDO ------------------------><div class="opcion_derecha"><h4>Color Fondo:</h4><div class="opcion_derecha_form"><button id="colorfondo" class="jscolor {valueElement:&#39;value-color-fondo&#39;, value:&#39;919FFF&#39;, width:243, height:150, padding:0, shadow:false,borderWidth:0, backgroundColor:&#39;transparent&#39;, insetColor:&#39;#000&#39;}" style="width:50%; height:25px"></button> <span class="infoColor">#<input type="text" id="value-color-fondo" class="infoColor"></span></div></div><!-------------------- TRANSPARENCIA FONDO ------------------------><div class="opcion_derecha"><h4>Transparencia Fondo:</h4><div class="opcion_derecha_form"><input style="width: 70%" id="transFondo" data-slider-id="transEstrella2Slider" type="text" data-slider-min="0.1" data-slider-max="1" data-slider-step="0.01" data-slider-value="0.9" data-slider-handle="triangle"> <span id="infotam3" class="infoSlider">0.9</span></div></div></div>';














