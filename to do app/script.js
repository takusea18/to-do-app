//要素を取得
const screen1=document.getElementById("screen1")//最初の画面
const startBtn=document.getElementById("start-btn")//ボタン
const screen2=document.getElementById("screen2")//その後の画面
const input =document.getElementById("todo-input");//その後の画面のタイトル
const addBtn=document.getElementById("add-btn")//追加ボタン
const list=document.getElementById("todo-list")//todoリスト

// --- 1. START ボタン押したら画面を切り替える ---
startBtn.addEventListener("click",()=>{
  screen1.classList.add("hidden");  //最初の画面を非表示
  screen2.classList.remove("hidden");
})

addBtn.addEventListener("click", () => 
    { const text = input.value.trim(); if (text === "") return;
    const li = document.createElement("li");
  li.textContent = text;

  const del = document.createElement("button");
  del.textContent = "削除";
  del.onclick = () => li.remove();

  li.appendChild(del);
  list.appendChild(li);

  input.value = "";
});
