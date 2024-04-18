
const openAbout = document.querySelector('#openMoreAbout');

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