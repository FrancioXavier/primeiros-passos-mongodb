const mongoose = require("mongoose");

//conectando ao banco de dados
mongoose.connect("mongodb://127.0.0.1:27017/aprendendo", {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log('Banco de dados conectado!')
}).catch(err => {
    console.log(`Falha ao conectar: ${err}`)
});

//configurando models

// //Criando Schema
const  Schema = mongoose.Schema;
const User = new Schema ({
    name: {
        type: String,
        require: true
    },
    surname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
});

//Collection
mongoose.model('users', User);

// //inserindo dados
const addData = mongoose.model('users')

new addData({
    name: "Francio",
    surname: "Xavier",
    email: "Francio@email.com",
    age: 19,
    country: "Brasil"
}).save().then( () => {
    console.log("Salvou")
}).catch(err => { 
    console.log(`Não salvou: ${err}`) 
})