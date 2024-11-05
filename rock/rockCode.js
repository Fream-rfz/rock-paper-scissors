
const choices = ["камень", "ножницы", "бумага"];


function playGame(playerChoice) {
  
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  

  let result;
  if (playerChoice === computerChoice) {
    result = "Ничья!";
  } else if (
    (playerChoice === "камень" && computerChoice === "ножницы") ||
    (playerChoice === "ножницы" && computerChoice === "бумага") ||
    (playerChoice === "бумага" && computerChoice === "камень")
  ) {
    result = `Вы выбрали ${playerChoice}, компьютер выбрал ${computerChoice}. Вы выиграли!`;
  } else {
    result = `Вы выбрали ${playerChoice}, компьютер выбрал ${computerChoice}. Вы проиграли!`;
  }
  

  document.getElementById("result").innerText = result;
}
