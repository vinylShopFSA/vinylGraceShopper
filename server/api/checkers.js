const {
  models: { User },
} = require("../db");

const checkAdmin = (req, res, next) => {
    if (!req.user.isAdmin) {
    return res.status(403).send("this is not your path")
    } else {
     next()
    }
  };
  

  const checkUser = async (req, res, next) => {
    try{
    const token = req.headers.authorization
    const user = await User.findByToken(token)
    req.user =  user
    next()
    }catch(err){
      console.log(err)
      res.sendStatus(403);
    }
  }

  module.exports = {
    checkAdmin,
    checkUser,
  };