const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    window.location.href = "second.html";
});
const nextBtn = document.getElementById("nextBtn");
if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        window.location.href = "third.html";
    });
}
const letter = document.getElementById("letter");
console.log(letter);

const titleText = "Welcome Repellers of Edom";
const subtitleText = "This is the first gate of my anti-Edomite thought repository.";
const hebrew = "דחה אדמון";

let titleIndex = 0;
let subtitleIndex = 0;
let hebrewIndex = 0;
let titleSecondIndex = 0;

// ---------- TITLE ----------

function typeTitle() {

    if (titleIndex < titleText.length) {

        title.textContent += titleText[titleIndex];
        titleIndex++;

        setTimeout(typeTitle, 75);

    } else {

        typeSubtitle();

    }

}

// ---------- SUBTITLE ----------

function typeSubtitle() {

    if (subtitleIndex < subtitleText.length) {

        subtitle.textContent += subtitleText[subtitleIndex];
        subtitleIndex++;

        setTimeout(typeSubtitle, 40);

    } else {

        setTimeout(showHebrew, 800);

    }

}

// ---------- HEBREW ----------

function showHebrew() {

    letter.textContent = hebrew[hebrewIndex];

    hebrewIndex++;

    if (hebrewIndex >= hebrew.length) {

        hebrewIndex = 0;

    }

    setTimeout(showHebrew, 500);

}

typeTitle();