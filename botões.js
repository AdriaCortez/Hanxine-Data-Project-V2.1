function SelecionarIdioma() {
  var language = document.getElementById("language").value

  if (language === "pt-BR") {
    alert("Essa página foi colocada em português (Brasil)!")
  } else if (language === "es-MX") {
    alert("Esta pagina fue colocada en español (Mexico)!")
  }
}
var translation = {
  "pt-BR": {
    Título: "Bem-vindo ao Hanxine Data Project",
    Subtítulo:
      "A primeira empresa focada em alta tecnologia para baixa qualidade de vida",
  },

  "es-MX": {
    título: "Bienvenido al Hanxine Data Project",
    Subtítulo:
      "El primer proyecto de alta tecnología para baja calidad de vida",
  },
}

function atualizarIdioma(português) {
  document.getElementById("Título").textContent =
    translation[português].SelecionarIdioma
}