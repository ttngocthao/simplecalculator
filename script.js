function add() {
    var first= Number(document.calculation.first.value);
    var second= Number(document.calculation.second.value);
    document.calculation.result.value= (first + second);
}
function subtract(){
    var first= Number(document.calculation.first.value);
    var second= Number(document.calculation.second.value);
    document.calculation.result.value= (first - second);
}
function times(){
    var first= Number(document.calculation.first.value);
    var second= Number(document.calculation.second.value);
    document.calculation.result.value= (first * second);
}
function divide(){
    var first= Number(document.calculation.first.value);
    var second= Number(document.calculation.second.value);
    document.calculation.result.value= (first /second);
}

    