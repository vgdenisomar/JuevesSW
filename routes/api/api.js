const express = require('express');
const router= express.Router();

const clasesApi = require('./clases');

router.use('/clases', clasesApi);

router.get('/', (req,res,next)=>{
    res.status(200).json({"ok":"Bienvenido a la gestion de clases"});
});

module.exports=router;
