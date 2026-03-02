const amountInput = document.getElementById("amount");
const generateBtn = document.getElementById("generateBtn");
const cardsContainer = document.getElementById("cardsContainer");

const suits = [
  { symbol: "♠", color: "black" },
  { symbol: "♥", color: "red" },
  { symbol: "♦", color: "red" },
  { symbol: "♣", color: "black" },
];

const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

generateBtn.addEventListener("click", generateCards);

function generateCards() {
  const amount = parseInt(amountInput.value);

  if (amount > 52) {
    alert("No se pueden generar mas de 52 cartas");
    return;
  }
  cardsContainer.innerHTML = "";

  let deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ value, suit });
    }
  }
  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const cardData = deck[randomIndex];

    const card = document.createElement("div");
    card.className = `card ${cardData.suit.color}`;

    card.innerHTML = `
      <div class="corner top-left">${cardData.value}${cardData.suit.symbol}</div>
      <div class="suit">${cardData.suit.symbol}</div>
      <div class="corner bottom-right">${cardData.value}${cardData.suit.symbol}</div>
    `;
    cardsContainer.appendChild(card);
  }
}

