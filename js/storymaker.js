// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector("#noun1");
const verb = document.querySelector("#verb");
const adjective = document.querySelector("#adjective");
const noun2 = document.querySelector("#noun2");
const setting = document.querySelector("#setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector("#choosenNoun1");
const choosenVerb = document.querySelector("#choosenVerb");
const choosenAdjective = document.querySelector("#choosenAdjective");
const choosenNoun2 = document.querySelector("#choosenNoun2");
const choosenSetting = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags
const playback = document.querySelector("#playback");
const random = document.querySelector("#random");
const story = document.querySelector("#story");

// NodeList variables to highlight the seected word
const n1w = document.querySelectorAll(".column:nth-child(1) > div > p");
const vw = document.querySelectorAll(".column:nth-child(2) > div > p");
const aw = document.querySelectorAll(".column:nth-child(3) > div > p");
const n2w = document.querySelectorAll(".column:nth-child(4) > div > p");
const sw = document.querySelectorAll(".column:nth-child(5) > div > p");

// Variables for pre-defined arrays
const nounes1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nounes2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variable to display story
let nouneWord1 = "";
let verbsWord = "";
let adjectivesWord = "";
let noune2Word = "";
let settingWord = "";

// Variables for count to grab array elements


/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it

    // if-else to change count setting

    let noun1Word = random_index(nounes1);
    choosenNoun1.textContent = noun1Word;
    nouneWord1 = noun1Word;
    playback_on_click();
    addSelectedClass(nounes1, n1w, nouneWord1);
}
noun1.addEventListener("click", noun1_on_click);

function verb_on_click() {
    let verbWord = random_index(verbs);
    choosenVerb.textContent = verbWord;
    verbsWord = verbWord;
    playback_on_click();
    addSelectedClass(verbs, vw, verbWord);
}
verb.addEventListener("click", verb_on_click);

function adjective_on_click() {
    let adjectiveWord = random_index(adjectives);
    choosenAdjective.textContent = adjectiveWord;
    adjectivesWord = adjectiveWord;
    playback_on_click();
    addSelectedClass(adjectives, aw, adjectivesWord);
}
adjective.addEventListener("click", adjective_on_click);

function noun2_on_click() {
    let noun2Word = random_index(nounes2);
    choosenNoun2.textContent = noun2Word;
    noune2Word = noun2Word;
    playback_on_click();
    addSelectedClass(nounes2, n2w, noun2Word);
}
noun2.addEventListener("click", noun2_on_click);

function setting_on_click() {
    let settingsWord = random_index(settings);
    choosenSetting.textContent = settingsWord; 
    settingWord = settingsWord;
    playback_on_click();
    addSelectedClass(settings, sw, settingWord);
}
setting.addEventListener("click", setting_on_click);

// concatenate the user story and display
function playback_on_click() {
    story.textContent = `${nouneWord1} ${verbsWord} ${adjectivesWord} ${noune2Word} ${settingWord}`;
}

// grabbing random element from arrays, concatenate and display
function random_index(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
}
random.addEventListener("click", random_on_click);

function remove_css_class_from_nodeList(nodeListOfWords) {
    nodeListOfWords.forEach((element) => {
        element.classList.remove("chosen");
    });
}

function addSelectedClass(arrOfWords, nodeListOfWords, wordToSpeak) {
    var index = arrOfWords.indexOf(wordToSpeak);
    remove_css_class_from_nodeList(nodeListOfWords);
    nodeListOfWords[index].classList.add("chosen");
}

/* Event Listeners
-------------------------------------------------- */
noun1.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
noun2.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_index);