import eng from './eng.js';
import rus from './rus.js';

var currentLang = "eng";
function getLangResources(lang) {
    if(lang == "rus") {
        return rus;
    }

    return eng;
}

const currentResources = getLangResources(currentLang);

export default currentResources;