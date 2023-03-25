// Collapsing hamburger upon click not working - to fix!

// const navLinks = document.querySelectorAll(".nav-item");
// const menuToggle = document.getElementById("navbarSupportedContent");
// const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
// navLinks.forEach((l) => {
//   l.addEventListener("click", () => {
//     bsCollapse.toggle();
//   });
// });



// Collapses hamburger dropdown menu upon click
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})


// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    updateActiveButton(themeName);
}
        
// function to update the active button based on the current theme
function updateActiveButton(themeName) {
    var bronButton = document.getElementById('bron-button');
    var bekButton = document.getElementById('bek-button');
    var emilyButton = document.getElementById('emily-button');
    var yanButton = document.getElementById('yan-button');
    bronButton.classList.remove('active');
    bekButton.classList.remove('active');
    emilyButton.classList.remove('active');
    yanButton.classList.remove('active');
    if (themeName === 'theme-bron') {
        bronButton.classList.add('active');
    } else if (themeName === 'theme-bek') {
        bekButton.classList.add('active');
    } else if (themeName === 'theme-emily') {
        emilyButton.classList.add('active');
    } else if (themeName === 'theme-yan') {
        yanButton.classList.add('active');
    }
}
        
// Immediately invoked function to set the theme on initial load
(function () {
    var theme = localStorage.getItem('theme');
    if (theme === 'theme-bek' || theme === 'theme-emily' || theme === 'theme-yan') {
        setTheme(theme);
    } else {
        setTheme('theme-bron');
    }
})();
