const express = require("express")
const app = express()

//indicando qual sera a view do app
app.set('view engine','ejs')

app.use(express.static('public'))

app.get("/",(req, res) => {
    res.send('index.ejs')
})

app.listen(8000,() => {
    console.log("rodando...")
})