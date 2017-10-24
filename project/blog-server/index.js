//archivo de datos
const data = require('./data.json')
//dependencia web server
const express = require('express')

const bodyParser = require('body-parser')
const cors = require('cors')

//nuestra APP (web server)
const app = express()

app.use(cors())//nos permite hacer llamadas 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const port = process.env.PORT || 8080
const router = express.Router()

router.get('/posts', (req, res) => {
    // TÚ CÓDIGO VA AQUÍ --entregue post
    res.json(data)
})

router.get('/posts/:id', (req, res) => {
    // TÚ CÓDIGO VA AQUÍ entregue infopost
    const { id } = req.params
    //'data' necitamos sacar el objeto que haga match con el id dado en la url
    console.log(typeof id)
    const post = data.filter((p) => {

    	return p.id === parseInt(id, 10)
    })[0]
    //comprobamos si es que hay algun dato filtrado
    if(typeof post === 'undefined'){
    	res.status(404).json({})
    	return
    }
    //devolver solo un post filtrado
    res.json(post)
   //console.log(id)
})

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port ' + port)

