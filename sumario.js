var elementosSumario = document.querySelectorAll(".sumario h2")

elementosSumario.forEach(function (titulo) {
  titulo.addEventListener("click", function () {
    var container = titulo.parentElement
    container.classList.toggle("ativa")
  })
})
 