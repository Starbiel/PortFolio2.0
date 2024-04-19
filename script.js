const singleTecElements = document.querySelectorAll('.singleTec');
const openAbout = document.querySelector('#openMoreAbout');

let previousColor = '#010101';

openAbout.addEventListener('click', () => {
    const moreOptions = document.querySelector('#moreOptionsAbout');
    const hasToggle = moreOptions.classList.contains("toggle");
    if(hasToggle) {
        moreOptions.classList.remove("toggle");
        moreOptions.classList.add("toggleOff");
        moreOptions.style.display = "none";
    }
    else {
        moreOptions.classList.add("toggle");
        moreOptions.classList.remove("toggleOff");
        moreOptions.style.display = "";
    }
});

singleTecElements.forEach((element, index) => {
    const newColor = lightenColor(previousColor, 1);
    element.style.backgroundColor = newColor;
    previousColor = newColor;
});

function lightenColor(color, amount) {
    let r = parseInt(color.substr(1, 2), 16);
    let g = parseInt(color.substr(3, 2), 16);
    let b = parseInt(color.substr(5, 2), 16);


    r = Math.min(255, Math.round(r * (1 + amount)));
    g = Math.min(255, Math.round(g * (1 + amount)));
    b = Math.min(255, Math.round(b * (1 + amount)));

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}