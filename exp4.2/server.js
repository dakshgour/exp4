const express = require("express");
const app = express();

app.use(express.json());

// In-memory data
let cards = [];

// GET all cards
app.get("/api/cards", (req, res) => {
  res.json(cards);
});

// POST new card
app.post("/api/cards", (req, res) => {
  const { suit, value, collection } = req.body;

  const newCard = {
    id: Date.now(),
    suit,
    value,
    collection
  };

  cards.push(newCard);
  res.json(newCard);
});

// PUT update card
app.put("/api/cards/:id", (req, res) => {
  const card = cards.find(c => c.id == req.params.id);

  if (!card) {
    return res.status(404).json({ message: "Card not found" });
  }

  card.suit = req.body.suit || card.suit;
  card.value = req.body.value || card.value;
  card.collection = req.body.collection || card.collection;

  res.json(card);
});

// DELETE card
app.delete("/api/cards/:id", (req, res) => {
  cards = cards.filter(c => c.id != req.params.id);
  res.json({ message: "Deleted successfully" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});