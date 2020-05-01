const ventada_carga = document.getElementById("carga"),
      cuerpo = document.getElementById("cuerpo")

window.addEventListener("load", cargado);

function cargado() {
  cuerpo.style.display = "block"
  ventada_carga.style.display = "none"
  console.log("Pagina cargada")
}