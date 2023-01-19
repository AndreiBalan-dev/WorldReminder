const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set('views', path.join('./ejs'));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.render("homepage.ejs", {
        title: "Unknown"
    })
})
app.get("/test/:testTitle", (req, res) => { // request & response
    let testTitle = req.params.testTitle;
    res.render("homepage.ejs", {
        title: testTitle,
    })
})
app.get("*", (req, res) => { // 404 - keep last
    res.send("404")
})


app.listen(port, console.log(`Aplicatie deschisa pe portul ${port}.`))