var table = document.createElement("table");

// заповнюємо таблицю за допомогою циклів
for (var i = 0; i < data.length; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < data[i].length; j++) {
        var cell = document.createElement("td");
        cell.textContent = data[i][j];
        row.appendChild(cell);
    }
    table.appendChild(row);
}


document.body.appendChild(table);

function checkAnswer() {
    const correctAnswer =  true;
    const userAnswer = document.getElementById("answer").value;

    if (userAnswer === "") {
        alert("Ви не вибрали жодної відповіді!");
    } else if (userAnswer === String(correctAnswer)) {
        alert("Правильна відповідь.");
    } else {
        alert(`Неправильна відповідь.`);
    }
}