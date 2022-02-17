

var language;
function getLanguage() {
    $.getJSON("languages.json", {format: "json"}, function (json) {
    
        (localStorage.getItem('language') == null) ? setLanguage('fr') : false;

        var lang = localStorage.getItem("language");
        var doc = json;
        if (doc != null) {
            
         var selectedLanguage = doc[lang];
            Object.keys(selectedLanguage ).forEach(function(key) {
                console.log( selectedLanguage[key]);
                document.getElementById(key).textContent = selectedLanguage[key];
            });
          
//           document.getElementById("About me title").textContent = doc[lang]["About me title"];
        
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
