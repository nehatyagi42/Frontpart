import React, { Fragment } from "react";

import { Link } from 'react-router-dom';

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { FaTelegramPlane } from "react-icons/fa";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/DynamicForm">
          <i className="fas fa-user" /> <span className="hide-sm"></span>
        </Link>
      </li>

      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul style={{marginTop:"10px"}}>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        <Link to="/flightform">ATS_Message(Flight_Forms)</Link>
      </button>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        <Link to="/register">Register</Link>
      </button>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        <li>
          <Link to="/login">Login</Link>
        </li>
      </button>
    </ul>
  );

  return (
    <nav
      className="navbar navbar-dark bg-dark" /* style={{ backgroundColor:"#B3C7D6FF"}} */
    >
      <h3>
        <Link to="/">

          <FaTelegramPlane/> FlightAPP
        </Link>
      </h3>

      <div className="collapse navbar-collapse" id="navbarsExample02"></div>

      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
