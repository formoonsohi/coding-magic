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
const codingMagicFooter = document.getElementById('coding-footer');

let darkMode = false;

toggleButton.addEventListener('click', () => {
    darkMode = !darkMode;

    if (darkMode) {
        imgElement.src = moonImage;
        document.documentElement.style.setProperty('--main-text-color', '#fff');
        document.documentElement.style.setProperty('--main-bg-color', '#353637ff');
        arrowIcon.src = arrowDownLight;
        codingMagicLogo.src = codingMagicLogoDarkTheme;
        codingMagicFooter.src = codingMagicLogoDarkTheme;

    } else {
        imgElement.src = sunImage;
        document.documentElement.style.setProperty('--main-bg-color', '#fff');
        document.documentElement.style.setProperty('--main-text-color', '#000');
        arrowIcon.src = arrowDownDark;
        codingMagicLogo.src = codingMagicLogoLightTheme;
        codingMagicFooter.src = codingMagicLogoLightTheme;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const welcomeModalOverlay = document.getElementById('welcomeModalOverlay');
    const closeModalButton = document.getElementById('closeModalButton');
    const saveNameButton = document.getElementById('saveNameButton');
    const userNameInput = document.getElementById('userName');
    const userGreetingSpan = document.getElementById('userGreetingText'); 

   
    if (!welcomeModalOverlay || !closeModalButton || !saveNameButton || !userNameInput || !userGreetingSpan) {
        console.error("Один або кілька DOM-елементів для модалки не знайдені. Перевірте ID та класи в HTML.");
        return;
    }

    function showModal() {
        welcomeModalOverlay.classList.add('show');
        welcomeModalOverlay.style.display = 'flex';
        userNameInput.focus();
    }

    function hideModal() {
        welcomeModalOverlay.classList.remove('show');
        welcomeModalOverlay.style.display = 'none';
    }

    function updateGreeting(name) {
        if (userGreetingSpan) {
            userGreetingSpan.textContent = `Вітаємо, ${name}!`;
        }
    }

    const hasModalBeenShown = localStorage.getItem('hasWelcomeModalBeenShown');
    const savedUserName = localStorage.getItem('userName');

    if (savedUserName) {
        updateGreeting(savedUserName);
    } else {
        updateGreeting("User");
    }

    if (!hasModalBeenShown) {
        setTimeout(() => {
            showModal();
        }, 500); 
    }

    closeModalButton.addEventListener('click', () => {
        hideModal();
        localStorage.setItem('hasWelcomeModalBeenShown', 'true');
        if (!localStorage.getItem('userName')) {
            updateGreeting("User");
        }
    });

    saveNameButton.addEventListener('click', () => {
        const enteredName = userNameInput.value.trim(); 

        if (enteredName) {
            updateGreeting(enteredName); 
            localStorage.setItem('userName', enteredName); 
        } else { 
            updateGreeting("User"); 
            localStorage.removeItem('userName'); 
        }

        hideModal(); 
        localStorage.setItem('hasWelcomeModalBeenShown', 'true');  
    });

    welcomeModalOverlay.addEventListener('click', (event) => {
        if (event.target === welcomeModalOverlay) {
            hideModal();
            localStorage.setItem('hasWelcomeModalBeenShown', 'true');
            if (!localStorage.getItem('userName')) {
                updateGreeting("User");
            }
        }
    });
});