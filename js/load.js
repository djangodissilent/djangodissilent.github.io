
var socialtags = [{
    img: "img/github.svg",
    link: "https://github.com/djangodissilent"
}, {
    img: "img/linkedin.svg",
    link: "https://www.linkedin.com/in/ahmed-rslan-6597a6211/"
}
    , {
    img: "img/gmailIcon.svg",
    link: "ahmed.amein.rslan@gmail.com"
}
    , {
    img: "img/resumeIcon.png",
    link: "resume/ahmed_amien_resume.pdf"

}
]

{/* <a href="mailto:someone@yoursite.com">Email Us</a> */}
function loadSocialIcons() {
    var socialtext = ""
    for (x in socialtags) {
        var data = null
        if (socialtags[x].link.includes("@")) {
            console.log(socialtags[x])
            data = `<a class="center" href="` + "mailto:"+socialtags[x].link + `"> <img class="center" style="padding: 5px!important;width: 40px;" src="` + socialtags[x].img + `"></a>`
            console.log(data)
        }
        else
            data = `<a class="center" href="` + socialtags[x].link + `"> <img class="center" style="padding: 5px!important;width: 40px;" src="` + socialtags[x].img + `"></a>`
        socialtext += data
    }
    document.getElementById("social-list").innerHTML = socialtext;
}

loadSocialIcons()

function dayNightToggle() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var check = window.localStorage.getItem('light-mode');
    if (check == "light") {
        window.localStorage.clear();
    } else {
        window.localStorage.setItem('light-mode', 'light');
    }

}

function checkDayNight() {
    var check = window.localStorage.getItem('light-mode');
    var element = document.body;
    if (check == "light") {
        element.classList.add("light-mode");
    } else {
        element.classList.remove("light-mode");
    }
}

checkDayNight()
