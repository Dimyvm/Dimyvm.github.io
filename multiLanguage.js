

var language;
function getLanguage() {
    $.getJSON("languages.json", {format: "json"}, function (json) {
    
        (localStorage.getItem('language') == null) ? setLanguage('fr') : false;

        var lang = localStorage.getItem("language");
        var doc = json;
        if (doc != null) {
            
            
          
          document.getElementById("About me title").textContent = doc[lang]["About me title"];
        
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
