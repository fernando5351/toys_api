const router = require('express').Router();

router.get('/register', async (req, res, next)=>{
    res.send('hola user')
});

module.exports = router;