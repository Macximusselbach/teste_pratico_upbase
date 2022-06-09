//App 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//Routes
const studentRoutes = require('./routes/studentRoutes.js');

app.use("/student", studentRoutes);

//Run
app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});