const express= require('express');
var router = express.Router();

var uuid = require('uuid/v4');

var clasesCollection=[];

var clasesStruct={
    "id":"uuid",
    "clase":"",
    "seccion":"",
    "cupos":"",
    "campus":"",
    "docente":""
};

clasesCollection.push(
    Object.assign(
        clasesStruct,
        {
            "id":uuid(),
            "clase":"Seminario de Software",
            "seccion":"1801",
            "cupos":"30",
            "campus":"SGJ",
            "docente":"Orlando Betancourth"

        }
    )
)

router.get('/',(req,res,next)=>{
    res.status(200).json(clasesCollection);
});

router.get('/:id', (req, res, next) => {
    if  (!req.params.id) return next();
    var id = req.params.id;
    var clases = clasesCollection.filter((e, i) => {
      return (e.id === id);
    });
  
    if (clases.length > 0) {
      res.status(200).json(clases[0]);
    } else {
      res.status(404).json({});
  }
});

router.post('/',(req,res,next)=>{
    var newElement=Object.assign({},clasesStruct,{id:uuid()},req.body);
    clasesCollection.push(newElement);
    res.status(200).json(clasesCollection);
});

router.put('/:id', (req, res, next)=>{
    var id = req.params.id;
    var clasemodificada = {};
    var claseorginal = {};
    clasesCollection = clasesCollection.map( (e, i) => {
      if(e.id === id){
        claseorginal = Object.assign({}, e);
        return clasemodificada = Object.assign({}, e, req.body);
      }
      return e;
    });
    res.status(200).json({ Original: claseorginal, Modificada: clasemodificada});
});

router.delete('/:id', (req, res, next)=>{
    var id = req.params.id;
    var claseEliminada = {};
    clasesCollection = clasesCollection.filter((e,i)=>{
      if(e.id === id){
        claseEliminada = Object.assign({},e);
        return false;
      }
      return true;
    });
    res.status(200).json({Eliminada:claseEliminada, Clases:clasesCollection});
});
  


module.exports=router;