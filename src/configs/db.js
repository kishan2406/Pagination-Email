 const mongoose = require("mongoose")

module.exports = () =>{
    return mongoose.connect("mongodb+srv://KishanPrajapati:<password>@cluster0.77mkr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
};
