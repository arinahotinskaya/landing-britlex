function loadSection(sectionName, containerId) {
  fetch(sectionName)
    .then((response) => response.text())
    .then((html) => (document.getElementById(containerId).innerHTML = html));
}

loadSection("./sections/header/header.html", "header-container");
