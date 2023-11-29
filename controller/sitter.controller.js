import express from "express";
import { sitterInfo, userInfo } from "../database/model/user.model";
import sha256 from "sha256";
import Distance from "geo-distance";

const sitterController = express.Router();

sitterController.post('/addSitter', (req, res) => {
    try {
        const formattedData = {
            personalDetails: {
                email: req.body.values.email,
                hashedPassword: sha256(req.body.values.password),
                name: req.body.values.name,
                mobile: req.body.values.mobile,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                country: req.body.country,
                location: req.body.location,
                chargePerVisit: req.body.values.chargePerVisit,
                numberOfPets: req.body.values.numberofPets,
                availability: req.body.values.availability.split(",").map(day => day.toLowerCase().trim()),
                canStayOvernight: req.body.values.canStayOvernight.toLowerCase().trim() === "yes" ? true : false,
                startTime: req.body.values.startTime,
                endTime: req.body.values.endTime
            }
        }
        sitterInfo.findOne({ "email": formattedData.personalDetails.email }).then(sitter => {
            console.log(sitter)
            if (!sitter) {
                console.log("registering new sitter")
                const newSitterData = new sitterInfo(formattedData)
                newSitterData.save().then(res => {
                    console.log("result",res)
                    res.json({ success: true, message: "Your profile is created successfully." })
                }).catch(err => {
                    res.json({ success: false, message: err })
                })
            } else {
                res.json({ success: false, message: "Your email is already registered" })
            }
        })
    } catch (e) {
        res.json({ success: false, message: "Bad request (no body)" })
    }

})

export default sitterController;