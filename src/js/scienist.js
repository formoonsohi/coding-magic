document.addEventListener('DOMContentLoaded', () => {
    let scientists = [
        { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
        { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
        { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
        { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
        { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
        { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
        { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
        { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
        { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
        { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
        { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
        { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
    ];

    const scientistsGrid = document.getElementById('scientistsGrid');

    function renderScientists(arr) {
        scientistsGrid.innerHTML = ''; 
        if (arr.length === 0) {
            scientistsGrid.innerHTML = '<p class="no-results">Немає вчених для відображення.</p>';
            return;
        }
        arr.forEach(scientist => {
            const scientistCard = document.createElement('div');
            scientistCard.classList.add('scientist-card');
            scientistCard.innerHTML = `
                <h3 class="scientist-name">${scientist.name} ${scientist.surname}</h3>
                <p class="scientist-info">${scientist.born}-${scientist.dead}</p>
            `;
            scientistsGrid.appendChild(scientistCard);
        });
    }

    renderScientists(scientists);

    const nineteenthCenturyScientistsBtn = document.getElementById('nineteenthCenturyScientists');
    const albertEinsteinBornBtn = document.getElementById('albertEinsteinBorn');
    const sortByNameBtn = document.getElementById('sortByName');
    const findScientistsByCBtn = document.getElementById('findScientistsByC');
    const sortByLifespanBtn = document.getElementById('sortByLifespan');
    const deleteScientistsABtn = document.getElementById('deleteScientistsA');
    const findYoungestAndOldestBtn = document.getElementById('findYoungestAndOldest');
    const findLongestShortestLifespanBtn = document.getElementById('findLongestShortestLifespan');
    const firstLettersMatchBtn = document.getElementById('firstLettersMatch');

    nineteenthCenturyScientistsBtn.addEventListener('click', () => {
        const nineteenthCentury = scientists.filter(scientist => scientist.born >= 1801 && scientist.born <= 1900);
        renderScientists(nineteenthCentury);
    });

    albertEinsteinBornBtn.addEventListener('click', () => {
        const albert = scientists.find(scientist => scientist.name === "Albert" && scientist.surname === "Einstein");
        if (albert) {
            alert(`Рік народження Albert Einstein: ${albert.born}`);
        } else {
            alert('Albert Einstein не знайдено.');
        }
        renderScientists(scientists); 
    });

    sortByNameBtn.addEventListener('click', () => {
        const sortedScientists = [...scientists].sort((a, b) => {
            const fullNameA = `${a.name} ${a.surname}`;
            const fullNameB = `${b.name} ${b.surname}`;
            return fullNameA.localeCompare(fullNameB);
        });
        renderScientists(sortedScientists);
    });

    findScientistsByCBtn.addEventListener('click', () => {
        const scientistsWithCSurname = scientists.filter(scientist => scientist.surname.startsWith('C'));
        renderScientists(scientistsWithCSurname);
    });

    sortByLifespanBtn.addEventListener('click', () => {
        const sortedByLifespan = [...scientists].sort((a, b) => {
            const lifespanA = a.dead - a.born;
            const lifespanB = b.dead - b.born;
            return lifespanB - lifespanA;
        });
        renderScientists(sortedByLifespan);
    });

    deleteScientistsABtn.addEventListener('click', () => {
        scientists = scientists.filter(scientist => !scientist.name.startsWith('A'));
        renderScientists(scientists);
        alert('Вчені, імена яких починаються на "А", були видалені.');
    });

    findYoungestAndOldestBtn.addEventListener('click', () => {
        if (scientists.length === 0) {
            alert('Немає вчених для аналізу.');
            return;
        }
        const youngestScientist = scientists.reduce((prev, current) => (prev.born > current.born ? prev : current));
        alert(`Вчений, який народився найпізніше: ${youngestScientist.name} ${youngestScientist.surname} (${youngestScientist.born})`);
        renderScientists(scientists);
    });

    findLongestShortestLifespanBtn.addEventListener('click', () => {
        if (scientists.length === 0) {
            alert('Немає вчених для аналізу.');
            return;
        }

        let longestLifespan = -1;
        let shortestLifespan = Infinity;
        let longestLivedScientist = null;
        let shortestLivedScientist = null;

        scientists.forEach(scientist => {
            const lifespan = scientist.dead - scientist.born;
            if (lifespan > longestLifespan) {
                longestLifespan = lifespan;
                longestLivedScientist = scientist;
            }
            if (lifespan < shortestLifespan) {
                shortestLifespan = lifespan;
                shortestLivedScientist = scientist;
            }
        });

        let message = '';
        if (longestLivedScientist) {
            message += `Вчений, який прожив найдовше: ${longestLivedScientist.name} ${longestLivedScientist.surname} (${longestLifespan} років)\n`;
        }
        if (shortestLivedScientist) {
            message += `Вчений, який прожив найменше: ${shortestLivedScientist.name} ${shortestLivedScientist.surname} (${shortestLifespan} років)`;
        }
        alert(message);
        renderScientists(scientists); 
    });

    firstLettersMatchBtn.addEventListener('click', () => {
        const matchingScientists = scientists.filter(scientist =>
            scientist.name.charAt(0).toLowerCase() === scientist.surname.charAt(0).toLowerCase()
        );
        renderScientists(matchingScientists);
    });
});