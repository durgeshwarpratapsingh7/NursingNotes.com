let currentQ = 0;
let score = 0;
let subject = localStorage.getItem("subject");
let quiz = questions[subject];

loadQuestion();

function loadQuestion(){
    let q = quiz[currentQ];
    document.getElementById("question").innerText = q.q;

    let optionsHTML = "";
    q.options.forEach((opt, index)=>{
        optionsHTML += `<div class="option" onclick="selectOption(${index})">${opt}</div>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;
}

let selected = -1;

function selectOption(index){
    selected = index;
}

function nextQuestion(){
    if(selected == quiz[currentQ].answer){
        score++;
    }

    currentQ++;
    selected = -1;

    if(currentQ < quiz.length){
        loadQuestion();
    }else{
        localStorage.setItem("score", score);
        window.location.href = "result.html";
    }
}
