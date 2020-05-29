var express = require('express');
var router = express.Router();
const otoFatura = require('../AppLibrary/Model/OtoFatura');



router.all('/', async(req, res) => {

    var liste=  await otoFatura.Listele()
    res.json(liste);

});




router.post('/oto-fatura', async(req, res) => {

    res.json("OK");

});


router.post('/servis-fatura', async(req, res) => {

   
    var item=req.body
    console.log(item.baslamaTarihi)

    // var liste= await  otoFatura.Listele();
    res.json(item);


});


router.post('/cari-haraketler', async(req, res) => {

   



    res.json("OK");

});


module.exports = router;