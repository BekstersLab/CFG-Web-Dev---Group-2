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


// Navbar collapse for homepage - listen for link being clicked (classes don't work with event listeners as they have more than 1 element.)

document.getElementById("homeClicked").addEventListener("click", collapseHamburgerMenu);

document.getElementById("environmentClicked").addEventListener("click", collapseHamburgerMenu);

document.getElementById("animalsClicked").addEventListener("click", collapseHamburgerMenu);

document.getElementById("technologyClicked").addEventListener("click", collapseHamburgerMenu);

document.getElementById("newsletterClicked").addEventListener("click", collapseHamburgerMenu);

document.getElementById("bronClicked").addEventListener("click", collapseHamburgerMenu);

document.getElementById("yanClicked").addEventListener("click", collapseHamburgerMenu);

document.getElementById("emClicked").addEventListener("click", collapseHamburgerMenu);

document.getElementById("bekClicked").addEventListener("click", collapseHamburgerMenu);


// run this function if a link is clicked to make the menu collapse
function collapseHamburgerMenu() {
    console.log("A link was clicked");
    document.getElementById("navmenu").classList.replace("show","collapse");
}