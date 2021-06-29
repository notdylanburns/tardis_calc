const express = require("express");
const app = express();

const PORT = 8082;

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.get("/static/img", (req, res) => {
    res.sendFile(`${__dirname}/conscalc.png`);
})

app.listen(PORT, () => console.log(`Running on *:${PORT}`));
