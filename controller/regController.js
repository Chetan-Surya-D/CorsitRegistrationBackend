const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const regSchema = require('../models/regModel');
// const multer = require('multer');
// const fs = require('fs')

const router = express.Router();
const conn = mongoose.connect('mongodb+srv://surya:surya@corsitregistrations-18nwt.mongodb.net/CorsitRegistrations?retryWrites=true&w=majority').
catch(error => {
    console.log("Hello");
    console.log(error);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/register', (req, res, next) => {
    console.log("recieved request");
    var record = new regSchema(req.body);
    regSchema.findOne({usn: req.body.usn}, (err, result) => {
        if(err) {
            res.status(500).json(err);
            console.log("err1")
            console.log(err)
        } else if(result == null) {
            record.save((err, result) => {
                if(err) {
                    res.status(500).json(err);
                    console.log("err2")
                    console.log(err)
                } else {
                    res.status(200).json({
                        status: "success",
                        data: result
                    });
                }
            })
        } else {
            res.status(200).json({
                status: "fail",
                data: "record already exists"
            })
        }
    })
})

router.post('/get', (req, res, next) => {
        regSchema.findOne({usn: req.body.usn}, (err, result) => {
            if(err) {
                res.status(500).json(err);
            } else if(result == null) {
                res.status(200).json({
                    status: "fail",
                    data: " record does not exist"
                })
            } else {
                regSchema.save((err, result) => {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json({
                            status: "success",
                            data: result
                        });
                    }
                })
            }
        })
})


router.post('/update',(req,res,next)=>{
    //console.log("Inside Update",req.body)
    regSchema.replaceOne({usn:req.body.usn}, (error, data) => {
        if (error) {
            res.status(500).json(error)
        } else {
            res.status(200).json({
                status: "succes",
                result: data
            })
        }
    });
    //getmovie.update({nameofthemovie:req.body.nameofthemovie},{$push: {commentofthemovie: req.body.commentofthemovie}});
});

module.exports = router;
