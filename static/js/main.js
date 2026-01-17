const track = document.querySelector("#marquee");
const cards = Array.from(track.children);

cards.forEach(card => {
    track.appendChild(card.cloneNode(true));
});

const totalWidth = track.scrollWidth / 2;

const tween = gsap.to(track, {
    x: -totalWidth,
    duration: 25,
    ease: "none",
    repeat: -1
});

track.addEventListener("mouseenter", () => tween.pause());
track.addEventListener("mouseleave", () => tween.resume());

function openModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.style.display = 'flex';
    setTimeout(() => m.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.classList.remove('active');
    setTimeout(() => {
        m.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 400);
}

window.onclick = function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal(e.target.id);
    }
};