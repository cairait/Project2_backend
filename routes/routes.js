//route that handles the url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World')
});

//route that handles the url localhost:3000/cheese
app.get('/cheese', (req, res) => {
    response.send('gouda')
})