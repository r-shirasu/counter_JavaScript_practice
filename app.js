// 数値の設定
let count = 0;

// id属性値・class属性値などを意識せずにHTML要素を取得
const getCount = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");
const btns = ["cat", "dog", "fox"];

// 全てのボタンのイベントを取り出す処理
btns.forEach((item, items, itemss) => {
  //   console.log("item", "items", "itemss");
  console.log("item", item);
  console.log("items", items);
  console.log("itemss", itemss);
  return;
  //   console.log(btn);
  btns.addEventListner("click", () => {
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

// ①item
// 要素＝DECREASE
// ②items  (index) 0
// ③itemss
// 配列　btns

// ①item   //
// 要素＝INCREASE
// ②items  (index) 1
// ③itemss
// 配列　btns
