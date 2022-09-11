var cards = document.querySelectorAll(".card");
var switchcircle = document.querySelector(".circle");
var switchlabel = document.querySelector(".switchlabel");
var bool = true;
var card_styles;

switchlabel.addEventListener('click', (e) => {
    e.preventDefault();
    if (bool == true) {
        switchcircle.style.marginLeft = "40px";
        bool = false;
    }
    else if (bool == false) {
        switchcircle.style.marginLeft = "0px";
        bool = true;
    }
    cards.forEach(card => {
        card_styles = card.getBoundingClientRect();
        Transform(card, card_styles.height/2, card_styles.width/2, bool);
    });
});

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        var x = e.offsetX;
        var y = e.offsetY;
        Transform(card, x, y, bool);
    });
});

function Transform(card, x, y, bool) {
    if (bool == true) {
        card_styles = card.getBoundingClientRect();
        card.style.transform = "matrix(1.00," + (- 0.28 / card_styles.height / card_styles.width * (card_styles.height/2 - x) * (card_styles.width/2 - y)) + "," + (- 0.28 / card_styles.height / card_styles.width * (card_styles.height/2 - x) * (card_styles.width - y)) + ",1.00,0,0)"
        card.style.boxShadow = "" + (0.03 * (card_styles.height/2 - x)) + "px " + (0.036036036 * (card_styles.width/2 - y)) + "px 6px 9px rgba(0, 0, 0, 0.35)"
    }
    else if (bool == false) {
        card.style.transform = "matrix(1.00," + (0.28 / card_styles.height / card_styles.width * (card_styles.height/2 - x) * (card_styles.width/2 - y)) + "," + (0.28 / card_styles.height / card_styles.width * (card_styles.height/2 - x) * (card_styles.width - y)) + ",1.00,0,0)"
        card.style.boxShadow = "" + (-0.03 * (card_styles.height/2 - x)) + "px " + (-0.036036036 * (card_styles.width/2 - y)) + "px 6px 9px rgba(0, 0, 0, 0.35)"
    }
}