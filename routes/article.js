const
    express    = require("express"),
    router     = express.Router(),
    article    = require("../models/article");



//======================INDEX======================\\
router.get("/", function(req, res){
    // Get all news from DB
    article.find({}, function(err, allnews){
       if(err){
           console.log(err);
       } else {
            res.render("news/index",{news:allnews});
       }
    });
});
//======================INDEX======================\\


//======================SHOW======================\\
// app.get("/news/:id", function(req, res){
//     //find the article with provided ID
//     article.findById(req.params.id, function(err, foundarticle){
//         if(err){
//             console.log(err);
//         } else {
//             console.log(foundarticle);
//             //render show template with that article
//             res.render("news/show", {article: foundarticle});
//         }
//     });
// })

router.get("/news/:id", function(req, res){
    //find the article with provided ID
    article.findById(req.params.id).populate({path: "comments"}).populate("user").exec(function(err, foundarticle){
        if(err){
            console.log(err);
        } else {
            foundarticle.views++;
            // article.views.save();
            foundarticle.save();
            //render show template with that article
            res.render("news/show", {article: foundarticle});
        }
    });
})
//======================SHOW======================\\

module.exports = router;