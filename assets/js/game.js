/**
 * Global Synchronized Character GIF Logic
 * Powered by CountAPI (https://countapi.xyz/ - or compatible mirror)
 * Features: Cloud sync, Pulse animation, Sparkles, Daily KST Reset
 */

document.addEventListener('DOMContentLoaded', () => {
    const gifTrigger = document.getElementById('gif-trigger');
    const scoreEl = document.getElementById('gif-score');

    if (!gifTrigger || !scoreEl) return;

    // --- Configuration ---
    const NAMESPACE = 'bogummy-shining-love-v1'; // Distinct namespace

    function getCurrentKSTDate() {
        // Returns YYYY-MM-DD in Korea Standard Time
        return new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Seoul' });
    }

    function getCounterKey() {
        // Key changes every day in KST (e.g., "love-2026-03-02")
        return `love-${getCurrentKSTDate()}`;
    }

    // Using a more CORS-friendly public counter API structure
    // We'll use countapi.xyz style. Note: If countapi.xyz is down, we use api.countapi.xyz
    const API_ROOT = `https://api.countapi.xyz`;
    const KEY = getCounterKey();

    // --- Global Sync Logic ---

    // Fetch initial score from cloud
    async function fetchScore() {
        try {
            // Get initial value (hit it once without incrementing if it doesn't exist)
            // Or use the 'get' endpoint
            const response = await fetch(`${API_ROOT}/get/${NAMESPACE}/${KEY}`);
            if (response.ok) {
                const data = await response.json();
                scoreEl.innerText = data.value || 0;
            } else if (response.status === 404) {
                // Initialize if not found
                scoreEl.innerText = "0";
            }
        } catch (error) {
            console.error('CountAPI Fetch Error:', error);
            if (scoreEl.innerText === "") scoreEl.innerText = "0";
        }
    }

    // Increment score in cloud
    async function incrementScore() {
        try {
            // Optimistic update
            const currentVal = parseInt(scoreEl.innerText) || 0;
            scoreEl.innerText = currentVal + 1;

            // 'hit' endpoint increments by 1
            const response = await fetch(`${API_ROOT}/hit/${NAMESPACE}/${KEY}`);
            if (response.ok) {
                const data = await response.json();
                scoreEl.innerText = data.value;
            }
        } catch (error) {
            console.error('CountAPI Increment Error:', error);
        }
    }

    // Initial load
    fetchScore();

    // --- Interaction ---

    gifTrigger.addEventListener('mousedown', (e) => {
        e.preventDefault();

        // Visual feedback
        gifTrigger.classList.add('pulse-animation');
        setTimeout(() => gifTrigger.classList.remove('pulse-animation'), 400);
        createPopEffect(gifTrigger, e.clientX, e.clientY);

        // Cloud sync
        incrementScore();
    });

    // Refresh score every 12 seconds to see other fans' activity
    setInterval(fetchScore, 12000);
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
