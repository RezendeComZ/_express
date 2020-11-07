const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // res.send('<h1>Testando!</h1>')
  res.sendFile('./views/index.html', { root: __dirname })
})

// Redirecionar
router.get('/homepage', (req, res) => {
  res.redirect('/')
})

// 404 - sempre no fim // Midleware (app.use())
router.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname })
})

module.exports = router;