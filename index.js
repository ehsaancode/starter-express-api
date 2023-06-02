const express = require('express');
const app = express();

// Define the '/booking/api' route
app.all('/booking/api', (req, res) => {
  console.log("Just got a request!");

  // JSON data to be sent as a response
  const jsonData = {
    bookingId: 1,
    name: 'John Doe',
    date: '2023-06-02'
  };

  // Send the JSON data as a response
  res.json(jsonData);
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on http://localhost:3000');
});
