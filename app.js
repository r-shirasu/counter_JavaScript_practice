"use stirict";

// 数値の設定
let count = 0;

// ボタンのまとまりを定義（HTML要素の取得)
const buttons = document.querySelectorAll(".btn");
const getCount = document.getElementById("value");

// ボタンのイベント
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    getCount.textContent = count;

    if (count > 0) {
      getCount.setAttribute("id", "increasecolor");
    }
    if (count < 0) {
      getCount.setAttribute("id", "decreasecolor");
    }

    if (count === 0) {
      getCount.setAttribute("id", "zerocolor");
    }
  });
});

// ①decrease押して-
// ②reset押したら0
// ③increase押して++
