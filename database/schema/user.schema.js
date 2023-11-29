import { Schema } from "mongoose";

const userSchema = new Schema({
    email: {type: String, required: true},
    hashedPassword: {type: String, required: true}
})
const locationSchema = new Schema({
    lat: {type: String, required: true},
    lng: {type: String, required: true}
})
const personalDetails = new Schema({
    email: {type: String, required: true},
    hashedPassword: {type: String, required: true},
    name: {type: String, required: true},
    mobile: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    country: {type: String, required: true},
    location: locationSchema,
    chargePerVisit: {type: Number, required: true},
    availability: {type: Array},
    numberOfPets: {type: Number, required: true},
    canStayOvernight: {type: Boolean, required : true},
    startTime: {type: String, required: true},
    endTime: {type: String, required: true},
})


const paymentDetails = new Schema({

})

const transactionDetails = new Schema({

})
const sitterSchema = new Schema({
    personalDetails: personalDetails,
    occupied: {type: Boolean},
    paymentInfo: paymentDetails,
    transactions: transactionDetails
})

export {userSchema, sitterSchema}
