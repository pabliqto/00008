var nr = Math.floor(Math.random()*5)+1;		
var timer1 = 0;
var timer2 = 0;

function setslide(slidenr)
{
    clearTimeout(timer1);
    clearTimeout(timer2);
    nr = slidenr - 1;
    hide();
    setTimeout("changeslide()", 500);
    
}

function hide()
{
    $("#slider").fadeOut(500);
    $("#description").fadeOut(500);
    $("#description").fadeIn(400);
}

function changeslide()
{
    nr++; 
    if (nr>5) nr=1;
    var file = "<img src=\"zd" + nr + ".jpg\" height = 737/>";
    document.getElementById("slider").innerHTML = file;
    $("#slider").fadeIn(500);
    timer1 = setTimeout("changeslide()", 5000);
    timer2 = setTimeout("hide()", 4500);

}
