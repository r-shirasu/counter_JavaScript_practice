// 数値の設定
let count = 0;

// id属性値・class属性値などを意識せずにHTML要素を取得
const getCount = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// 全てのボタンのイベントを取り出す処理
btns.forEach((btns) => {
  btn.addEventListner("click", () => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
