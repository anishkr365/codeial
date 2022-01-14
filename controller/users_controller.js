// module.exports.profile = function(req, res){
//     res.end('<h1>User Profile</h1>');
const User = require('../models/user');

// const req = require("express/lib/request");

// }
module.exports.profile = function(req,res){
    // 
    return res.render('user',{
     title:"user profile"
    });
}
        module.exports.signup = function(req, res){
            return res.render('user_sign_up',{
                title:"codeial /signup"
            });
        }
   
        module.exports.signin = function(req, res){
            return res.render('user_sign_in',{
                title:"codeial /signin"
            });
        }

        
        module.exports.create = function(req, res){
            console.log("Inside signup");
            if (req.body.password != req.body.confirm_password){
                console.log("password do not match");
                return res.redirect('back');
            }
        
            User.findOne({email: req.body.email}, function(err, user){
                if(err){console.log('error in finding user in signing up'); return}
        
                if (!user){
                    User.create(req.body, function(err, user){
                        if(err){console.log('error in creating user while signing up'); return}
        
                        return res.redirect('/users/signin');
                    })
                }else{
                    console.log("user already registered");
                    return res.redirect('back');
                }
        
            });
        }
        
        
        // sign in and create a session for the user
        module.exports.createSession = function(req, res){
            return res.redirect('/');
        }