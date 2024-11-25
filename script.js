function loadSection(sectionName, containerId) {
  fetch(sectionName)
    .then((response) => response.text())
    .then((html) => (document.getElementById(containerId).innerHTML += html));
}

loadSection("./sections/header/header.html", "page__header");
loadSection("./sections/home-section/home-section.html", "page__main");
loadSection("./sections/skills-section/skills-section.html", "page__main");
