const checkAdmin = (req, res, next) => {
  console.log(req.headers)
    if (req.user && req.user) {
        console.log(req.user, "req")
      next();
    } else {
      res.sendStatus(403);
    }
  };
  
  const userOrAdminCheck = (req, res, next) => {
    if (req.user || req) {
      next();
    } else {
      res.sendStatus(403);
    }
  };

  
  module.exports = {
    checkAdmin,
    userOrAdminCheck,
  };