import React, { useState } from "react";
import "../styles/RightDiscord.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleIcon from "@mui/icons-material/People";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@material-ui/core";
import Message from "./Message";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import {
  selectChannelId,
  selectChannelName,
} from "../features/counter/appSlice";

function RightDiscord() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");

  return (
    <div className="right_side">
      <div className="top_header">
        <div className="left_side_div">
          <h2>
            <span className="span_channel_name"># </span>
            {channelName}
          </h2>
        </div>
        <div className="right_side_div">
          <NotificationsIcon className="icons-top" />
          <PushPinIcon className="icons-top" />
          <PeopleIcon className="icons-top" />
          <div className="input_search">
            <input placeholder="Search" />
            <SearchIcon className="icons-top" />
          </div>
          <SendIcon className="icons-top" />
          <HelpIcon className="icons-top" />
        </div>
      </div>
      <div className="messages">
        <Message />
        <Message />
        <Message />
      </div>
      <div className="bottom_bar_message">
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            placeholder={`Message #${channelName}`}
            className="send_message"
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="submit_button">
            Send Message
          </button>
        </form>
        <div className="bottom_icons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default RightDiscord;
