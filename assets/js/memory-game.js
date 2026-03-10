document.addEventListener('DOMContentLoaded', () => {
    // ---- Memory Game Logic ----
    const board = document.getElementById('memory-board');
    const movesDisplay = document.getElementById('memory-moves');
    const restartBtn = document.getElementById('memory-restart-btn');

    // Make sure elements exist before running game logic
    if (!board || !movesDisplay || !restartBtn) return;

    // List of 8 image pairs for a 4x4 grid. We use some images from your assets folder.
    const images = [
        'assets/img/memory game/bogummy1.jpg',
        'assets/img/memory game/bogummy2.jpg',
        'assets/img/memory game/bogummy3.jpg',
        'assets/img/memory game/bogummy4.jpg',
        'assets/img/memory game/bogummy5.png',
        'assets/img/taek.jpg',
        'assets/img/photo2.jpg',
        'assets/img/photo3.jpg'
    ];

    let cards = [];
    let flippedCards = [];
    let matchedPairs = 0;
    let moves = 0;
    let lockBoard = false;

    // Initialize Game
    function initGame() {
        cards = [...images, ...images]; // Create pairs
        cards.sort(() => Math.random() - 0.5); // Shuffle

        board.innerHTML = '';
        flippedCards = [];
        matchedPairs = 0;
        moves = 0;
        movesDisplay.textContent = moves;
        lockBoard = false;

        cards.forEach((imgSrc, index) => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.dataset.image = imgSrc;

            card.innerHTML = `
                <div class="memory-card-inner">
                    <div class="memory-card-front"></div>
                    <div class="memory-card-back">
                        <img src="${imgSrc}" alt="Memory Card">
                    </div>
                </div>
            `;

            card.addEventListener('click', flipCard);
            board.appendChild(card);
        });
    }

    // Flip Card Logic
    function flipCard() {
        if (lockBoard) return;
        if (this === flippedCards[0]) return; // Prevent double click on same card
        if (this.classList.contains('matched')) return;

        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            moves++;
            movesDisplay.textContent = moves;
            checkForMatch();
        }
    }

    // Check for match
    function checkForMatch() {
        const isMatch = flippedCards[0].dataset.image === flippedCards[1].dataset.image;

        if (isMatch) {
            disableCards();
        } else {
            unflipCards();
        }
    }

    // Cards Match
    function disableCards() {
        flippedCards[0].classList.add('matched');
        flippedCards[1].classList.add('matched');

        // Remove click listeners
        flippedCards[0].removeEventListener('click', flipCard);
        flippedCards[1].removeEventListener('click', flipCard);

        matchedPairs++;
        flippedCards = [];

        if (matchedPairs === images.length) {
            setTimeout(() => {
                alert(`축하합니다! ${moves}번 만에 모두 맞추셨습니다! 🎉`);
            }, 500);
        }
    }

    // Cards Don't Match
    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            flippedCards[0].classList.remove('flipped');
            flippedCards[1].classList.remove('flipped');
            flippedCards = [];
            lockBoard = false;
        }, 1000); // 1 second delay before flipping back
    }

    restartBtn.addEventListener('click', initGame);

    // Start game on load
    initGame();
});
