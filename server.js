const express = require('express');
const app = express();
const port = 3000;


app.get("/",(_,res)=>{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://unpkg.com/htmx.org@2.0.0" integrity="sha384-wS5l5IKJBvK6sPTKa2WZ1js3d947pvWXbPJ1OmWfEuxLgeHcEbjUUA5i9V5ZkpCw" crossorigin="anonymous"></script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Button to trigger the GET request -->
    <button hx-get="/your-endpoint" hx-target="#response-div">
        Get Data
    </button>
    <!-- Button to trigger the GET request -->
    <button hx-get="/answer" hx-target="#response-div">
        Get Data
    </button>

    <!-- Div to display the response -->
    <div id="response-div">
        <!-- Response will be injected here -->
    </div>
</body>
</html>`)
})
app.get('/your-endpoint', (req, res) => {
    res.send('<p>This is the response co!!!ntent!</p>');
});

app.get('/answer', (req, res) => {
    res.send('<p>This is the response co!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>');
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
