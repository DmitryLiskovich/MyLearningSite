const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/usernames", { useNewUrlParser: true }).then(()=> console.log("Connection seccess")).catch(e=>console.log("Connection fault"));

const userSchema = new Schema({
    Name: String,
    Password: String
});


const user = mongoose.model("names", userSchema);

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname));

const urlEncode = bodyParser.urlencoded({extended: false});
console.log(__dirname);

app.get("/login", urlEncode, function (request, response) {

    response.sendFile(__dirname + "/index.html");
});

app.get("/login-repeat", urlEncode, function(req, res){
    res.sendFile(`${__dirname}/login-repeat.html`);
})


app.post("/login", urlEncode, function (request, response){
    if(!request.body) return response.senStatus(400);
    user.findOne({Name:request.body.Login}, function(err, result){
        if(err) response.status(410).send("Database not found");

        if(isEmpty(result)){
            console.log("User not found");
            response.redirect("/login-repeat");
        }
        else if(result.Password != request.body.Pass){
            console.log("Not correct password");
            response.redirect("/login-repeat");
        }

        else{
            response.redirect("/");
        }
    });  
});

function isEmpty(obj) {
    for(var key in obj)
    {
        return false;
    }
    return true;
}


app.listen(3000);