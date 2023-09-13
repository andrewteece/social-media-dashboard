/*const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
    localStorage.setItem('colorMode', 'dark');
};

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
    localStorage.setItem('colorMode', 'light');
};

const colorModeFromLocalStorage = () => {
    return localStorage.getItem('colorMode');
};

const colorModeFromPreferences = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light' // If preference is set or does not match anything (light is default)
};

const loadAndUpdateColor = () => {
    // local storage has precendence over the prefers-color-scheme
    const color = colorModeFromLocalStorage() || colorModeFromPreferences();
    color == 'dark' ? darkButton.click() : lightButton.click();
};

// when the inputs are clicked, check which radio button is checked and change the color
const radioButtons = document.querySelectorAll('.toggle__wrapper input');
radioButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        darkButton.checked ? setDarkMode() : setLightMode();
    });
});

// when the prefers-color-scheme changes, this event will be emitted
// event reflects the media query, if it matches, the new color is dark, else it is light
window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (event) => {
        event.matches ? darkButton.click() : lightButton.click();
    });

// Load the right color on startup - localStorage has precedence
loadAndUpdateColor();
console.log('wtf');*/

// check for saved 'darkMode' in local storage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle =
    document.querySelector('#toggle-btn-dark');

const enableDarkMode = () => {
    // add the class to the body
    document.body.classList.add('darkmode');
    // update darkmode in localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    //remove the class from the body
    document.body.classList.remove('darkMode');
    // update darkMode in localstorage
    localStorage.setItem('darkMode', null);
}

// If user already vistited and enabled darkMode
// start it with it on

if (darkMode === 'enabled') {
    enableDarkMode();
}

// when someone clicks the button
darkModeToggle.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode');

    // ir not current enabled, enable it

    if (darkMode != 'enabled') {
        enableDarkMode();

        // if it has been enabled, turn it off
    } else {
        disableDarkMode();
    }
});
