var cards = document.querySelectorAll(".card");
var switchcircle = document.querySelector(".circle");
var switchlabel = document.querySelector(".switchlabel");
var bool = true;

switchlabel.addEventListener('click', (e) => {
    e.preventDefault();
    if(bool == true){
        switchcircle.style.marginLeft = "40px";
        bool = false;
    }
    else if(bool == false){
        switchcircle.style.marginLeft = "0px";
        bool = true;
    }
    cards.forEach(card => {
        Transform(card, 200, 166.5, bool);
    });
});

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        var x = e.offsetX;
        var y = e.offsetY;
        console.log(x, y);
        Transform(card, x, y, bool);
    });
});

function Transform(card, x, y, bool){
    if(bool == true){
        card.style.transform = "matrix(1.00,"+(- 0.28/400/333 * (200 - x) * (166.5 - y))+","+(- 0.28/400/333 * (200 - x) * (166.5 - y))+",1.00,0,0)"
    }
    else if(bool == false){
        card.style.transform = "matrix(1.00,"+(0.28/400/333 * (200 - x) * (166.5 - y))+","+(0.28/400/333 * (200 - x) * (166.5 - y))+",1.00,0,0)"
    }
}