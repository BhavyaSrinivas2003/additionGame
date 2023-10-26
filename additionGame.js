function additionGameFun() {
    let value1 = Math.random() * 101;
    let int_value1 = parseInt(value1);
    let value2 = Math.random() * 101;
    let int_value2 = parseInt(value2);
    document.getElementById("firstNumber").textContent = int_value1;
    document.getElementById("secondNumber").textContent = int_value2;
    let sum_value = parseInt(int_value1 + int_value2);

    function checkButton() {
        int_value1 = parseInt(document.getElementById("firstNumber").textContent);
        int_value2 = parseInt(document.getElementById("secondNumber").textContent);
        let sum_value = parseInt(int_value1 + int_value2);
        let inputElement = document.getElementById("userInput");
        let userEnteredSum = parseInt(inputElement.value);
        if (userEnteredSum === sum_value) {
            document.getElementById("gameResult").textContent = "Congratulations!You got it right";
            document.getElementById("gameResult").style.color = "#028a0f";
        } else {
            document.getElementById("gameResult").textContent = "Please Try Again!";
            document.getElementById("gameResult").style.color = "#1e217c";
        }
    }

    function restartButton() {
        let value1 = Math.random() * 101;
        let int_value1 = parseInt(value1);
        let value2 = Math.random() * 101;
        let int_value2 = parseInt(value2);
        let sum_value = parseInt(int_value1 + int_value2);
        document.getElementById("firstNumber").textContent = int_value1;
        document.getElementById("secondNumber").textContent = int_value2;
        document.getElementById("userInput").value = "";
        document.getElementById("gameResult").textContent = "";

    }
    let checkButtonEl = document.getElementById("checkButton");
    checkButtonEl.onclick = function() {
        checkButton();
    };
    let restartButtonEl = document.getElementById("restartButton");
    restartButtonEl.onclick = function() {
        restartButton();
    };
}