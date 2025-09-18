const btnMenu = document.querySelector("#menu-mobile")
const navbar = document.querySelector("#navbar")
const menuIcon = document.querySelector("#menu-mobile .icons-menu")

btnMenu.addEventListener("click", () => {
  // 1. Adiciona ou remove a classe "active" da barra de navegação
  navbar.classList.toggle("active")

  // 2. Verifica se o menu está ativo para trocar o ícone
  if (navbar.classList.contains("active")) {
    menuIcon.src =
      "https://img.icons8.com/ios-filled/50/d3ad7f/delete-sign--v1.png" // Ícone de fechar
  } else {
    menuIcon.src = "https://img.icons8.com/ios-filled/50/d3ad7f/menu--v1.png" // Ícone de menu
  }
})
