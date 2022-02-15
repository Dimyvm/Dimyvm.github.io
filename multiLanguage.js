

var language;
function getLanguage() {

    $.getJSON("languages.json", function (json) {

        (localStorage.getItem('language') == null) ? setLanguage('en') : false;

        var lang = localStorage.getItem("language");
        var doc = json;
        if (doc != null) {
          doc =  JSON.parse(doc);
          console.log(doc[0].lang);
            alert('Data is loaded ! -> console');
        }
    });
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    alert(lang.toString());
}
