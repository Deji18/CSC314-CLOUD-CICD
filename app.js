const express = require('express');
const app = express();
const port = 5000;

app.use(express.static("public"));

//app.get('/', (req, res) => 
//res.send('THIS IS CSC 314  CLOUD COMPUTING DEVOPS; CI-CD PIPELINE CREATED WITH AWS THIS PAGE INDICATES SUCCESS AYODEJI MARVELLOUS OLUGBAMILA  VUG/CSC/22/8016')
//);

app.listen(port);
console.log(`App running on http://localhost:${port}`);

