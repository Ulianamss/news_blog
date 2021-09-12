const  
    express = require("express"),
    router  = express.Router(),
    passport = require("passport"),
    User = require("../models/user");



// show register form
router.get("/register", function(req, res){
    res.render("register"); 
 });
 //handle sign up logic
 router.post("/register", function(req, res){
     const newUser = new User({username: req.body.username});
     User.register(newUser, req.body.password, function(err, user){
         if(err){
             console.log(err);
             return res.render("register");
         }
         passport.authenticate("local")(req, res, function(){
            res.redirect("/"); 
         });
     });
 });
 
 // show login form
 router.get("/login", function(req, res){
    res.render("../views/login"); 
 });
 // handling login logic
 router.post("/login", passport.authenticate("local", 
     {
         successRedirect: "/",
         failureRedirect: "/login"
     }), function(req, res){
 });
 
 // logic route
 router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
 });
 
 function isLoggedIn(req, res, next){
     if(req.isAuthenticated()){
         return next();
     }
     res.redirect("/login");
 }
 
 module.exports = router;