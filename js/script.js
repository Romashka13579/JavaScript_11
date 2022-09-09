var cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        var x = e.offsetX;
        var y = e.offsetY;
        console.log(x, y);
        card.style.transform = "matrix(1.00,"+(0.2/400 * (200 - x))+","+(0.2/333 * (166.5 - y))+",1.00,0,0)"
    });
});