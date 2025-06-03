function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "/DS_Perfil_Claro.png")
    img.setAttribute("alt", "Imagem de perfil clara")
  } else {
    img.setAttribute("src", "/Ds-Perfil3.png")
    img.setAttribute("alt", "Imagem de perfil escura")
  }
}
