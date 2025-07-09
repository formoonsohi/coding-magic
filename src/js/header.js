let darkMode = false;

    document.getElementById('toggle-theme').addEventListener('click', () => {
      darkMode = !darkMode;

      if (darkMode) {
        document.documentElement.style.setProperty('--main-text-color', '#000');
        document.documentElement.style.setProperty('--main-bg-color', '#fff');
      } else {
        document.documentElement.style.setProperty('--main-bg-clor', '#fff');
        document.documentElement.style.setProperty('--main-text-color', '#000');
      }
    });