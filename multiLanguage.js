

var language;
function getLanguage() {

    $.getJSON("languages.json", function (json) {

        (localStorage.getItem('language') == null) ? setLanguage('en') : false;

        var lang = localStorage.getItem("language");
        var doc = json;
        if (doc != null) {
           var test = `Data is loaded !' + 'Taal: ${doc[lang]}`;
            alert(`${test}`);
        }
    });
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    alert(lang.toString());
}
