var path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//middleware xử lí
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Http logger middleware
const morgan = require('morgan');
app.use(morgan('combined'));

// Template engine setup
const { engine } = require('express-handlebars');
app.engine('hbs', engine({ extname: '.hbs' })); //Định nghĩa đuôi mở rộng

app.set('view engine', 'hbs');
app.set('views', './src/resources/views');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => { 
    res.render('home');
});

app.get('/news', (req, res) => { 
    res.render('news');
});

app.get('/search', (req, res) => { 
    //console.log(req.query.keyword);
    res.render('search');
});

app.post('/search', (req, res) => { 
    console.log(req.body);
    res.send('');
});



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});