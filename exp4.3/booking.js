const express = require("express");
const app = express();

app.use(express.json());

// total seats
let seats = 100;

// booking API
app.post("/api/book", (req, res) => {
  if (seats <= 0) {
    return res.json({
      success: false,
      message: "No seats available"
    });
  }

  seats--;

  res.json({
    success: true,
    bookingId: Date.now(),
    remaining: seats
  });
});

// start server
app.listen(3000, () => {
  console.log("Booking system running on port 3000");
});