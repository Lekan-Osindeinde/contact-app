import React from "react";
import { Link } from "react-router-dom";
import lekan from "../images/lekan.jpg";
const ContactDetail = (props) => {
  const { name, email, address } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={lekan} alt="lekan" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
          <div className="description">{address}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ContactDetail;
