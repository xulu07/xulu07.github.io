document.addEventListener('DOMContentLoaded', () => {
    // ---- Quotes Flip Book Logic ----
    const bookScene = document.getElementById('quote-book');
    const prevQuoteBtn = document.getElementById('prev-quote-btn');
    const nextQuoteBtn = document.getElementById('next-quote-btn');
    const quoteCounter = document.getElementById('quote-counter');

    if (!bookScene || !prevQuoteBtn || !nextQuoteBtn || !quoteCounter) return;

    // Array of Quotes (Page 0 is the cover)
    const quotes = [
        "Cover Page", // Handled separately
        "당신의 삶에 언제나 감사한 일들이 가득하길 바랍니다.",
        "늘 감사하다고 말하니까 감사한 일들이 생기더라고요.",
        "오늘 하루도 수고 많았어요. 좋은 꿈 꿔요.",
        "조금 늦어도 괜찮아요. 포기하지 않으면 도착할 수 있으니까요.",
        "매일매일이 선물 같은 하루가 되길 바라요.",
        "우리 평생 친구로 함께 건강하게 오래오래 만나요.",
        "팬 여러분의 사랑 덕분에 제가 이 자리에 있습니다."
    ];

    let currentPage = 0;
    const totalPages = quotes.length;
    let pageElements = [];

    // Initialize Book
    function initBook() {
        bookScene.innerHTML = '';
        pageElements = [];

        quotes.forEach((text, index) => {
            const page = document.createElement('div');
            page.className = 'book-page';

            // Set z-index so the first page is on top
            page.style.zIndex = totalPages - index;

            if (index === 0) {
                // Cover Page
                page.classList.add('cover-page');
                page.innerHTML = `
                    <div class="quote-content">
                        <img src="assets/img/bogummy.jpg" alt="Park Bo-gum" class="cover-image">
                        <h4 class="cover-title">보검어록<br>(宝剑语录)</h4>
                    </div>
                `;
            } else {
                // Content Pages
                page.classList.add('content-page'); // Triggers watermark
                page.innerHTML = `
                    <div class="quote-content">
                        <p class="quote-text">${text}</p>
                    </div>
                `;
            }

            // Click on page to turn it
            page.addEventListener('click', () => {
                if (index === currentPage && currentPage < totalPages - 1) {
                    turnPage('next');
                } else if (index < currentPage) {
                    turnPage('prev');
                }
            });

            bookScene.appendChild(page);
            pageElements.push(page);
        });

        updateUI();
    }

    // Turn Page Function
    function turnPage(direction) {
        if (direction === 'next' && currentPage < totalPages - 1) {
            // Flip the current page over to the left
            pageElements[currentPage].classList.add('flipped');
            currentPage++;
        } else if (direction === 'prev' && currentPage > 0) {
            // Un-flip the previous page back to the right
            currentPage--;
            pageElements[currentPage].classList.remove('flipped');
        }
        updateUI();
    }

    // Update Counter UI
    function updateUI() {
        // Update Z-indexes dynamically to prevent issues during fast flipping
        pageElements.forEach((page, index) => {
            if (index < currentPage) {
                // Pages that have been turned over (on the left)
                page.style.zIndex = index;
            } else {
                // Pages still waiting to be turned (on the right)
                page.style.zIndex = totalPages - index;
            }
        });

        if (currentPage === 0) {
            quoteCounter.textContent = 'Cover';
        } else {
            quoteCounter.textContent = `${currentPage} / ${totalPages - 1}`;
        }
    }

    // Reset to Cover Function
    function resetToCover() {
        currentPage = 0;
        pageElements.forEach(page => {
            page.classList.remove('flipped');
        });
        updateUI();
    }

    // Event Listeners for Buttons
    const resetQuoteBtn = document.getElementById('reset-quote-btn');
    nextQuoteBtn.addEventListener('click', () => turnPage('next'));
    prevQuoteBtn.addEventListener('click', () => turnPage('prev'));
    if (resetQuoteBtn) {
        resetQuoteBtn.addEventListener('click', () => resetToCover());
    }

    // Init
    initBook();
});
