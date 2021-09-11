let express = require('express');
let app = express();
let path = require('path');
let mainRoutes = require("./routes/mainRoutes.js");

let publicPath = path.resolve('./public');
let viewsPath = path.resolve('./src/views');

// Set Template Engine
app.set('view engine','ejs');
app.set('views', viewsPath);

// PUT y DELETE
let methodOverride = require('method-override');
let session = require('express-session');
let cookies = require('cookie-parser');


// middleware error 404 not found handling
app.use((req, res, next) => {
    res.status(404).render('error', {
        status: 404,
        title: 'ERROR',
        errorDetail: 'Page Not Found'
    });
    next();
});

app.use("/", mainRoutes);

// SERVIDOR 

app.listen(
    3000, () => console.log('Servidor corriendo en el puerto 3000')
);