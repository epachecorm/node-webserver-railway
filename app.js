const express = require('express');
require('dotenv').config(); //dotenv
const hbs = require('hbs');  //HBS
const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');   //HBS
hbs.registerPartials(__dirname + '/views/partials');  //HBS



//Servir contenido estatico

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Eduardo Pacheco',
    titulo: 'Curso de Node'
    }     );  
}); 

app.get('/generic', (req, res) => {
  res.sendFile( __dirname + '/public/generic.html');
});

  app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
  });


app.listen(port,()=>{
    console.log(`Example app listenig at http://localhost:${port}`);
});
