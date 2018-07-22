var express = require("express");
var app = express();

app.set("view engine", "ejs")
app.get("/", function(req, res){
    // res.send("this will be the landing page soon!")
    res.render("landing")
})

app.get("/campgrounds", function(req, res){
    var campgrounds = [
            {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7268/7121859753_e7f787dc42.jpg"},
            {name: "Granite Hill", image: "https://farm8.staticflickr.com/7399/9211397472_e6d0a7c6fd.jpg"},
            {name: "Mountain Goat's Rest", image: "https://farm3.staticflickr.com/2054/2229707213_302c00f6b5.jpg"}
        ]
        res.render("campgrounds", {campgrounds: campgrounds});
})
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!")
})