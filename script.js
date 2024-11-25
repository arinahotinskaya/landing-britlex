function loadSection(sectionName, containerId) {
  fetch(sectionName)
    .then((response) => response.text())
    .then((html) => (document.getElementById(containerId).innerHTML += html));
}

loadSection("./sections/header/header.html", "page__header");
loadSection("./sections/home-section/home-section.html", "page__main");
loadSection("./sections/skills-section/skills-section.html", "page__main");
loadSection("./sections/about-us-section/about-us-section.html", "page__main");
loadSection("./sections/pricing-section/pricing-section.html", "page__main");
loadSection("./sections/contact-us-section/contact-us-section.html", "page__main");
loadSection("./sections/footer/footer.html", "page__footer");