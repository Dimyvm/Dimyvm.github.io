
var resevedJsondata;
const template = `
            <div class="messageBoxWrapper">
            <div class="messageBox">
                <div class="messageBoxHeader">
                    <span onclick="closeMessagBox()" class="messageBoxClose">X</span>
                    <img src="icons/find_in_page_white_48dp.svg">
                </div>
                <div class="messsageBoxBody">
                    <h1>This is no PDF!</h1>
                    <p><strong>Inspect my code.<br>HTML, CSS and a pinch of JS.</strong></p>
                    <p></p>
                </div>
            </div>
            </div>
    `;

/*Language */

function getLanguage() {
    
    $.getJSON("languages.json", {format: "json"}, function (jsondata) {
        (localStorage.getItem('language') == null) ? (localStorage.setItem('language', 'en')) : false;

        if (jsondata != null) {
            resevedJsondata = jsondata;
            pushJsonToHtml();
            showMessageBox3sec();
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
             for(var i = 0; selectedLanguageData[key][element].length ;i++ ){
                selectedLanguageData[key][i]["Job title"];
            }
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

/*MessageBox */

function showMessageBox3sec(){
    setTimeout(function () {
            document.querySelector("body").insertAdjacentHTML("afterend", template);
    }, 3000);
}

function closeMessagBox(){
    document.querySelector(".messageBoxWrapper").remove();
}
