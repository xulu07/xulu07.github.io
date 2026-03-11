// 1. 理由数据（建议继续扩展到100）
const reasonsList = [
    {
        num: 1,
        title: "택이에게 영혼을 불어넣어 주신 것",
        subtitle: "You breathed life into Taek | 你给阿泽赋予了灵魂",
        content: [
            "❤ 저는 택이를 통해 보검 씨를 알게 되었어요.",
            "❤ &lt;응답하라 1988&gt; 은 제 인생 드라마이고, 택이는 제가 가장 좋아하는 캐릭터예요.",
            "❤ 택이 덕분에 우리가 이렇게 만나게 되었고, 보검 씨를 점점 더 좋아하게 되었어요."
        ],
        img: "assets/img/taek.jpg"
    },
    {
        num: 2,
        title: "\"감사하다\"고 말하는 진심",
        subtitle: "Always thankful | 永远会说感谢的话",
        content: [
            "❤ 몇 년 전에 보검 씨께서 하신 말씀, \"늘 감사하다고 말하니까 감사한 일들이 생기더라고요\"를 기억하고 있습니다.",
            "❤ 보검 씨 덕분에 저도 감사하는 마음으로 살고 있고, 그래서 제 인생은 정말 행복합니다. 정말 감사합니다!"
        ],
        img: ""
    },
    {
        num: 3,
        title: "비주얼이 정말 미쳤습니다!",
        subtitle: "Insane visuals | 帅疯了",
        content: [
            "❤ 진짜 너무 잘생겼어요! 얼굴이 천재예요~🥰🤩😝"
        ],
        img: ""
    },
    {
        num: 4,
        title: "세계 평화를 꿈꾸는 마음",
        subtitle: "Wishing for world peace | 梦想是世界和平",
        content: [
            "❤ 요즘 세계에 전쟁이 끊이지 않네요.",
            "❤ 우리의 힘은 미약하지만, 그래도 세계 평화를 간절히 기원합니다.🙏🙏🙏🩵🩵🩵"
        ],
        img: ""
    },
    {
        num: 5,
        title: "대단한 연기력",
        subtitle: "Excellent acting skills | 了不起的演技",
        content: [
            "❤ 배역마다 색다른 매력을 보여주셔서 정말 살아있는 사람처럼 느껴져요.🩵",
            "❤ 끊임없이 성장하는 연기력에 매번 감탄합니다.👍🏻",
            "❤ 더 다양한 모습으로 만날 보검 씨를 기대할게요!🥰"
        ],
        img: "assets/img/kuanzhi3.jpg"
    },
    {
        num: 6,
        title: "팬들의 이름을 소중히 기억하시는 마음",
        subtitle: "Cherishing fans' names | 会认真记住粉丝名字",
        content: [
            "❤ 팬분들뿐만 아니라 정말 많은 이름을 항상 기억해주시죠.",
            "❤ 모든 사람을 존중해주셔서 감사합니다.🩵",
            "❤ 팬사인회 때 말했던 것처럼, 저희를 항상 기억해 주셔서 정말 감사합니다.🩵"
        ],
        img: ""
    },
    {
        num: 7,
        title: "세상을 밝게 만드는 미소를 가지신 것",
        subtitle: "Possessing a world-brightening smile | 有让世界明亮起来的笑容",
        content: [
            "❤ 보검 씨의 미소는 꽃처럼 아름다워요.🌸",
            "❤ 보검 씨의 미소는 모든 것을 치유해 줍니다.🩵",
            "❤ 언제든 보검 씨의 미소를 보면, 모든 우울한 기분이 사르르 녹아내려요.🥰"
        ],
        img: ""
    },
    {
        num: 8,
        title: "피아노 치는 사람에게 항복할 수밖에",
        subtitle: "I'm a sucker for a piano player | 无法抵抗会弹钢琴的人",
        content: [
            "❤ 피아노 치는 모습이 눈이 부실 정도로 멋있어요. ✨",
            "❤ 단순히 ‘칠 줄 아는’ 정도가 아니라, 전문 연주자의 실력이에요.👍🏻"
        ],
        img: ""
    },
    {
        num: 9,
        title: "사진으로 일상을 기록하는 것을 좋아함",
        subtitle: "Loving to record daily life with photos | 爱拍照记录生活",
        content: [
            "❤ 사진 속에서 삶을 사랑하는 마음이 느껴져요. 🌻",
            "❤ 보검 씨 덕분에 저도 소중한 순간들을 사진으로 기록하기 시작했습니다.📸",
            "❤ 앞으로도 평생친구들에게 소중한 순간이 담긴 여행 '엽서'를 자주 보내주셨으면 좋겠어요.🥰"
        ],
        img: "assets/img/photo2.jpg"
    },
    {
        num: 10,
        title: "팬을 평생친구로 생각하는 마음",
        subtitle: "Treating fans as lifelong friends | 把粉丝看作一生朋友",
        content: [
            "❤ 그 따뜻한 약속 덕분에 우리가 함께 걷는 길이 더 행복해졌어요. 🌸",
            "❤ 저도 ‘평생친구’로서 언제나 응원할게요. 🩵"
        ],
        img: ""
    },
    {
        num: 11,
        title: "세상에서 가장 완벽하고 아름다운 코를 가졌음",
        subtitle: "Having the most perfect nose in the world | 拥有这个世界上最好看的鼻子",
        content: [
            "❤ 보검 씨 코에 꼭 보험 들어야 할 것 같아요. 🤭",
            "❤ 아니, 사실 머리부터 발끝까지 전신 보험이 시급해요! ㅋㅋㅋ"
        ],
        img: ""
    },
    {
        num: 12,
        title: "매일 일기 쓰는 습관이 있음",
        subtitle: "Keeping a daily journal | 坚持每天写日记",
        content: [
            "❤ 매일 일기를 쓰거나 어떤 일을 꾸준히 하는 건 정말 어려운 일이에요.",
            "❤ 보검 씨 덕분에 저도 좋은 습관들이 하나씩 생겼어요.예를 들면 운동이랑 한국어 공부요! 💪🏻",
            "❤ 정말 고마워요！🩵🩵🩵"
        ],
        img: ""
    },
    {
        num: 13,
        title: "노래를 정말 잘 부름",
        subtitle: "Great at singing | 唱歌好听",
        content: [
            "❤ 피아노를 치면서 노래를 부르는 모습이 세상에서 제일 멋있어요.🎹💖🎤"
        ],
        img: ""
    },
    {
        num: 14,
        title: "공감 능력이 매우 뛰어남",
        subtitle: "Great empathy for others | 有极强的共情力",
        content: [
            "❤ 사실 저도 공감하는 면에서 보검 씨와 참 많이 닮았어요.",
            "❤ 우리가 같은 마음으로 세상을 바라보는 것 같아 정말 기뻐요.🩵"
        ],
        img: ""
    }
];

// 2. 页面加载完成后执行初始化
document.addEventListener('DOMContentLoaded', function () {
    // 初始化搜索功能 (针对 index.html)
    initSearch();
    // 初始化全量列表渲染 (针对 reasons.html)
    renderAllReasons();
});

// --- 功能函数定义 ---

function initSearch() {
    const reasonForm = document.getElementById('reason-form');
    if (!reasonForm) return;

    const numInput = document.getElementById('num-input');
    const errorTip = document.getElementById('error-tip');
    const reasonContainer = document.getElementById('reason-container');
    const reasonNum = document.getElementById('reason-num');
    const reasonTitle = document.getElementById('reason-title');
    const reasonContent = document.getElementById('reason-content');
    const reasonImg = document.getElementById('reason-img');

    const subtitleEl = reasonTitle ? reasonTitle.querySelector('.subtitle') : null;
    const mainTitleEl = reasonTitle ? reasonTitle.querySelector('.main-title') : null;

    reasonForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (errorTip) errorTip.style.display = 'none';
        if (reasonContainer) reasonContainer.style.display = 'none';
        if (reasonImg) reasonImg.style.display = 'none';

        const inputVal = numInput ? numInput.value.trim() : '';
        if (inputVal === '') return;

        const inputNum = Number(inputVal);
        const targetReason = reasonsList.find(r => r.num === inputNum);

        if (!targetReason) {
            if (errorTip) {
                errorTip.innerHTML = `<span style="font-family: 'Nanum Gothic', sans-serif; font-size: 1rem; color: red;">'${inputVal}'번 이유를 찾을 수 없습니다. ㅠ ㅠ</span>`;
                errorTip.style.display = 'block';
            }
            return;
        }

        if (reasonNum) reasonNum.innerText = `#${targetReason.num}`;
        if (mainTitleEl) mainTitleEl.innerText = targetReason.title;
        if (subtitleEl) subtitleEl.innerText = targetReason.subtitle;
        if (reasonContent) {
            reasonContent.innerHTML = targetReason.content.map(line => `<p>${line}</p>`).join('');
        }

        if (targetReason.img && reasonImg) {
            reasonImg.src = targetReason.img;
            reasonImg.style.display = 'block';
        }

        if (reasonContainer) reasonContainer.style.display = 'block';
    });
}

function renderAllReasons() {
    const grid = document.getElementById('reasons-grid');
    if (!grid) return;

    grid.innerHTML = '';

    // 每 9 个理由为一个“块” (Row)
    const blockSize = 9;
    for (let i = 0; i < reasonsList.length; i += blockSize) {
        const blockItems = reasonsList.slice(i, i + blockSize);

        // 创建一个 Row 容器
        const row = document.createElement('div');
        row.className = 'row';
        row.style.marginBottom = '30px';
        row.style.paddingBottom = '20px';
        row.style.borderBottom = '1px solid color-mix(in srgb, var(--default-color), transparent 90%)';

        // 将 9 个理由分成 3 列，每列 3 个
        for (let colIndex = 0; colIndex < 3; colIndex++) {
            const col = createColumn();
            const colItems = blockItems.slice(colIndex * 3, (colIndex + 1) * 3);

            colItems.forEach(item => {
                col.innerHTML += `
                    <div class="post-list expandable-item">
                        <div class="post-meta">
                            <span class="date">이유</span> 
                            <span class="mx-1">•</span> 
                            <span>#${item.num}</span>
                        </div>
                        <h2 onclick="toggleContent(this)">
                            ${item.title}
                            <p class="subtitle">${item.subtitle}</p>
                        </h2>
                        <div class="expand-content">
                            ${item.content.map(line => `<p>${line}</p>`).join('')}
                        </div>
                        ${item.img ? `<img src="${item.img}" alt="" class="img-fluid" style="border-radius: 8px; margin: 5px 0;">` : ''}
                    </div>
                `;
            });
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

function createColumn() {
    const col = document.createElement('div');
    col.className = 'col-lg-4 border-start custom-border';
    return col;
}

function toggleContent(h2Element) {
    const content = h2Element.nextElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        content.style.opacity = 0;
        setTimeout(() => {
            content.style.opacity = 1;
            content.style.transition = "opacity 0.3s";
        }, 10);
    } else {
        content.style.display = "none";
    }
}
