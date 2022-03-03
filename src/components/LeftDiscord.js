import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../styles/LeftDiscord.css";
import AddIcon from "@mui/icons-material/Add";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";
import Channel from "./Channel";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import db from "../firebase/firebase";

function LeftDiscord() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    onSnapshot(
      collection(db, "channels"),
      (snapshot) => {
        setChannels(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            channel: doc.data(),
          }))
        );
      },
      (error) => alert(error.message)
    );
  }, []);

  const addChannel = () => {
    const channelName = prompt("Enter a channel Name");

    if (channelName) {
      addDoc(collection(db, "channels"), {
        channelName: channelName,
      }).then((doc) => console.log(doc));
    }
  };

  return (
    <div className="left_side">
      <div className="left_side_top">
        <h2>Eureka Ditadura</h2>
        <KeyboardArrowDownIcon className="left_side_back_arrow" />
      </div>
      <div className="left_side_text_channels_info">
        <div className="left_side_left_text_channels_info">
          <KeyboardArrowDownIcon className="left_side_text_channels_info_icons" />
          <h4>Text Channels</h4>
        </div>
        <AddIcon
          onClick={addChannel}
          className="left_side_text_channels_info_icons"
        />
      </div>
      <div className="left_side_channels">
        {channels.map(({ id, channel }) => (
          <Channel key={id} id={id} channelName={channel.channelName} />
        ))}
      </div>
      <div className="left_side_voice_chat">
        <div className="voice_connected_signal">
          <SignalCellularAltIcon className="signal-icon" />
          <p>Voice Connected</p>
        </div>
        <div>
          <InfoIcon className="info-call-icons" />
          <CallIcon className="info-call-icons" />
        </div>
      </div>
      <div className="left_side_bottom_tab">
        <div className="profile_tab">
          <Avatar onClick={() => signOut(auth)} src={user.photo} />
          <div className="profile_info">
            <h4>{user.displayName}</h4>
            <h5>{user.uid.substring(0, 5)}</h5>
          </div>
        </div>
        <div className="icons-profile-container">
          <MicIcon className="icons-profile" />
          <HeadsetIcon className="icons-profile" />
          <SettingsIcon className="icons-profile" />
        </div>
      </div>
    </div>
  );
}

export default LeftDiscord;
