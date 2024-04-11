var mongoose = require("mongoose")

mongoose.connect("mongodb+srv://sai:Saisai99122@cluster0.0fn1n.mongodb.net/tictactoemo?retryWrites=true&w=majority&appName=Cluster0").
then((vl)=>console.log("Connected to Database")).
catch((reason)=>{console.log(reason)})

