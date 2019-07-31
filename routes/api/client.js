const express = require('express');
const router = express.Router();
const Client = require('../../model/Client');

//View all clients endpoint
router.get('/',(req,res)=>{

    Client.find().then((clients)=>{

        res.json(clients);

    });

});

//View single client (find by id)
router.get('/:id',(req,res)=>{

    Client.findById(req.params.id).then((client)=>{

        res.json(client);

    });

});

//Add new client

router.post('/',(req,res)=>{
    newClient = new Client({
        name: req.body.name,
        surname: req.body.surname,
        country:req.body.country,
        contact:req.body.contact,
        email:req.body.email
    });

    newClient.save().then((client)=>{

        res.json(client);

    });
});

//edit client

router.put('/:id',(req,res)=>{

    Client.findById(req.params.id).then((client)=>{

        client.name = req.body.name;
        client.surname = req.body.surname;
        client.isActive=req.body.isActive;
        client.country=req.body.country;
        client.contact = req.body.contact;
        client.email=req.body.email;

        client.save().then((nClient)=>{
           res.json(nClient); 
        });

    });

});

//delete clent
router.delete('/',(req,res)=>{

    Client.findById(req.params.id).then((client)=>{
        client.delete().then((delCli)=>{
            res.json(delCli);
        });
    });

});

module.exports = router;