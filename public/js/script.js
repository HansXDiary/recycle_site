const menu = document.getElementById("menu");
    const menuIcon = document.querySelector(".menu-icon i");

    function toggleMenu() {
      menu.classList.toggle("active");
      menuIcon.classList.toggle("fa-bars");
      menuIcon.classList.toggle("fa-times");
    }

    document.querySelectorAll(".menu a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
      });
    });

    const revealElements = document.querySelectorAll('.reveal');
    function revealOnScroll() {
      const windowHeight = window.innerHeight;
      revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
          el.classList.add('active');
        }
      });
    }
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    const typedText = "Bienvenue chez EcoCycle,\nvotre partenaire pour un avenir plus vert";
    const typedEl = document.getElementById("typed-text");
    let index = 0;
    function typeWriter() {
      if (index < typedText.length) {
        const char = typedText.charAt(index);
        typedEl.innerHTML += char === '\n' ? '<br>' : char;
        index++;
        setTimeout(typeWriter, 50);
      }
    }
    window.addEventListener("load", typeWriter);

    // ScrollSpy : surligner le menu actif
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu a");

    function updateMenuHighlight() {
      let current = "";

      sections.forEach(section => {
  const rect = section.getBoundingClientRect();
  const offsetTop = rect.top + window.scrollY;
  const offsetBottom = offsetTop + section.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
    current = section.getAttribute("id");
  }
});


      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", updateMenuHighlight);
    window.addEventListener("load", updateMenuHighlight);