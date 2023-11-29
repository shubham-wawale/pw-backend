import express from "express";
import { sitterInfo, userInfo } from "../database/model/user.model";
import sha256 from "sha256";
import Distance from "geo-distance";

const userController = express.Router();

userController.post('/getNearbySitters', (req, res)=> {
    const query = req.body;
    sitterInfo.find({country: query.country}).then(sitters=>{
        if(!sitters){
            res.json({sucess: false, message: "Could not find sitters."})
        } else {
            const filteredSitters = sitters.filter(sitter=>(Distance.between(sitter.location, query.location) <= Distance('5 km')));
            if(filteredSitters.length !==0){
                res.json({sucess: true, sitters: filteredSitters})
            } else {
                res.json({success: false, message: "Could not find sitters."})
            }
        }
    })
})

