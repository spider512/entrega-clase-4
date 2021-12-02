/* Crea un archivo .js y vinculalo a tu html usando un tag script, ahí vas a escribir tu código JavaScript. */

const boton = document.getElementById("boton");
const body = document.getElementById("body");

/* boton.addEventListener("click",
    function()  {    
        body.insertAdjacentHTML("beforeend","<p>BEEP</p>")
        body.classList.toggle("color")
    }
) */

/* 
-----6--Ahora define la función del callback afuera del evento, guardándola en una variable 
que se llame seEjecutaEnEvento. reemplaza la función callback por la variable 
seEjecutaEnEvento (que contiene la misma función) y asegúrate de que el programa funcione igual.
 */
function seEjecutaEnEvento()  {    
    body.insertAdjacentHTML("beforeend","<p>BEEP</p>")
    body.classList.toggle("color")
}

boton.addEventListener("click",seEjecutaEnEvento)

