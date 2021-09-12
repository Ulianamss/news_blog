const
    express      = require("express"),
    router       = express.Router({mergeParams: true});
    article      = require("../models/article"),
    comment      = require("../models/comment"),
    middleware   = require("../middleware/logic.js");

//Comments New
router.get("/news/:id/comments/new",middleware.isLoggedIn, function(req, res){
    // find article by id
    console.log(req.params.id);
    article.findById(req.params.id, function(err, article){
        if(err){
            console.log(err);
        } else {
             res.render("comments/new", {article: article});
        }
    })
});

//Comments Create
router.post("/news/:id/comments",middleware.isLoggedIn,function(req, res){
       //lookup article using ID
       article.findById(req.params.id, function(err, article){
           if(err){
               console.log(err);
               res.redirect("/news");
           } else {
            comment.create(req.body.comment, function(err, comment){
               if(err){
                   req.flash("error", "Something went wrong");
                   console.log(err);
               } else {
                   //add username and id to comment
                   comment.author.id = req.user._id;
                   comment.author.username = req.user.username;
                   //save comment
                   comment.save();
                   article.comments.push(comment);
                   article.save();
                   req.flash("success", "Successfully added comment");
                   res.redirect('/news/' + article._id);
               }
            });
           }
       });
    });

// COMMENT EDIT ROUTE
router.get("/news/:id/comments/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
    article.findById(req.params.id, function(err, foundarticle){
		if (err || !foundarticle){
			req.flash('error', 'article not found');
			return res.redirect('back');
		}
    comment.findById(req.params.comment_id, function(err, foundComment){
       if(err){
           res.redirect("back");
       } else {
         res.render("comments/edit", {article_id: req.params.id, comment: foundComment});
       }
    });
});
});

// COMMENT DESTROY ROUTE
router.delete("news/:id/comments/:comment_id", middleware.checkCommentOwnership, function(req, res){
    //findByIdAndRemove
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
       if(err){
           res.redirect("back");
       } else {
           req.flash("success", "Comment deleted");
           res.redirect("/news/" + req.params.id);
       };
    });
});

module.exports = router;