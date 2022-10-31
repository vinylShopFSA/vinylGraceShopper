// o: fix indentation in this file
// o: good work making these middleware and exporting them
const {
  models: { User },
} = require("../db");

// o: you can also call checkUser from checkAdmin since you kinda need to run checkUser
//  before this function anyway
const checkAdmin = (req, res, next) => {
    if (!req.user.isAdmin) {
      // o: not my path? do you know my future? 🤔
    return res.status(403).send("this is not your path")
    } else {
     next()
    }
  };
  
  // o: a better name would be "loadUser" since you aren't really verifying anything
  const checkUser = async (req, res, next) => {
    try{
    const token = req.headers.authorization
    const user = await User.findByToken(token)
    req.user =  user
    next()
    }catch(err){
      // o: might as well use console.error
      console.log(err)
      res.sendStatus(403);
    }
  }

  module.exports = {
    checkAdmin,
    checkUser,
  };