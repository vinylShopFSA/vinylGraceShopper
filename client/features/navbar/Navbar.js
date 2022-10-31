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
  const { countCartItems } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
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

              {/* <IconButton>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/11/Vinyl_record_orange.png"
                  width="35px"
                ></img>
              </IconButton> */}
            </h1>
          </Link>
          {/* <Typography sx={{ fontStyle: "italic", fontWeight: "bold" }}>
            NYC's Best Vinyl Selection Since 2022
          </Typography> */}
        </Typography>
        <Typography sx={{ marginLeft: "auto" }}>
          <Link to="/cart">
            <h4>
              <Badge badgeContent={countCartItems} color="primary">
                <IconButton>
                  <img
                    src="https://freepngimg.com/thumb/categories/1325.png"
                    width="40px"
                  ></img>
                </IconButton>
              </Badge>
            </h4>
          </Link>

          <nav>
            {isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
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

export default Navbar;
