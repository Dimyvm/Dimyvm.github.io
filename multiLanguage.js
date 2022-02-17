
var resevedJsondata;

function getLanguage() {
    $.getJSON("languages.json", {format: "json"}, function (jsondata) {
        (localStorage.getItem('language') == null) ? (localStorage.setItem('language', 'en')) : false;

        if (jsondata != null) {
            resevedJsondata = jsondata;
            pushJsonToHtml();
        }
        else{
            alert('No data is loaded!');
        }
    });
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    pushJsonToHtml();
}

function pushJsonToHtml(){

    var lang = localStorage.getItem("language");
    var selectedLanguageData = resevedJsondata[lang];

    Object.keys(selectedLanguageData).forEach(function(key) {
        document.getElementById(key).textContent = selectedLanguageData[key];
    });
}
