const express = require('express');
const app = express();

// Define the '/booking/api' route
app.all('/api/booking', (req, res) => {
  console.log("Just got a request!");

  // JSON data to be sent as a response
  const jsonData = {
    bookingId: 1,
    name: 'John Doe',
    date: '2023-06-02'
  };
  
  // Define the '/booking/api' route


  // Store the data or perform any required operations
  // For example, you can save the data in a database
  // Here, we simply log the received data
  console.log("Movie:", movie);
  console.log("Slot:", slot);
  console.log("Seats:", seats);

  // JSON data to be sent as a response
  const jsonData = {
    bookingId: 1,
    message: 'Booking successful'
  };

  // Send the JSON data as a response
  res.json(jsonData);
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on http://localhost:3000');
});
