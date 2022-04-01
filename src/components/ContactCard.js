import React from "react";
import lekan from "../images/lekan.jpg";

const ContactCard = (props) => {
  const { id, name, email, address } = props.contacts;
  return (
    <div className="item">
      <img className="ui avatar image" alt="" src={lekan} />
      <div className="content">
        <div className="Header">{name}</div>
        <div>{email}</div>
        <div>{address}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "10px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};
export default ContactCard;
