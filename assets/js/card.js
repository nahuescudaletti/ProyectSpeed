const cards = document.querySelectorAll('.cardtn');

Array.from(cards).map(card => {
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
})

function startRotate(e) {
    const cardItem = this.querySelector('.card-itemtn');
    const halfHeight = cardItem.offsetHeight / 2;
    const rotateX = `rotateX(${-(e.offsetY - halfHeight) / 8}deg)`; // Ajusta el valor divisor para reducir la rotación vertical
    const rotateY = `rotateY(${(e.offsetX - halfHeight) / 8}deg)`; // Ajusta el valor divisor para reducir la rotación horizontal
    cardItem.style.transform = `${rotateX}${rotateY}`;
}

function stopRotate(){
    const cardItem = this.querySelector('.card-itemtn');
    cardItem.style.transform = `rotateX(0) rotateY(0)`;
}

