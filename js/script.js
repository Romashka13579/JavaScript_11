var cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        var x = e.offsetX;
        var y = e.offsetY;
        console.log(x, y);
        card.style.transform = "matrix(1.00,"+(0 + 0.2/y)+","+(0 + 0.2/x)+",1.00,0,0)"
    });
});