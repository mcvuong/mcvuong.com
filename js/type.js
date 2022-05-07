//onload
var aText = ("Content Gone Technical.").split("");

var onMain = false;

console.log(onMain);
$('header').addClass("default"); 
$('section').hide();
typewriter("", 0);

function typewriter(typed, current) //typewriter for h2
{
    typed += aText[current];
    current++;
    document.getElementById("typedtext").innerHTML = typed;
    if (current == aText.length - 1) {
        setTimeout(() => { typewriter(typed, current);}, 700);
    }
    else setTimeout(() => {  if (current <= aText.length - 1) typewriter(typed, current);}, 50);
}

$("button").click(function() {
    console.log("We are at mode.");
    console.log($(this).html());
    if ($(this).html() == "🌅") {
        $(this).html("🎑");
        $('#theme').attr('href','css/dark.css');
    }
    else {
        $(this).html("🌅");
        $('#theme').attr('href','css/default.css');
    }
})
function toggle () {
    console.log("We got here!");
    onMain = !onMain;
    console.log(onMain);
    if (onMain == false) {
        $('header').addClass("default");
        $('header').removeClass("about");
        $('section').hide();
        typewriter("", 0);
        console.log("We're now showing stuff");
    }
    else {
        $('header').addClass("about");
        $('header').removeClass("default");  
        typewriter("", 0);

        setTimeout(() => { $('section').fadeIn();}, 200);
    }
}