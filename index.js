let history = "";

function clearscreen(){
    document.getElementById("result").value = "";
    addToHistory("\n");
}

function display(value){
    document.getElementById("result").value += value; 
    addToHistory(value);
}

function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p)
    document.getElementById("result").value = q;
    addToHistory('=' + q);
}

function addToHistory(value){
    history += value;
    document.getElementById("history").innerText = history;
}