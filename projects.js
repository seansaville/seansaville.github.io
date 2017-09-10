var twitchautohost = {
    name: "TwitchAutoHost",
    link: "https://github.com/seansaville/TwitchAutoHost",
    description: "Allow people to host their own channel on a shared Twitch stream through a simple web interface."
};

var foobar = {
    name: "foobar",
    link: "http://google.com",
    description: "Foos, bars, and sometimes bazzes."
};

var php = {
    name: "PHP",
    projects: [twitchautohost, foobar]
};

function buildProjectHTML(language) {
    var projs = language.projects;
    var html = "";
    for (i = 0; i < projs.length; i++) {
        html += "<div class='projects'><h3 class='projects'><a href='" + projs[i].link + "'>" + projs[i].name + "</a></h3>" + projs[i].description + "</div>";
    }
    return html;
}

function test() {
    document.getElementById("project-box").innerHTML = buildProjectHTML(php);
    return document.getElementById("project-box").innerHTML;
}
