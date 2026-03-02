// 1. 理由数据（建议继续扩展到100）
const reasonsList = [
    {
        num: 1,
        title: "택이에게 영혼을 불어넣어 주신 점",
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
        title: "늘 감사하다는 말을 하시는 점",
        subtitle: "Always thankful | 永远会说感谢的话",
        content: [
            "❤ 몇 년 전에 보검 씨께서 하신 말씀, \"늘 감사하다고 말하니까 감사한 일들이 생기더라고요\"를 기억하고 있습니다.",
            "❤ 보검 씨 덕분에 저도 감사하는 마음으로 살고 있고, 그래서 제 인생은 정말 행복합니다. 정말 감사합니다!"
        ],
        img: ""
    },
    {
        num: 3,
        title: "선한 영향력을 전파하시는 점",
        subtitle: "Spreading positive influence | 传播正能量",
        content: [
            "❤ 보검 씨의 성실하고 바른 모습은 많은 사람들에게 귀감이 됩니다.",
            "❤ 주변 사람들을 배려하고 챙기는 따뜻한 마음씨가 정말 아름다워요."
        ],
        img: ""
    },
    {
        num: 4,
        title: "성장하는 배우의 모습을 보여주시는 점",
        subtitle: "A growing actor | 不断成长的演员",
        content: [
            "❤ 매 작품마다 새로운 도전을 주저하지 않고 완벽하게 소화해내는 모습이 멋져요.",
            "❤ 노력하는 천재라는 말이 보검 씨에게 가장 잘 어울리는 것 같아요."
        ],
        img: ""
    },
    {
        num: 5,
        title: "미소가 아름다운 점",
        subtitle: "Beautiful smile | 笑容很美",
        content: [
            "❤ 보검 씨의 환한 미소를 보면 제 마음도 밝아지는 것 같아요.",
            "❤ 그 미소 영원히 지켜주고 싶어요."
        ],
        img: ""
    },
    {
        num: 6,
        title: "팬들을 진심으로 아껴주시는 점",
        subtitle: "Treasure the fans | 真心爱护粉丝",
        content: [
            "❤ 팬미팅이나 행사 때마다 팬들의 눈을 맞추고 진심을 전하려는 모습에 감동받아요.",
            "❤ 항상 팬들을 '축복합니다'라고 말해주셔서 감사합니다."
        ],
        img: "assets/img/post-landscape-3.jpg"
    },
    {
        num: 7,
        title: "택이에게 영혼을 불어넣어 주신 점",
        subtitle: "You breathed life into Taek | 你给阿泽赋予了灵魂",
        content: [
            "❤ 저는 택이를 통해 보검 씨를 알게 되었어요.",
            "❤ &lt;응답하라 1988&gt; 은 제 인생 드라마이고, 택이는 제가 가장 좋아하는 캐릭터예요.",
            "❤ 택이 덕분에 우리가 이렇게 만나게 되었고, 보검 씨를 점점 더 좋아하게 되었어요."
        ],
        img: "assets/img/taek.jpg"
    },
    {
        num: 8,
        title: "늘 감사하다는 말을 하시는 점",
        subtitle: "Always thankful | 永远会说感谢的话",
        content: [
            "❤ 몇 년 전에 보검 씨께서 하신 말씀, \"늘 감사하다고 말하니까 감사한 일들이 생기더라고요\"를 기억하고 있습니다.",
            "❤ 보검 씨 덕분에 저도 감사하는 마음으로 살고 있고, 그래서 제 인생은 정말 행복합니다. 정말 감사합니다!"
        ],
        img: ""
    },
    {
        num: 9,
        title: "선한 영향력을 전파하시는 점",
        subtitle: "Spreading positive influence | 传播正能量",
        content: [
            "❤ 보검 씨의 성실하고 바른 모습은 많은 사람들에게 귀감이 됩니다.",
            "❤ 주변 사람들을 배려하고 챙기는 따뜻한 마음씨가 정말 아름다워요."
        ],
        img: ""
    },
    {
        num: 10,
        title: "성장하는 배우의 모습을 보여주시는 점",
        subtitle: "A growing actor | 不断成长的演员",
        content: [
            "❤ 매 작품마다 새로운 도전을 주저하지 않고 완벽하게 소화해내는 모습이 멋져요.",
            "❤ 노력하는 천재라는 말이 보검 씨에게 가장 잘 어울리는 것 같아요."
        ],
        img: ""
    },
    {
        num: 11,
        title: "미소가 아름다운 점",
        subtitle: "Beautiful smile | 笑容很美",
        content: [
            "❤ 보검 씨의 환한 미소를 보면 제 마음도 밝아지는 것 같아요.",
            "❤ 그 미소 영원히 지켜주고 싶어요."
        ],
        img: ""
    },
    {
        num: 12,
        title: "팬들을 진심으로 아껴주시는 점",
        subtitle: "Treasure the fans | 真心爱护粉丝",
        content: [
            "❤ 팬미팅이나 행사 때마다 팬들의 눈을 맞추고 진심을 전하려는 모습에 감동받아요.",
            "❤ 항상 팬들을 '축복합니다'라고 말해주셔서 감사합니다."
        ],
        img: "assets/img/post-landscape-3.jpg"
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
                errorTip.textContent = `❌ 暂无编号${inputNum}的理由`;
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
