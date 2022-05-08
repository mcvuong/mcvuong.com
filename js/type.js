//onload
var aText = ("Content Gone Technical.").split("");

var onMain = false;
var onMenu = false;

console.log(onMain);
$('header').addClass("default"); 
$('section').hide();
typewriter("", 0);

if ($(window).width() < 399) {
    $('footer').hide();
}

 $(window).resize(function() {
    $('html').removeClass('openMenu');
    if ($(window).width() < 399) {
        $('footer').hide();
     }
     if ($(window).width() > 400) {
        $('footer').show();
     }
 })

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

$("#mode").click(function() {
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

$("#ellipsis").click(function() {
    onMenu = !onMenu;

    if (onMenu == false) {
        $('main').show();
        $('footer').hide();
        $('html').removeClass('openMenu');
    }
    else {
        $('main').hide();
        $('footer').show();
        $('html').addClass('openMenu');
    }
})

function toggle () {
    
    onMenu = false;

    if ($(window).width() < 399) {
        $('footer').hide();
        $('html').removeClass('openMenu');
    }
    
    $('main').show();
    onMain = !onMain;
    console.log(onMain);
    if (onMain == false) {
        $('header').addClass("default");
        $('#mode').removeClass("about");
        $('#mode').addClass("default");
        $('header').removeClass("about");
        $('section').hide();
        typewriter("", 0);
        console.log("We're now showing stuff");
    }
    else {
        $('header').addClass("about");
        $('#mode').addClass("about");
        $('#mode').removeClass("default");
        $('header').removeClass("default");
        if ($(window).width() < 399) {
            $('footer').hide();
            $('html').removeClass('openMenu');
         }  

        setTimeout(() => { $('section').fadeIn();}, 200);
    }
}