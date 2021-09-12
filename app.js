const
    express           = require("express"),
    app               = express(),
    bodyParser        = require("body-parser"),
    mongoose          = require("mongoose"),
    DB_url            = 'mongodb+srv://user:user@cluster0.dehor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    port              = process.env.PORT || 3000,
    seedDB            = require("./seeds"),
    article           = require("./models/article"),
    Comment           = require("./models/comment"),
    methodOverride    = require("method-override"),
    flash             = require("connect-flash"),
    passport          = require("passport"),
    LocalStrategy     = require("passport-local"), 
    User              = require("./models/user"),
    // routes
    commentRoutes     = require("./routes/comment"),
    articleRoutes     = require("./routes/article")
    authRoutes        = require("./routes/auth"),
    middleware   = require("./middleware/logic.js"),
    moment = require('moment'); 

// app configuration
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(flash());
app.locals.moment = require('moment');
seedDB()

//======================MONGODB======================\\
async function startapp() {
    try{
        await mongoose.connect(DB_url),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
        app.listen(port, process.env.IP, function(){
            console.log(`-----------------------------------------------------Server connected on port: ${port}`)
        });
    }catch(e){
        console.log('server error', e.message)
        process.exit(1)
    }
}
startapp()
//======================MONGODB======================\\

//================PASSPORT CONFIGURATION==============\\
app.use(require("express-session")({
    secret: ":)",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});
//================PASSPORT CONFIGURATION==============\\

// flash
app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash('error');
	res.locals.success = req.flash('success');
	next();
});
// flash


app.use(authRoutes);
app.use("/", articleRoutes);
app.use(commentRoutes);

app.get('*', function(req,res){
	req.flash('error', 'The Page is not found');
	res.redirect('/');
});