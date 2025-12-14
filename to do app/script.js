//要素を取得
const screen1=document.getElementById("screen1")//最初の画面
const startBtn=document.getElementById("start-btn")//ボタン
const screen2=document.getElementById("screen2")//その後の画面
const input =document.getElementById("task-title");//その後の画面のタイトル
const addBtn=document.getElementById("task-add-btn")//追加ボタン
const list=document.getElementById("task-list")//todoリスト
const dateInput=document.getElementById("task-date")//日付
const categorySelect=document.getElementById("task-category")//タスク
const calendar=document.getElementById("calendar")//カレンダー
const tasks=[];//タスクを保存する箱


// --- 1. START ボタン押したら画面を切り替える ---
startBtn.addEventListener("click",()=>{
  screen1.classList.add("hidden");  //最初の画面を非表示
  screen2.classList.remove("hidden");//非表示の属性を取り除き現れる
})

addBtn.addEventListener("click",()=>{
  addTask();
})

 //タスクを追加する際、Enterでも適用する
function addTask(){//functionで関数定義を宣言する。ここは「addToDo」という関数名
  const title=input.value.trim()//textを定数に。valueは初期値のようなもの
  const date=dateInput.value;
  const category=categorySelect.value;

  if(title ===""|| date==="")return;//if関数。もしテキストが空欄ならその値を返す。返し値

  const task={
    title,
    date,
    category
  };

  tasks.push(task)//taskは配列、pushは後ろに追加の意味

  renderTaskList();//書き直し
  renderCalendar();//書き直し

  input.value="";
}

function renderTaskList(){
  list.innerHTML="";
  
  tasks.forEach(task=>{
    const li=document.createElement("li");
    
    //チェックボックス
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";

    //テキスト
    const span=document.createElement("span")
    span.textContent=`${task.title}/${task.date}/${task.category}`;

    checkbox.addEventListener("change",()=>{
      li.classList.toggle("done");
    })

    li.appendChild(checkbox);
    li.appendChild(span);
    
    list.appendChild(li)
  })
}

function renderCalendar(){
  calendar.innerHTML="";

  tasks.forEach(task=>{
    const div=document.createElement("div");
    div.textContent=`${task.date}:${task.title}`;

    div.classList.add(task.category);
    calendar.appendChild(div);
  })
}



input.addEventListener("keydown",(e)=>{
    if(e.key=== "Enter"){
      addTask();
    }
  });



