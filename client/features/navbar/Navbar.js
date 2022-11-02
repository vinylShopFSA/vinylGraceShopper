import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Button,
} from "@mui/material";

const Navbar = (props) => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);
  const { countCartItems } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
<AppBar position="static" color="transparent">
      <Toolbar>
        <Typography>
          <Link to="/">
            <h1>
              <img
                src="https://i.ibb.co/B6Kc6qg/Albums-1.gif"
                alt="The Groove"
                width="400px"
              ></img>
            </h1>
          </Link>
        </Typography>

        <Typography sx={{ marginLeft: "auto" }}>
       
        <Link to="/currentOrder">
          <h4>
          <Badge badgeContent={countCartItems} color="primary">
                <IconButton>
            <img
              src="https://freepngimg.com/thumb/categories/1325.png"
              width="40px"
            ></img>
            {/* {countCartItems} items */}
            </IconButton>
              </Badge>
          </h4>
        </Link>
          <nav>
            {isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
                <Link to = "/userProfile">View Profile </Link>
            {isAdmin && (
                  <Link
                    to="/userList" > View User List </Link> )}
            {isAdmin && (
                  <Link
                    to="/addAlbum" > Add an Album </Link> )}
                <Link to="/">Home</Link>
                <button type="button" onClick={logoutAndRedirectHome}>
                  Logout
                </button>
              </div>
            ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <Button>
                  <Link to="/login">Login</Link>
                </Button>
                <Button>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </nav>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar