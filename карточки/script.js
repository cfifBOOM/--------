document.querySelectorAll('.card-container').forEach(card => {
    const frontSide = card.querySelector('.card-front');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const moveX = ((x / rect.width) - 0.5) * 20;
        const moveY = ((y / rect.height) - 0.5) * 20;
        frontSide.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
    });
    card.addEventListener('mouseleave', () => {
        frontSide.style.backgroundPosition = 'center';
    });
});
