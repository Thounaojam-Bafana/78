var pics = [
            "man.png",
            "woman.png",
            "girl.png",
           ];

var names = [
             "Vandame",
             "Lucy",
             "Anjali",
            ];

var x = 0;

function Change()
{
    document.getElementById("family").innerHTML = pics[x];
    document.getElementById("name").innerHTML = names[x];
    x++;
}
