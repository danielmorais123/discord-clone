import React from "react";
import "../styles/Message.css";
import { Avatar } from "@material-ui/core";

function Message() {
  return (
    <div className="messages_bar">
      <Avatar className="avatar"/>
      <div className="message">
        <div className="autor_data">
          <h4>Autor</h4>
          <h6>{new Date().toDateString()}</h6>
        </div>
        <p>message</p>
      </div>
    </div>
  );
}

export default Message;
