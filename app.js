const express = require('express')
const app = express()
const port = 3000
const filmRoutes = require("./routes/films.routes")

app.use(express.json()); //Habilito recepcion de json en servidor
app.use('/api/film', filmRoutes);


app.listen(port, () => { //puerto por donde sale la respuesta a la peticion
    console.log(`Example app listening on port on http://localhost:${port}`);
  })

  module.exports = app