// ページが読み込まれた後にコードを実行
document.addEventListener("DOMContentLoaded", function () {
  // 画像要素を取得
  const img = document.querySelector("img");

  // クリックイベントを追加
  img.addEventListener("click", function () {
    // 吹き出しの要素を作成
    const speechBubble = document.createElement("div");
    speechBubble.className = "speech-bubble";
    document.body.appendChild(speechBubble);

    // ランダムなセリフのリスト
    let phrases = [];
    fetch('./hamutan.json')
      .then(response => response.json())
      .then(data => {
        phrases = data.arr;
      })
    // ランダムなセリフを選択
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

    // 吹き出しにセリフを追加
    speechBubble.textContent = randomPhrase;

    // 吹き出しを画像の上に配置
    const imgRect = img.getBoundingClientRect();
    speechBubble.style.top = imgRect.top - 40 + "px"; // 40px 上に配置
    speechBubble.style.left = imgRect.left + imgRect.width / 2 - 50 + "px"; // 中央に配置

    // 三秒後に吹き出しを削除
    setTimeout(function () {
      document.body.removeChild(speechBubble);
    }, 1000); // 1秒後に削除
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const pageList = document.querySelector('.page-list');

    menuButton.addEventListener('click', function () {
        if (pageList.style.left === '-250px' || pageList.style.left === '') {
            pageList.style.left = '0';
        } else {
            pageList.style.left = '-250px';
        }
    });

    document.addEventListener('click', function (event) {
        if (event.target !== menuButton && event.target !== pageList && !menuButton.contains(event.target) && !pageList.contains(event.target)) {
            pageList.style.left = '-250px';
        }
    });
});
