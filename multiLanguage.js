
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
       var element = selectedLanguageData[key];
        if(typeof element == "object"){
            console.log(element + "is een object");
        }
        else{
            if(document.getElementById(key).nodeName == "<p>")
            document.getElementById(key).innerHTML = selectedLanguageData[key];
            else{
            document.getElementById(key).textContent = selectedLanguageData[key];
            }
        }   
    });
}
