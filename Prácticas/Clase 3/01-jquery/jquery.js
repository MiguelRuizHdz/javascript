/*=============================================
JS NATIVO
=============================================*/

var caja = document.querySelector("#caja");

caja.addEventListener("click", cambiarPropiedades);

function cambiarPropiedades() {

    caja.style.background = "blue";
    caja.style.width = "400px";
    caja.style.height = "100px";

}

/*=============================================
JQUERY
=============================================*/

$("#caja").click(function(){

	$("#caja").css({

		"background": "blue",
		"width" : "400px",
		"height" : "100px"

	})

})