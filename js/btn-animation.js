const btn = document.getElementsByClassName("content__button");

var pos = 0;    // Posicion en las iteraciones
var i   = 0;    // Cambio de animacion 1 agrandar escala

// Animacion
var fps            = 60;   // Cantidad de cambios por segundo
var secondDuration = 1.5;  // La duracion de cada animacion en segundos
var changeMax      = 0.2;  // Cambio maximo de la propiedad
var initScale      = 1;    // Escala inicial

var change  = changeMax/(secondDuration*fps);      // Cuanto de ese cambio se va a aplicar por cada iteracion
var refresh = (1000)/fps;                          // Cada cuanto se va a actualizar
var inter   = setInterval(move, refresh)


function move(){
    if((pos >= 0) && (i == 0))
    {
        pos += 1;
        btn[0].style.webkitTransform = `scale(${initScale+=change})`;
        if(pos>=(secondDuration*fps)){i=1}

    }else if((pos > 0) && (i == 1))
    {
        pos += -1;
        btn[0].style.webkitTransform = `scale(${initScale-=change})`;
        if(pos==0){i=0}
    }
}
