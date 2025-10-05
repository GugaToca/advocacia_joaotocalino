// Garante que o script só rode depois que tudo estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  // Cria o botão hamburguer
  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  hamburger.innerHTML = "<span></span><span></span><span></span>";
  navbar.appendChild(hamburger);

  // Cria o menu mobile com base no nav
  const nav = navbar.querySelector("nav");
  const mobileNav = document.createElement("div");
  mobileNav.classList.add("mobile-nav");
  mobileNav.innerHTML = nav.innerHTML;
  navbar.appendChild(mobileNav);

  // Confirma no console que o botão foi criado
  console.log("Hamburguer criado:", hamburger);

  // Adiciona o evento de clique
  hamburger.addEventListener("click", () => {
    console.log("Clique detectado");
    mobileNav.classList.toggle("show");
  });

  // Fecha o menu ao clicar em um link
  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("show");
    });
  });

  // Rolagem suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) destino.scrollIntoView({ behavior: "smooth" });
    });
  });
});
