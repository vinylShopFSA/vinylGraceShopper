const checkAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        console.log(req.user, "req")
      next();
    } else {
      res.sendStatus(403);
    }
  };
  
  const userOrAdminCheck = (req, res, next) => {
    if (req.user || req.user.isAdmin) {
      next();
    } else {
      res.sendStatus(403);
    }
  };
  
  module.exports = {
    checkAdmin,
    userOrAdminCheck,
  };