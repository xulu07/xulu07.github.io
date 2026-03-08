/**
 * Interactive Character GIF Logic
 * For BOGUMMY⭐SHINING site
 * Features: Larger visuals, Bold text, Persistent Daily Score (KST Reset)
 */

document.addEventListener('DOMContentLoaded', () => {
    const gifTrigger = document.getElementById('gif-trigger');
    const scoreEl = document.getElementById('gif-score');

    if (!gifTrigger || !scoreEl) return;

    // --- Persistence & Reset Logic ---

    function getCurrentKSTDate() {
        // Returns YYYY-MM-DD in Korea Standard Time
        return new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Seoul' });
    }

    function initScore() {
        const today = getCurrentKSTDate();
        const lastResetDate = localStorage.getItem('love_last_reset_date');
        let currentScore = parseInt(localStorage.getItem('love_count')) || 0;

        // Reset if it's a new day in Korea
        if (lastResetDate !== today) {
            currentScore = 0;
            localStorage.setItem('love_count', '0');
            localStorage.setItem('love_last_reset_date', today);
        }

        scoreEl.innerText = currentScore;
        return currentScore;
    }

    let score = initScore();

    // --- Interaction ---

    gifTrigger.addEventListener('mousedown', (e) => {
        // Prevent accidental drag
        e.preventDefault();

        // Check for reset again in case the user kept the tab open across midnight
        const today = getCurrentKSTDate();
        if (localStorage.getItem('love_last_reset_date') !== today) {
            score = 0;
            localStorage.setItem('love_last_reset_date', today);
        }

        // Increase score
        score++;
        scoreEl.innerText = score;
        localStorage.setItem('love_count', score.toString());

        // Visual feedback: pulse animation
        gifTrigger.classList.add('pulse-animation');
        setTimeout(() => gifTrigger.classList.remove('pulse-animation'), 400);

        // Flash effect (sparkles stay, as they are non-textual)
        createPopEffect(gifTrigger, e.clientX, e.clientY);
    });

    // --- Custom Cursor Label ---
    const cursorLabel = document.createElement('div');
    cursorLabel.className = 'cursor-label';
    cursorLabel.innerText = '❤클릭❤';
    document.body.appendChild(cursorLabel);

    gifTrigger.addEventListener('mousemove', (e) => {
        cursorLabel.style.left = `${e.clientX + 10}px`;
        cursorLabel.style.top = `${e.clientY + 10}px`;
    });

    gifTrigger.addEventListener('mouseenter', () => {
        cursorLabel.style.display = 'block';
    });

    gifTrigger.addEventListener('mouseleave', () => {
        cursorLabel.style.display = 'none';
    });
});

function createPopEffect(container, clientX, clientY) {
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    for (let i = 0; i < 6; i++) {
        const p = document.createElement('div');
        p.innerText = '✨';
        p.style.position = 'absolute';
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;
        p.style.pointerEvents = 'none';
        p.style.fontSize = '16px';
        p.style.transition = 'all 0.5s ease-out';
        p.style.zIndex = '15';

        container.appendChild(p);

        const angle = Math.random() * Math.PI * 2;
        const dist = 50 + Math.random() * 50;

        setTimeout(() => {
            p.style.transform = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`;
            p.style.opacity = '0';
        }, 10);

        setTimeout(() => p.remove(), 600);
    }
}
