var highScore = document.querySelector("#highscore")
var clear = document.querySelector("#clear")
var back = document.querySelector("#back")

clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

var all = localStorage.getItem("all");
all = JSON.parse(allScores);

if (all !== null) {
    for (var i=0; i<all.length; i++)  {
        var createLi = document.createElement("li");
        createLi.textContent=allScores[i].initials+" "+all[i].allScores;
        highScore.appendChild(createLi);
    }
}

back.addEventListener("click", function() {
    window.location.replace("../index.html")
})