document.addEventListener('DOMContentLoaded', () => {
    // ---- Gold Miner Style Claw Machine Logic ----
    const dropBtn = document.getElementById('claw-drop-btn');
    const resetBtn = document.getElementById('claw-reset-btn');
    const clawArmContainer = document.getElementById('claw-arm-container');
    const prizesContainer = document.getElementById('prizes-container');
    const modal = document.getElementById('claw-prize-modal');
    const modalImg = document.getElementById('prize-image');
    const modalVideo = document.getElementById('prize-video');
    const modalTitle = document.getElementById('prize-title');
    const modalSubtitle = document.getElementById('prize-subtitle');
    const closeModalBtn = document.getElementById('close-prize-btn');
    const clawGlass = document.getElementById('claw-glass');

    if (!dropBtn || !clawArmContainer || !prizesContainer || !modal) return;

    // List of prize images (Park Bo-gum photos)
    // List of prize items (Park Bo-gum photos and videos)
    // 电视剧集：𝟐𝟎𝟏𝟐《英雄》姜东雨、𝟐𝟎𝟏𝟐《新娘面具》敏奎、𝟐𝟎𝟏𝟐《静止照片》金玄秀、𝟐𝟎𝟏𝟑《完美妈妈》高英俊、𝟐𝟎𝟏𝟒《真是好时节》姜东硕、𝟐𝟎𝟏𝟒《明日如歌》李允厚、𝟐𝟎𝟏𝟓《制作人》客串、𝟐𝟎𝟏𝟓《记得你》郑善浩 李民、𝟐𝟎𝟏𝟓《请回答1988》崔泽、𝟐𝟎𝟏𝟔《云画的月光》李韺、𝟐𝟎𝟏𝟖《男朋友》金振赫、𝟐𝟎𝟐𝟎《梨泰院class》客串、𝟐𝟎𝟐𝟎《青春记录》史彗峻、𝟐𝟎𝟐𝟓《苦尽柑来遇见你》梁宽植、𝟐𝟎𝟐𝟓《健将联盟 / Good Boy》尹东柱
    // 电影：𝟐𝟎𝟏𝟏《盲证》金东贤（出道作品）、𝟐𝟎𝟏𝟐《车警官》车哲秀、𝟐𝟎𝟏𝟒《走到尽头》李真浩、𝟐𝟎𝟏𝟒《鸣梁海战》裴水凤、𝟐𝟎𝟏𝟓《一闪一闪 扑通扑通》（公益微电影）俊宇、𝟐𝟎𝟏𝟓《中国城》朴锡贤、𝟐𝟎𝟐𝟏《徐福》徐福、𝟐𝟎𝟐𝟒《WONDERLAND》朴泰柱
    const prizeItems = [
        // 电视剧
        { name: '강동우', show: '𝟐𝟎𝟏𝟐 《히어로(HERO)》', type: 'video', versions: [{ thumb: 'assets/img/claw machine/01-jiangdongyu.jpg', full: 'assets/img/claw machine/01-jiangdongyu.mp4' }] },
        { name: '민규', show: '𝟐𝟎𝟏𝟐 《각시탈》', type: 'video', versions: [{ thumb: 'assets/img/claw machine/02-minkui.jpg', full: 'assets/img/claw machine/02-minkui.mp4' }] },
        { name: '김현수', show: '𝟐𝟎𝟏𝟐 《스페셜 - 스틸사진》', type: 'video', versions: [{ thumb: 'assets/img/claw machine/03-xuanxiu.jpg', full: 'assets/img/claw machine/03-xuanxiu.mp4' }] },
        // 未核对
        { name: '고영준', show: '𝟐𝟎𝟏𝟑 《원더풀 마마(Wonderful Mama)》', type: 'image', versions: [{ thumb: 'assets/img/bg_logo.jpg', full: 'assets/img/bg_logo.jpg' }] },
        { name: '강동석', show: '𝟐𝟎𝟏𝟒 《참 좋은 시절》', type: 'image', versions: [{ thumb: 'assets/img/bg_logo.jpg', full: 'assets/img/bg_logo.jpg' }] },
        { name: '이윤후', show: '𝟐𝟎𝟏𝟒 《내일도 칸타빌레》', type: 'image', versions: [{ thumb: 'assets/img/bg_logo.jpg', full: 'assets/img/bg_logo.jpg' }] },
        { name: '박보검', show: '𝟐𝟎𝟏𝟓 《프로듀사(The Producers)》', type: 'image', versions: [{ thumb: 'assets/img/bg_logo.jpg', full: 'assets/img/bg_logo.jpg' }] },// 客串
        { name: '이민', show: '𝟐𝟎𝟏𝟓 《너를 기억해》', type: 'image', versions: [{ thumb: 'assets/img/bg_logo.jpg', full: 'assets/img/bg_logo.jpg' }] },
        {
            name: '최택',
            show: '𝟐𝟎𝟏𝟓 《응답하라 1988》',
            type: 'video',
            versions: [
                { thumb: 'assets/img/claw machine/aze1.jpg', full: 'assets/img/claw machine/aze1.mp4' },
                { thumb: 'assets/img/claw machine/aze2.jpg', full: 'assets/img/claw machine/aze2.mp4' }
            ]
        },
        { name: '이영', show: '𝟐𝟎𝟏𝟔 《구르미 그린 달빛》', type: 'video', versions: [{ thumb: 'assets/img/claw machine/shizi.jpg', full: 'assets/img/claw machine/shizi.mp4' }] },
        { name: '김진혁', show: '𝟐𝟎𝟏𝟖 《남자친구》', type: 'video', versions: [{ thumb: 'assets/img/claw machine/zhenhe.jpg', full: 'assets/img/claw machine/zhenhe.mp4' }] },
        // 𝟐𝟎𝟐𝟎《梨泰院class》客串
        { name: '사혜준', show: '𝟐𝟎𝟐𝟎 《청춘기록》', type: 'video', versions: [{ thumb: 'assets/img/claw machine/huijun.jpg', full: 'assets/img/claw machine/huijun.mp4' }] },
        { name: '양관식', show: '𝟐𝟎𝟐𝟓 《폭싹 속았수다》', type: 'video', versions: [{ thumb: 'assets/img/claw machine/kuanzhi.jpg', full: 'assets/img/claw machine/kuanzhi.mp4' }] },
        { name: '윤동주', show: '𝟐𝟎𝟐𝟓 《Good Boy》', type: 'video', versions: [{ thumb: 'assets/img/claw machine/dongzhu.png', full: 'assets/img/claw machine/dongzhu.mp4' }] },
        // 电影
        { name: '김동현', show: '𝟐𝟎𝟏𝟏 《블라인드(Blind)》', type: 'image', versions: [{ thumb: 'assets/img/bg_logo.jpg', full: 'assets/img/bg_logo.jpg' }] },
        { name: '차철수', show: '𝟐𝟎𝟏𝟐 《차형사(Runway Cop)》', type: 'image', versions: [{ thumb: 'assets/img/bg_logo.jpg', full: 'assets/img/bg_logo.jpg' }] },
        { name: '이진호', show: '𝟐𝟎𝟏𝟒 《끝까지 간다(A Hard Day)》', type: 'image', versions: [{ thumb: 'assets/img/bg_logo.jpg', full: 'assets/img/bg_logo.jpg' }] },
        { name: '배수봉', show: '𝟐𝟎𝟏𝟒 《명량》', type: 'image', versions: [{ thumb: 'assets/img/bg_logo.jpg', full: 'assets/img/bg_logo.jpg' }] },
        { name: '준우', show: '𝟐𝟎𝟏𝟓 《반짝반짝 두근두근》', type: 'image', versions: [{ thumb: 'assets/img/bg_logo.jpg', full: 'assets/img/bg_logo.jpg' }] },
        { name: '박석현', show: '𝟐𝟎𝟏𝟓 《차이나타운》', type: 'image', versions: [{ thumb: 'assets/img/bg_logo.jpg', full: 'assets/img/bg_logo.jpg' }] },
        { name: '서복', show: '𝟐𝟎𝟐𝟏 《서복》', type: 'image', versions: [{ thumb: 'assets/img/bg_logo.jpg', full: 'assets/img/bg_logo.jpg' }] },
        { name: '박태주', show: '𝟐𝟎𝟐𝟒 《WONDERLAND》', type: 'video', versions: [{ thumb: 'assets/img/claw machine/taizhu.jpg', full: 'assets/img/claw machine/taizhu.mp4' }] }
    ];

    let isPlaying = false;
    let prizeElements = [];

    prizesContainer.style.justifyContent = 'flex-start';

    // Initialize prizes in the machine
    function initPrizes() {
        prizesContainer.innerHTML = '';
        prizeElements = [];

        // For each show, pick one architectural version randomly
        const selectedPrizes = prizeItems.map(item => {
            const randomVer = item.versions[Math.floor(Math.random() * item.versions.length)];
            return {
                ...item,
                thumb: randomVer.thumb,
                full: randomVer.full
            };
        });

        // Shuffle the prize items so the rendering order is random
        const shuffledItems = selectedPrizes.sort(() => 0.5 - Math.random());
        const numBalls = shuffledItems.length;

        // Configuration for gapless alternating row stacking (brick pattern)
        // Providing 30 fixed slots for a denser, fuller look with 50px balls
        const exactPositions = [
            // Row 1 (Bottom)
            { x: 10, y: 0 }, { x: 26, y: 0 }, { x: 42, y: 0 }, { x: 58, y: 0 }, { x: 74, y: 0 }, { x: 90, y: 0 },
            // Row 2
            { x: 18, y: 40 }, { x: 34, y: 40 }, { x: 50, y: 40 }, { x: 66, y: 40 }, { x: 82, y: 40 },
            // Row 3
            { x: 10, y: 80 }, { x: 26, y: 80 }, { x: 42, y: 80 }, { x: 58, y: 80 }, { x: 74, y: 80 }, { x: 90, y: 80 },
            // Row 4
            { x: 18, y: 120 }, { x: 34, y: 120 }, { x: 50, y: 120 }, { x: 66, y: 120 }, { x: 82, y: 120 },
            // Row 5
            { x: 10, y: 160 }, { x: 26, y: 160 }, { x: 42, y: 160 }, { x: 58, y: 160 }, { x: 74, y: 160 }, { x: 90, y: 160 }
        ];

        for (let i = 0; i < numBalls; i++) {
            const ball = document.createElement('div');
            ball.className = 'prize-ball';
            const item = shuffledItems[i];

            // Use exact grid position, cap at the number of available slots
            const posIndex = Math.min(i, exactPositions.length - 1);
            const posConfig = exactPositions[posIndex];

            // Use exact grid position
            const rndXPercent = posConfig.x;
            const settledY = posConfig.y;

            // Remove rotation for a neat appearance
            const rndRotation = 0;

            ball.innerHTML = `<img src="${item.thumb}" alt="Prize" data-fullimg="${item.full}" data-type="${item.type}" data-name="${item.name || ''}" data-show="${item.show || ''}">`;
            ball.style.position = 'absolute';
            ball.style.left = `${rndXPercent}%`;
            ball.style.bottom = `${settledY}px`;
            ball.style.transform = `translateX(-50%) rotate(${rndRotation}deg)`;

            // Higher balls get higher Z-index
            ball.style.zIndex = Math.floor(settledY);

            ball.dataset.pos = rndXPercent;
            ball.dataset.ypos = settledY;

            prizesContainer.appendChild(ball);
            prizeElements.push(ball);
        }

        clawArmContainer.classList.remove('closed');
        clawArmContainer.classList.remove('dropping'); // Resume swinging
    }

    // Drop Claw Logic
    function dropClaw() {
        if (isPlaying) return;
        isPlaying = true;

        // 1. Pause the swinging animation
        clawArmContainer.classList.add('dropping');

        // 2. Determine exact current position
        const glassRect = clawGlass.getBoundingClientRect();
        const clawRect = clawArmContainer.getBoundingClientRect();
        // Calculate the center of the claw relative to the glass container
        // Calculate center relative to GLASS (full width)
        const currentPx = (clawRect.left + clawRect.width / 2) - glassRect.left;
        const currentPercent = (currentPx / glassRect.width) * 100;

        // CONVERSION: Map the claw's 0-100% (total width) to the Interior's 0-100% (68.6% width starting at 15.7%)
        const interiorPercent = (currentPercent - 15.7) / 0.686;

        // Fix the left position to the exact paused position
        clawArmContainer.style.left = `${currentPercent}%`;

        // Update button UI
        const originalBtnText = dropBtn.innerHTML;
        dropBtn.innerHTML = '<i class="spinner-border spinner-border-sm"></i>';
        dropBtn.disabled = true;

        clawArmContainer.classList.remove('closed');

        // 3. Calculate hit logic using the converted INTERIOR coordinate
        let grabbedPrize = null;
        let highestY = -1;

        for (const prize of prizeElements) {
            const prizePos = parseFloat(prize.dataset.pos);
            const prizeY = parseFloat(prize.dataset.ypos);

            // Using ±6% detection for better precision in the interior box
            if (Math.abs(interiorPercent - prizePos) <= 6 && prize.style.opacity !== '0') {
                if (prizeY > highestY) {
                    highestY = prizeY;
                    grabbedPrize = prize;
                }
            }
        }

        // Step 4: Move claw down (Y)
        // Dynamically calculate the floor depth based on current glass height
        // Subtract claw height so it doesn't crash through the bottom
        const clawBaseHeight = clawArmContainer.offsetHeight;
        const clawInterior = document.getElementById('claw-interior');
        const interiorHeight = clawInterior.offsetHeight;
        // floorDepth is the max distance the claw base can travel down inside the interior
        const floorDepth = interiorHeight - 60; // 60px is clawArmContainer height

        const dropDepth = grabbedPrize ? floorDepth - highestY : floorDepth;

        clawArmContainer.style.transition = 'top 1s ease-in-out';
        clawArmContainer.style.top = `${dropDepth}px`;

        // Wait for vertical movement (1s)
        setTimeout(() => {
            // Step 5: Close the claw
            clawArmContainer.classList.add('closed');

            // Wait for claw to close (0.3s)
            setTimeout(() => {
                let grabbedBall = null;

                // Step 6: "Grab" the prize if hit
                if (grabbedPrize) {
                    const grabImgSrc = grabbedPrize.querySelector('img').getAttribute('src'); // Use the thumbnail for the grabbing animation
                    grabbedPrize.style.opacity = '0'; // Hide the original

                    grabbedBall = document.createElement('div');
                    grabbedBall.className = 'prize-ball grabbed';

                    // Center the ball relative to the CLAW CONTAINER (it is now a child)
                    grabbedBall.style.left = '50%';
                    grabbedBall.style.transform = `translateX(-50%)`;
                    grabbedBall.style.top = '25px'; // Tighten attachment point to eliminate the gap
                    grabbedBall.innerHTML = `<img src="${grabImgSrc}">`;

                    // Append ball to the CLAW itself so it moves and stays centered perfectly
                    clawArmContainer.appendChild(grabbedBall);

                    void grabbedBall.offsetWidth; // Reflow
                }

                // Step 7: Move claw UP (ball follows automatically as a child)
                clawArmContainer.style.top = '0px';

                // Wait for UP movement (1.5s)
                setTimeout(() => {
                    if (grabbedBall) {
                        // Step 8: Show Result Modal for success
                        const grabbedImg = grabbedPrize.querySelector('img');
                        const grabbedType = grabbedImg.getAttribute('data-type');
                        const grabbedFull = grabbedImg.getAttribute('data-fullimg');
                        const grabbedName = grabbedImg.getAttribute('data-name');
                        const grabbedShow = grabbedImg.getAttribute('data-show');

                        // Update title and subtitle
                        if (grabbedName && grabbedShow && modalTitle && modalSubtitle) {
                            modalTitle.innerHTML = `안녕하세요! <strong>${grabbedName}</strong>입니다.`;
                            modalTitle.style.color = '#000'; // Override default pink
                            modalTitle.style.fontFamily = "'Nanum Gothic', sans-serif"; // Override default cursive
                            modalTitle.style.fontSize = "1rem";
                            modalSubtitle.innerText = grabbedShow;
                            modalSubtitle.style.display = 'block';
                        }

                        if (grabbedType === 'video') {
                            modalImg.style.display = 'none';
                            modalVideo.src = grabbedFull;
                            modalVideo.style.display = 'block';
                            modalVideo.play().catch(e => console.log('Auto-play prevented', e));
                        } else {
                            modalVideo.style.display = 'none';
                            modalImg.src = grabbedFull;
                            modalImg.style.display = 'block';
                        }

                        modal.style.display = 'flex';
                        setTimeout(() => modal.classList.add('show'), 50);
                        grabbedBall.remove();
                    } else {
                        // Missed! Just reset
                        clawArmContainer.classList.remove('closed');
                        // Reset inline left so animation takes over again
                        clawArmContainer.style.left = '';
                        clawArmContainer.classList.remove('dropping');

                        dropBtn.innerHTML = originalBtnText;
                        dropBtn.disabled = false;
                        isPlaying = false;
                    }

                    if (grabbedBall) {
                        // We do not re-enable until modal closes
                        clawArmContainer.classList.remove('closed');
                        // Remove the item completely from the trackable DOM list so the UI continues correctly on the exact same board state!
                        clawArmContainer.style.left = '';
                        clawArmContainer.classList.remove('dropping'); // Resume swing!
                        dropBtn.innerHTML = originalBtnText;

                        // Identify exact item matched and hide the original from tracker so we don't grab it again
                        grabbedPrize.remove();
                        prizeElements = prizeElements.filter(el => el !== grabbedPrize);

                        // Safety reset to ensure the game can be played again
                        dropBtn.disabled = false;
                        isPlaying = true; // explicitly keeping it true while modal is open to prevent background grabbing
                    }

                }, 1000); // Wait for UP movement

            }, 400); // Wait for claw to close

        }, 1000); // Wait for DOWN movement
    }

    dropBtn.addEventListener('click', dropClaw);

    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            if (modalVideo) {
                modalVideo.pause();
                modalVideo.currentTime = 0;
            }
            isPlaying = false;
            dropBtn.disabled = false;
        }, 300); // CSS transition time
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalBtn.click();
        }
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (isPlaying) return; // Prevent reset mid-animation
            initPrizes();
        });
    }

    initPrizes();
});
