const express= require('express');
var router = express.Router();

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
            "id":"uu1",
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

module.exports=router;