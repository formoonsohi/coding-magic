import sunImage from "../img/themeLight.png";
import moonImage from "../img/themeDark.png";
import arrowDownDark from "../img/arrow-down.svg";
import arrowDownLight from "../img/arrow-down-light.svg";
import codingMagicLogoDarkTheme from "../img/coding-magic-light.svg"; 
import codingMagicLogoLightTheme from "../img/coding-magic.svg"; 

const toggleButton = document.getElementById('toggle-theme');
const imgElement = toggleButton.firstElementChild;
const arrowIcon = document.getElementById('arrow-icon');
const codingMagicLogo = document.getElementById('coding-light');

let darkMode = false;

toggleButton.addEventListener('click', () => {
    darkMode = !darkMode;

    if (darkMode) {
        imgElement.src = moonImage;
        document.documentElement.style.setProperty('--main-text-color', '#fff');
        document.documentElement.style.setProperty('--main-bg-color', '#00021a');
        arrowIcon.src = arrowDownDark;
        codingMagicLogo.src = codingMagicLogoDarkTheme;

    } else {
        imgElement.src = sunImage;
        document.documentElement.style.setProperty('--main-bg-color', '#fff');
        document.documentElement.style.setProperty('--main-text-color', '#000');
        arrowIcon.src = arrowDownLight;
        codingMagicLogo.src = codingMagicLogoLightTheme;
    }
});