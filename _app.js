const trail = document.querySelector('.trail');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Move the trail to the mouse position
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    
    // Create a clone to leave a fading trail
    const clone = trail.cloneNode();
    document.body.appendChild(clone);

    // Gradually fade out and remove the clone
    setTimeout(() => {
        clone.style.transition = 'opacity 0.5s, transform 0.5s';
        clone.style.opacity = '0';
        clone.style.transform = 'scale(0.5)';
    }, 10);
    
    // Remove the element after fading out
    setTimeout(() => {
        clone.remove();
    }, 500);
});
