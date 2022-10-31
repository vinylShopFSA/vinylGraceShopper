import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

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
    <div>
      <div>
        <Link to="/">
          <h1>
            The Groove{" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/11/Vinyl_record_orange.png"
              width="35px"
            ></img>
          </h1>
        </Link>
        <h4>NYC's Best Vinyl Selection Since 2022</h4>
        <Link to="/currentOrder">
          <h4>
            <img
              src="https://freepngimg.com/thumb/categories/1325.png"
              width="20px"
            ></img>
            {countCartItems} items
          </h4>
        </Link>
      </div>

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
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
