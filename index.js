// Dont Touch This
function loadSection(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => console.error(`Error loading section: ${error}`));
}

loadSection('header', 'sections/header.html');
loadSection('heroSection', 'sections/hero-section.html');
loadSection('statistics', 'sections/statistics.html');
loadSection('features', 'sections/features.html');
loadSection('popularCourses', 'sections/popular-courses.html');
loadSection('cta', 'sections/cta.html');
loadSection('footer', 'sections/header.html');



// Write your code below here