let input_num = "0"; // 入力中の値
let input_dot = false; // 小数点打ったかフラグ
let input_symbol = null; // 入力した計算記号
let fix_num = null; // 確定した値
let fix_symbol = null; // 確定した計算記号

// 画面に数字を表示する
function display(_num) {
    let _disp = document.getElementById("display1");
    _disp.innerHTML = _num;
}
// 数字を入力
function inputNum(_num) {
    if (input_symbol !== null) {
        // 入力中の計算記号を確定させる
        fixSymbol();
    }
    if (_num === ".") {
        // 小数点は何個も付けられないようにする
        if (input_dot) {
            return;
        }
        input_dot = true;
    } else {
        // 0から始まる2桁以上の数字にならないように制御
        if (input_num === "0") {
            input_num = "";
        }
    }
    input_num = `${input_num}${_num}`
    display(input_num);
}
// 計算記号を入力
function inputSymbol(_symbol) {
    input_symbol = _symbol;
    fixNum();
    display(fix_num);
}
// 入力値を確定させる
function fixNum() {
    let _input_num = Number(input_num);
    let _fix_num = Number(fix_num);
    switch (fix_symbol) {
        case "+":
            fix_num = String(_input_num + _fix_num);
            break;
        case "=":
            fix_num = String(_input_num);
            break;
        default:
            // 確定している値が無い場合のみ入力値を確定値とする
            if (fix_num === null) {
                fix_num = input_num;
            }
            break;
    }
    // 確定に使った値は初期化する
    input_num = "0";
    input_dot = false;
    fix_symbol = null;
}
// 計算記号を確定させる
function fixSymbol() {
    fix_symbol = input_symbol;
    // 確定に使った値は初期化する
    input_symbol = null;
}

// htmlの読み込みが終わった後に初期化
window.onload = function () {
    display(input_num);
}