

var language;
function getLanguage() {
    console.log('loading language data..');
    $.getJSON("languages.json", {format: "json"}, function (json) {
    
        (localStorage.getItem('language') == null) ? setLanguage('fr') : false;

        var lang = localStorage.getItem("language");
        var doc = json;
        if (doc != null) {
          console.log(doc[lang]);
          console.log(doc[lang]['About me title']);
          document.getElementById("About me title").textContent = doc[lang]["About me title"];
            alert('Data is loaded ! -> console');
        }
        else{
            alert('No data is loaded!');
        }
    });
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    alert(lang.toString());
}
