const  {Router} = require('express')
const indexRouter = Router();

const messages = [
  {
    text: "Hi there!", 
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const addMessage = function(username,message,array) {
  const obj = {
    text: message,
    user:username,
    added: new Date()
  }

  array.push(obj)
}


indexRouter.get('/', (req,res) => {
    res.render("index", {messages: messages})
})

indexRouter.post('/new', (req,res) => {
    const username = req.body.username
    const message = req.body.message
    addMessage(username,message,messages)
    res.redirect('/')
})

module.exports = indexRouter