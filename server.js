const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
        'age': 29
    },
    'chance the rapper': {
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois',
        'age': 29
    },
    'unknown': {
        'birthname': 'unknown',
        'birthLocation': 'unknown',
        'age': 0
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api', (request, response) => {
    response.json(rappers)
})
app.get('/api/:name', (request, response) => {
    let rapperName = request.params.name.toLowerCase()                             // gets the param name entered by user and puts into variable for us to reference
    if(rappers[rapperName]){
    response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
})




app.listen(PORT, () => {
    console.log(`The server is now running on PORT ${PORT}! Betta go catch it!`)
})