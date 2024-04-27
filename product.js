const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use bodyParser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the form on the /add-product route
app.get('/add-product', (req, res) => {
    res.send(`
        <form action="/add-product" method="post">
            <input type="text" name="productName" placeholder="Product Name">
            <input type="text" name="productSize" placeholder="Product Size">
            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle form submission
app.post('/add-product', (req, res) => {
    // Parse the form data using bodyParser
    const productName = req.body.productName;
    const productSize = req.body.productSize;

    // Log the parsed data
    console.log("Product Name:", productName);
    console.log("Product Size:", productSize);

    // Send a response
    res.send('Product added successfully!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
