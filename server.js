const express = require('express');
const hbs = require('hbs');
const os = require('os');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear() )

hbs.registerHelper('screamIt', (text) => text.toUpperCase() )

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTittle: 'Home page',
        userName: os.userInfo().username,
        welcomeMessage: 'Welcome '
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTittle: 'About page'
    });
});

app.get('/bad', (req, res) => {
res.send({
    errorMessage: 'Im an error :3'
})
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');    
});